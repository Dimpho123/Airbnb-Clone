import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../actions/modalAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Star,
  FavoriteBorder,
  Share,
  Wifi,
  Kitchen,
  LocalParking,
  AcUnit
} from "@mui/icons-material";

import "./ListingScreen.css";


const ListingScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

const [guests, setGuests] = useState(1);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const userLogin = useSelector(
    (state) => state.userLogin
  );

  const { userInfo } = userLogin;

  const listingList = useSelector(
    (state) => state.listingList
  );

  const { listings = [] } = listingList;

  const bookHandler = () => {
    if (!userInfo) {
      dispatch(openModal("open", "login"));
      return;
    }

    if (!startDate || !endDate) {
      alert("Please select dates");
      return;
    }

    alert("Booking Successful!");
  };

const listing = listings.find(
  (x) => x.id === Number(id)
);

if (!listing) {
  return <h2>Listing not found</h2>;
}
// Calculate number of nights
const nights =
  startDate && endDate
    ? Math.ceil(
        (endDate - startDate) / (1000 * 60 * 60 * 24)
      )
    : 0;

const cleaningFee = 500;
const serviceFee = 250;

const stayPrice = listing
  ? listing.price * nights
  : 0;

const totalPrice =
  stayPrice + cleaningFee + serviceFee;
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

            <img src={listing.img} alt="" />
            <img src={listing.img} alt="" />
            <img src={listing.img} alt="" />
            <img src={listing.img} alt="" />

        </div>

    </div>


    <div className="listing_content">

        {/* LEFT SIDE */}

        <div className="listing_left">

            <h2>
                Entire apartment hosted by Airbnb Host
            </h2>

            <p>

                {guests} Guests •

                {listing.bed_num} Bedrooms •

                {listing.bath_num} Bathrooms

            </p>

            <hr />

            <div className="feature">

                <h3> Entire Apartment</h3>

                <p>
                    You'll have the whole apartment to yourself.
                </p>

            </div>

            <div className="feature">

                <h3> Enhanced Cleaning</h3>

                <p>
                    Cleaned according to Airbnb standards.
                </p>

            </div>

            <div className="feature">

                <h3> Self Check-in</h3>

                <p>
                    Smart lock for easy access.
                </p>

            </div>

            <div className="feature">

                <h3> Free Cancellation</h3>

                <p>
                    Cancel before check-in for a full refund.
                </p>

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


        {/* RIGHT BOOKING CARD */}

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
      onChange={(e) => setGuests(Number(e.target.value))}
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

        <span>
          R{stayPrice}
        </span>
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

        <strong>
          R{totalPrice}
        </strong>
      </div>
      </>
      )}

</div> 

</div> 
</div>



);
};

 



export default ListingScreen;