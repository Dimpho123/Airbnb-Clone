import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useDispatch, useSelector} from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import './Header.css'
import { openModal } from '../../actions/modalAction';
import { logout } from '../../actions/userActions';
import GuestCounter from "../GuestCounter";
import { useEffect } from "react";
import { listListing } from "../../actions/listingActions";



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
useEffect(() => {
  dispatch(listListing());
}, [dispatch]);
const searchHandler = () => {
  history.push(
    `/search?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&infants=${infants}&pets=${pets}`
  );
};
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const openModalHandle = () => {
   dispatch(openModal("open", "login"))
  };
  const openRegisterModal = () => {
  dispatch(openModal("open", "register"));
};
  const logoutHandler = () => {
  dispatch(logout());
};
const listingList = useSelector(state => state.listingList);

const { listings = [] } = listingList;

const cities = [...new Set(listings.map(item => item.city))];


  return (
    <div className='header'>
      <img
        src="https://s.yimg.com/zb/imgv1/26347c9d-9458-3369-b5a8-d946c1771358/t_500x300"
        className="header_logo"
        alt="logo"
      />

      {/* Search Bar */}
      <div className="home_search">
  <div className="search_box">

    {/* WHERE */}
    <div className="search-item">

    <h4>Where</h4>

    <p
        onClick={() => setShowLocation(!showLocation)}
    >
        {location || "Search destinations"}
    </p>

    {showLocation && (

        <div
            className="popup"
            onClick={(e) => e.stopPropagation()}
        >

            {cities.map(city => (

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

            ))}

        </div>

    )}

</div>

    {/* WHEN */}
   <div className="search-item">

    <h4>When</h4>

    <p
        onClick={() =>
            setShowCalendar(true)
        }
    >
        {checkIn && checkOut

            ? `${checkIn.toLocaleDateString()} - ${checkOut.toLocaleDateString()}`

            : "Add dates"}

    </p>

    {showCalendar && (

        <div
            className="popup"
            onClick={(e) => e.stopPropagation()}
        >

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

                        setShowCalendar(false);

                    }

                }}
            />

        </div>

    )}

</div>

    {/* GUESTS */}
    <div
  className="search-item"
  onClick={() => {
    setShowGuests(!showGuests);
    setShowCalendar(false);
    setShowLocation(false);
  }}
>
  <h4>Guests</h4>

  <p>
    {adults + children === 1
      ? "1 guest"
      : `${adults + children} guests`}
    {pets > 0 && ` • ${pets} pet${pets > 1 ? "s" : ""}`}
  </p>

  {showGuests && (
    <div
  className="popup"
  onClick={(e) => e.stopPropagation()}
>

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
 <button
      className="search_btn"
      onClick={searchHandler}
    >
      <SearchIcon />
    </button>

  </div>
</div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="dropdown">
        <ExpandMoreIcon className='dropbtn' />
        <div className='dropdown-content'>
         {userInfo ? (
  <>
    <span>
      Welcome, {userInfo?.user?.name || userInfo?.name}
    </span>

    <span onClick={logoutHandler}>
      Log out
    </span>
  </>
) : (
  <>
    <span onClick={openRegisterModal}>
      Sign up
    </span>

    <span onClick={openModalHandle}>
      Log in
    </span>
  </>
)}
        
           <span>Help</span>
        </div>
        </div>
       <Avatar />
      </div>
    </div>
  );
};
  

export default Header