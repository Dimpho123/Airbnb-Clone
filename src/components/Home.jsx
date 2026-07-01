import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "./Card";
import { getAccommodations } from "../api/accommodationApi";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getAccommodations();
        setListings(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return <h2>Loading accommodations...</h2>;
  }

  return (
    <div className="home">

      <div className="location_section">
        <h2>Inspiration for your next trip</h2>

        <div className="home_section">
          {listings.map((listing) => (
            <Card
    key={listing._id}
    id={listing._id}
    src={listing.img}
    title={listing.title}
    city={listing.city}
    price={listing.price} 
    rating={listing.rating}
/>
          ))}
        </div>
      </div>

     <div className="location_section">
        <h2>Things to do on your trip</h2>

        <div className="home_section">

          <Card
            id={101}
            src="https://www.yebosouthafrica.com/wp-content/uploads/2021/06/va-waterfront-1536x614.jpg"
            title="Cape Town"
            description="Table Mountain, beaches and luxury stays."
            price="850/Per couple"
            rating= "4.5"
          />

          <Card
            id={102}
            src="https://cdn.getyourguide.com/image/format=auto,fit=cover,gravity=auto,quality=60,width=270,height=180,dpr=1/tour_img/a6b70c8873fbed711b6eff247067b64e2e044569b6c9f18390c44e679bd6fc40.jpg"
            title="Tokyo"
            description="Fast & Furious Tokyo Drift."
            price="850/Per couple"
            rating="3"
          />

          <Card
            id={103}
            src="https://cdn.getyourguide.com/image/format=auto,fit=cover,gravity=auto,quality=60,width=270,height=180,dpr=1/tour_img/721ff2769c89e6227d9f5aadc909172f08e5c2643baf1c7ed348e5b66e6bde6c.jpg"
            title="Tokyo"
            description="Shinjuku Sumo Show & experience."
            price="400/per person"
            rating="2"
          />

          <Card
            id={104}
            src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,height=440,dpr=1/tour_img/5f7b651435b28.jpeg"
            title="New York"
            description="NYC Statue City Cruises: Official Statue Of Liberty."
            price="900/per person"
            rating = "5"
          />

          <Card
            id={105}
            src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,height=440,dpr=1/tour_img/5d417f825b714.jpeg"
            title="North West"
            description="Predator Safari with a Guide."
            price="530/per person"
            rating="3"
          />

        </div>
      </div>
{/* Gift Cards Section */}

<div className="gift_section">

  <div className="gift_content">

    <h2>Shop Airbnb Gift Cards</h2>

    <p>
      Give your friends and family the gift of travel.
    </p>

    <button className="gift_btn">
      Learn More
    </button>

  </div>

  <div className="gift_image">

    <img
      src="https://tse3.mm.bing.net/th/id/OIP.WUq38SzUwZfHZ3l-glJ55wHaFj?pid=Api&h=220&P=0"
      alt="Gift Cards"
    />

  </div>

</div>



<div className="future_section">

  <h2>Inspiration for future getaways</h2>

  <div className="future_grid">

    <div className="future_card">
      <h3>Cape Town</h3>
      <p>Beachfront apartments</p>
    </div>

    <div className="future_card">
      <h3>Tokyo</h3>
      <p>Modern city lofts</p>
    </div>

    <div className="future_card">
      <h3>London</h3>
      <p>Luxury apartments</p>
    </div>

    <div className="future_card">
      <h3>New York</h3>
      <p>Stylish city homes</p>
    </div>

    <div className="future_card">
      <h3>Paris</h3>
      <p>Romantic escapes</p>
    </div>

    <div className="future_card">
      <h3>Dubai</h3>
      <p>Luxury villas</p>
    </div>

  </div>

</div>
    </div>
  );
};

export default Home;