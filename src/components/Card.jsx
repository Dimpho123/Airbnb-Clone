import React from "react";
import { useHistory } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import "./Card.css";

const Card = ({
  id,
  src,
  title,
  city,
  price,
  rating = 4.9,
}) => {
  const history = useHistory();

  return (
    <div
      className="card"
      onClick={() => history.push(`/listing/${id}`)}
    >
      <img src={src} alt={title} />

      <FavoriteBorderIcon className="heart" />

      <div className="card_info">

        <h4>{city}</h4>

        <p>{title}</p>

        <div className="card_bottom">

          <span className="rating">
  {[...Array(Math.floor(rating))].map((_, index) => (
    <StarIcon key={index} className="rating_icon" />
  ))}
</span>

          <span>
            <strong>R{price}</strong>
          </span>

        </div>

      </div>
    </div>
  );
};

export default Card;