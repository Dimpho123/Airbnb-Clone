import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../actions/modalAction";
import { getAccommodation } from "../api/accommodationApi";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Star,
  FavoriteBorder,
  Share,
  Wifi,
  Kitchen,
  LocalParking,
  AcUnit,
} from "@mui/icons-material";

import "./ListingScreen.css";

const ListingScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [guests, setGuests] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const data = await getAccommodation(id);
        setListing(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  const bookHandler = () => {
    if (!userInfo) {
      dispatch(openModal("open", "login"));
      return;
    }

    if (!startDate || !endDate) {
      alert("Please select your check-in and check-out dates.");
      return;
    }

    alert("Booking Successful!");
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!listing) {
    return <h2>Listing not found</h2>;
  }

  const nights =
    startDate && endDate
      ? Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
      : 0;

  const cleaningFee = 500;
  const serviceFee = 250;

  const stayPrice = listing.price * nights;
  const totalPrice = stayPrice + cleaningFee + serviceFee;
  //const data = await getAccommodation(id);

  return (
    <div className="listing">

      {/* TITLE */}

      <div className="listing_header">

        <h1>{listing.title}</h1>

        <div className="listing_actions">

          <span>
            <Star className="smallIcon" />
            4.95 (184 Reviews)
          </span>

          <span>{listing.city}</span>

          <span>
            <Share />
            Share
          </span>

          <span>
            <FavoriteBorder />
            Save
          </span>

        </div>

      </div>

      {/* IMAGE GALLERY */}

      <div className="gallery">

        <div className="gallery_big">
          <img
            src={listing.img}
            alt={listing.title}
          />
        </div>

        <div className="gallery_small">
          <img src="https://tse4.mm.bing.net/th/id/OIP.H_UHj0z9Dv0cnkoiVmGsbwHaE8?pid=Api&h=220&P=0" alt="" />
          <img src="https://tse4.mm.bing.net/th/id/OIP.O3re6BxV1u0iPTap3lmM0QHaE8?pid=Api&h=220&P=0" alt="" />
          <img src="https://tse1.mm.bing.net/th/id/OIP.Fck-eXD-lC8b2CWlMBOniwHaKx?pid=Api&h=220&P=0" alt="" />
          <img src={listing.img} alt="" />
        </div>

      </div>

      <div className="listing_content">

        {/* LEFT */}

        <div className="listing_left">

          <h2>
            Entire apartment hosted by Dimpho lebotsa
          </h2>

          <p>
            {guests} Guests • {listing.bed_num} Bedrooms •{" "}
            {listing.bath_num} Bathrooms
          </p>

          <hr />

          <div className="feature">
            <h3>Entire Apartment</h3>
            <p>You'll have the whole apartment to yourself.</p>
          </div>

          <div className="feature">
            <h3>Enhanced Cleaning</h3>
            <p>Cleaned according to Airbnb standards.</p>
          </div>

          <div className="feature">
            <h3>Self Check-in</h3>
            <p>Smart lock for easy access.</p>
          </div>

          <div className="feature">
            <h3>Free Cancellation</h3>
            <p>Cancel before check-in for a full refund.</p>
          </div>

          <hr />

          <p className="description">
            {listing.description}
          </p>

          <div className="amenities">

            <h2>What this place offers</h2>

            <div className="amenity">
              <Wifi />
              Wi-Fi
            </div>

            <div className="amenity">
              <Kitchen />
              Kitchen
            </div>

            <div className="amenity">
              <LocalParking />
              Free Parking
            </div>

            <div className="amenity">
              <AcUnit />
              Air Conditioning
            </div>

          </div>

        </div>

        {/* BOOKING CARD */}

        <div className="booking_card">

          <h2>
            R{listing.price}
            <span> / night</span>
          </h2>

          <div className="booking_dates">

            <div>

              <label>CHECK-IN</label>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Add date"
              />

            </div>

            <div>

              <label>CHECK-OUT</label>

              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={startDate}
                placeholderText="Add date"
              />

            </div>

          </div>

          <div className="guest_box">

            <label>Guests</label>

            <select
              value={guests}
              onChange={(e) =>
                setGuests(Number(e.target.value))
              }
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
              <option value={5}>5 Guests</option>
              <option value={6}>6 Guests</option>
            </select>

          </div>

          <button
            className="reserve_btn"
            onClick={bookHandler}
          >
            Reserve
          </button>

          <p className="notice">
            You won't be charged yet
          </p>

          {nights > 0 && (
            <>

              <div className="price_row">
                <span>
                  R{listing.price} × {nights}{" "}
                  {nights === 1 ? "night" : "nights"}
                </span>

                <span>R{stayPrice}</span>
              </div>

              <div className="price_row">
                <span>Cleaning Fee</span>
                <span>R{cleaningFee}</span>
              </div>

              <div className="price_row">
                <span>Service Fee</span>
                <span>R{serviceFee}</span>
              </div>

              <hr />

              <div className="price_total">
                <strong>Total</strong>
                <strong>R{totalPrice}</strong>
              </div>

            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default ListingScreen;