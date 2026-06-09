import React from 'react';
import { Button } from '@mui/material';
import "./SearchPage.css";
import SearchResult from './SearchResult';


const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage_info'>
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      <SearchResult 
      img="https://cf.bstatic.com/xdata/images/hotel/square240/789473791.webp?k=f9ba01750681efe3af1785f51582c94313847b5c82e0e3bce1c0306a31d32153&o="
      location="Private room in center of London"
      title="Stay at this spacious Edward House"
      description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking"
      star={4.73}
      price="R1000 / night"
      total="R5000 total"
      />
      <SearchResult 
      img="https://cf.bstatic.com/xdata/images/hotel/square240/789473791.webp?k=f9ba01750681efe3af1785f51582c94313847b5c82e0e3bce1c0306a31d32153&o="
      location="Private room in center of London"
      title="Independent luxury studio apartment"
      description="2 guest . 3 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking"
      star={4.3}
      price="R2000 / night"
      total="R6500 total"
      />
      <SearchResult 
      img="https://cf.bstatic.com/xdata/images/hotel/square240/789473791.webp?k=f9ba01750681efe3af1785f51582c94313847b5c82e0e3bce1c0306a31d32153&o="
      location="Private room in center of London"
      title="London Studio Apartments"
      description="4 guest . 4 bedroom . 4 bed . 2 bathrooms . Wifi . Kitchen . Free parking . Washing Machinine"
      star={3.8}
      price="R4000 / night"
      total="R9000 total"
      />
        <SearchResult 
      img="https://cf.bstatic.com/xdata/images/hotel/square240/789473791.webp?k=f9ba01750681efe3af1785f51582c94313847b5c82e0e3bce1c0306a31d32153&o="
      location="Private room in center of London"
      title="30 mins to Oxford Street"
      description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machinine"
      star={3.8}
      price="R4000 / night"
      total="R9000 total"
      />
    </div>
  )
}

export default SearchPage