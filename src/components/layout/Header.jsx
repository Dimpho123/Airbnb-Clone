import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useDispatch, useSelector } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

import "./Header.css";

import { openModal } from "../../actions/modalAction";
import { logout } from "../../actions/userActions";
import { listListing } from "../../actions/listingActions";
import GuestCounter from "../GuestCounter";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();



  const [location, setLocation] = useState("");

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

 

  const [showLocation, setShowLocation] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [showMenu, setShowMenu] = useState(false);



  const locationRef = useRef(null);
  const calendarRef = useRef(null);
  const guestRef = useRef(null);
  const menuRef = useRef(null);

  

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const listingList = useSelector((state) => state.listingList);

  const {
    listings = [],
    loading,
    error,
  } = listingList;

 

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

 

  const cities = [
    ...new Set(
      listings
        .filter((item) => item.city)
        .map((item) => item.city)
    ),
  ];

 

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(e.target)
      ) {
        setShowLocation(false);
      }

      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target)
      ) {
        setShowCalendar(false);
      }

      if (
        guestRef.current &&
        !guestRef.current.contains(e.target)
      ) {
        setShowGuests(false);
      }

      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  // ===============================
  // LOGIN / LOGOUT
  // ===============================

  const openModalHandle = () => {
    dispatch(openModal("open", "login"));
  };

  const openRegisterModal = () => {
    dispatch(openModal("open", "register"));
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  

  const searchHandler = () => {
    history.push(
      `/search?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&infants=${infants}&pets=${pets}`
    );
  };

  return (
    <div className="header">

  {/* LOGO */}
  <img
    className="header_logo"
    src="https://s.yimg.com/zb/imgv1/26347c9d-9458-3369-b5a8-d946c1771358/t_500x300"
    alt="Airbnb"
    onClick={() => history.push("/")}
  />

  {/* SEARCH BAR */}
  <div className="home_search">

    <div className="search_box">

      {/* LOCATION */}
      <div
        className="search-item"
        ref={locationRef}
        onClick={() => {
          setShowLocation(true);
          setShowCalendar(false);
          setShowGuests(false);
        }}
      >
        <h4>Where</h4>

        <p>{location || "Search destinations"}</p>

        {showLocation && (
          <div className="popup">

            {loading ? (
              <div className="popup-item">
                Loading...
              </div>
            ) : error ? (
              <div className="popup-item">
                Failed to load locations
              </div>
            ) : cities.length > 0 ? (
              cities.map((city) => (
                <div
                  key={city}
                  className="popup-item"
                  onClick={() => {
                    setLocation(city);
                    setShowLocation(false);
                  }}
                >
                  {city}
                </div>
              ))
            ) : (
              <div className="popup-item">
                No locations available
              </div>
            )}

          </div>
        )}

      </div>

      {/* DATES */}
      <div
        className="search-item"
        ref={calendarRef}
        onClick={() => {
          setShowCalendar(true);
          setShowLocation(false);
          setShowGuests(false);
        }}
      >

        <h4>When</h4>

        <p>
          {checkIn && checkOut
            ? `${checkIn.toLocaleDateString()} - ${checkOut.toLocaleDateString()}`
            : "Add dates"}
        </p>

        {showCalendar && (
          <div className="popup">

            <DatePicker
              inline
              selectsRange
              startDate={checkIn}
              endDate={checkOut}
              onChange={(dates) => {
                const [start, end] = dates;

                setCheckIn(start);
                setCheckOut(end);

                if (start && end) {
                  setTimeout(() => {
                    setShowCalendar(false);
                  }, 300);
                }
              }}
            />

          </div>
        )}

      </div>

      {/* GUESTS */}
      <div
        className="search-item"
        ref={guestRef}
        onClick={() => {
          setShowGuests(true);
          setShowCalendar(false);
          setShowLocation(false);
        }}
      >

        <h4>Guests</h4>

        <p>
          {adults + children} Guest
          {adults + children !== 1 ? "s" : ""}
          {pets > 0 &&
            ` • ${pets} Pet${pets > 1 ? "s" : ""}`}
        </p>

        {showGuests && (

          <div className="popup guest-popup">

            <GuestCounter
              label="Adults"
              value={adults}
              setValue={setAdults}
              min={1}
            />

            <GuestCounter
              label="Children"
              value={children}
              setValue={setChildren}
            />

            <GuestCounter
              label="Infants"
              value={infants}
              setValue={setInfants}
            />

            <GuestCounter
              label="Pets"
              value={pets}
              setValue={setPets}
            />

          </div>

        )}

      </div>

      {/* SEARCH BUTTON */}
      <button
        className="search_btn"
        onClick={searchHandler}
      >
        <SearchIcon />
      </button>

    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="header_right">

    <p>Become a host</p>

    <LanguageIcon />

    <div
      className="dropdown"
      ref={menuRef}
    >

      <div
        className="dropdown-toggle"
        onClick={() =>
          setShowMenu(!showMenu)
        }
      >

        <ExpandMoreIcon />

        <Avatar />

      </div>

      {showMenu && (
        <div className="dropdown-content">

          {userInfo ? (
            <>
              <span>
                Welcome,{" "}
                {userInfo?.user?.name ||
                  userInfo?.name}
              </span>

              <span
                onClick={logoutHandler}
              >
                Log out
              </span>
            </>
          ) : (
            <>
              <span
                onClick={openRegisterModal}
              >
                Sign up
              </span>

              <span
                onClick={openModalHandle}
              >
                Log in
              </span>
            </>
          )}

          <span>Help</span>

        </div>
      )}

    </div>

  </div>

  </div>
  );
};

export default Header;


  