import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../actions/modalAction';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ListingScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const userLogin = useSelector(
    (state) => state.userLogin
  );

  const { userInfo } = userLogin;

  const listingList = useSelector(
    (state) => state.listingList
  );

  const { listings } = listingList;

  const listing = listings.find(
    (x) => x.id === Number(id)
  );

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

  if (!listing) {
    return <h2>Listing not found</h2>;
  }

  return (
    <div className="listingScreen">

      <img
        src={listing.img}
        alt={listing.title}
        width="500"
      />

      <h1>{listing.title}</h1>

      <p>{listing.description}</p>

      <h3>
        {listing.bed_num} Beds • {listing.bath_num} Baths
      </h3>

      <h2>R{listing.price}/night</h2>

      <div>
        <h3>Check In</h3>

        <DatePicker
          selected={startDate}
          onChange={(date) =>
            setStartDate(date)
          }
        />
      </div>

      <div>
        <h3>Check Out</h3>

        <DatePicker
          selected={endDate}
          onChange={(date) =>
            setEndDate(date)
          }
        />
      </div>

      <button onClick={bookHandler}>
        Book Now
      </button>

    </div>
  );
};

export default ListingScreen;