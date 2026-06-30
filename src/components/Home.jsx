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
            src="https://www.yebosouthafrica.com/wp-content/uploads/2021/06/va-waterfront-1536x614.jpg"
            title="Cape Town"
            description="Table Mountain, beaches and luxury stays."
            price="850"
          />

          <Card
            id={102}
            src="https://cdn.getyourguide.com/image/format=auto,fit=cover,gravity=auto,quality=60,width=270,height=180,dpr=1/tour_img/a6b70c8873fbed711b6eff247067b64e2e044569b6c9f18390c44e679bd6fc40.jpg"
            title="Tokyo"
            description="Fast & Furious Tokyo Drift."
            price="850"
          />

          <Card
            id={103}
            src="https://cdn.getyourguide.com/image/format=auto,fit=cover,gravity=auto,quality=60,width=270,height=180,dpr=1/tour_img/721ff2769c89e6227d9f5aadc909172f08e5c2643baf1c7ed348e5b66e6bde6c.jpg"
            title="Tokyo"
            description="Shinjuku Sumo Show & experience."
            price="400/per person"
          />

          <Card
            id={104}
            src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,height=440,dpr=1/tour_img/5f7b651435b28.jpeg"
            title="New York"
            description="NYC Statue City Cruises: Official Statue Of Liberty."
            price="R900/per person"
          />

          <Card
            id={105}
            src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,height=440,dpr=1/tour_img/5d417f825b714.jpeg"
            title="North West"
            description="Predator Safari with a Guide."
            price="530/per person"
          />

        </div>
      </div>

    </div>
  );
};

export default Home;