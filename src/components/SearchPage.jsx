import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { listListing } from '../actions/listingActions';
import "./SearchPage.css";
import SearchResult from './SearchResult';
import { useLocation } from "react-router-dom";


const SearchPage = () => {
  const dispatch = useDispatch();

const listingList = useSelector(
  state => state.listingList
);

const { loading, error, listings = [] } = listingList;


const search = useLocation();

const selectedLocation = new URLSearchParams(search.search).get("location");
const filteredListings = selectedLocation
  ? listings.filter(
      (listing) =>
        listing.city &&
        listing.city.toLowerCase() ===
          selectedLocation.toLowerCase()
    )
  : listings;

useEffect(() => {
  dispatch(listListing());
}, [dispatch]);
  return (
  <div className='searchPage'>
    <div className='searchPage_info'>
      <p>62 stays . 26 august to 30 august . 2 guest</p>
      <h1>
  {selectedLocation
    ? `Stays in ${selectedLocation}`
    : "All Stays"}
</h1>

      <Button variant='outlined'>Cancellation Flexibility</Button>
      <Button variant='outlined'>Type of place</Button>
      <Button variant='outlined'>Price</Button>
      <Button variant='outlined'>Rooms and beds</Button>
      <Button variant='outlined'>More filters</Button>
    </div>

    {loading && <h2>Loading...</h2>}

    {error && <h2>{error}</h2>}

    {filteredListings &&
  filteredListings.map((listing) => (
        <SearchResult
  key={listing._id}
  id={listing._id}
  img={listing.img}
  location={`${listing.city}, ${listing.street}`}
  title={listing.title}
  description={listing.description}
  price={`R${listing.price}/night`}
  total={`R${listing.price * 5} total`}
  star={4.8}
/>
      ))}
  </div>
);
  
}

export default SearchPage