import React, { useEffect } from "react";
import "./Home.css";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { listListing } from "../actions/listingActions";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div className="home">

      

      {/* Popular Places */}
      <div className="location_section">
        <h2>Popular Destinations</h2>

        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <div className="home_section">
            {listings.map((listing) => (
              <Card
                key={listing.id}
                id={listing.id}
                src={listing.img}
                title={listing.title}
                description={listing.description}
                price={listing.price}
              />
            ))}
          </div>
        )}
      </div>

      {/* Static Locations */}
      <div className="location_section">
        <h2>Explore The World</h2>

        <div className="home_section">

          <Card
            id={101}
            src="https://cf.bstatic.com/xdata/images/hotel/square240/311542428.webp?k=477faef3e0d6ea290a0b44a8456421990b3878554240aa6a40c0c14aa764f9f7&o="
            title="Cape Town"
            description="Table Mountain, beaches and luxury stays."
            price="3500"
          />

          <Card
            id={102}
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"
            title="Tokyo"
            description="Experience Japan's modern culture."
            price="4200"
          />

          <Card
            id={103}
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
            title="London"
            description="Luxury apartments in the city center."
            price="5000"
          />

          <Card
            id={104}
            src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2"
            title="New York"
            description="Amazing skyline and city experiences."
            price="6500"
          />

          <Card
            id={105}
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            title="Maldives"
            description="Private villas and ocean views."
            price="12000"
          />

        </div>
      </div>

    </div>
  );
};

export default Home;