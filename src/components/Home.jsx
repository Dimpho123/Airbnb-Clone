import React, { useEffect } from 'react';
import Banner from './Banner';
import "./Home.css";
import Card from "./Card";
import { useDispatch, useSelector } from 'react-redux';
import { listListing } from '../actions/listingActions';

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  console.log("Listings from Redux:", listings);

  return (
    <div className='home'>
      <Banner />
       {loading ? (
        <h2>Loading...</h2>
       ) : error ? (
        <h3>{error}</h3>
       ) : (
      <div className='home_section'>
       {listings.map((listing) => (
            <Card
              key={listing.id}
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
      </div>
       )}
      {/*  Cards 
      <div className='home_section'>
        <Card
          src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-1972437/original/ee156e07-9256-46c2-aa3e-33f39e6bfdc9.jpeg?im_w=480"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
        />

        <Card
          src="https://cf.bstatic.com/xdata/images/hotel/square240/799707020.webp?k=d81e379bceba2b06b674234181ff0e02069ec64cbf50e6081a940dc72f8168f2&o="
          title="Unique stays"
          description="Spaces that are more than just a place to sleep"
        />

        <Card
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/399329191.jpg?k=9189defc3171ac6737da0766940362e793b0f9b8c1531116950383d3308aa027&o="
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>

      <div className='home_section'>
        <Card
          src="https://cf.bstatic.com/xdata/images/hotel/square240/575840417.webp?k=1357488ad91d0771eb4d0931ac56603eeb0fbae7ce1a244915db0c8a49a7d7de&o="
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in sunny Bournemouth"
          price="R10000/night"
        />

        <Card
          src="https://cf.bstatic.com/xdata/images/hotel/square240/820676752.webp?k=48b4bfd92a6183bd3ce73795a601d6a629fd3e628987385d81d8160d87c76ac5&o="
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="R8000/night"
        />

        <Card
          src="https://cf.bstatic.com/xdata/images/hotel/square240/833042732.webp?k=7547c01e9cc0a5e83c4c67e9ec38f99a50fae7b931403a3bd3525ca50dd73d99&o="
          title="1 Bedroom Apartment"
          description="Superhost with great amenities and a fabulous shopping complex nearby"
          price="R1800/night"
        />
      </div>
      */}
    </div>
    
  );
};


export default Home;