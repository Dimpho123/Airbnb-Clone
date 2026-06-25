import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useHistory } from "react-router-dom";
import "./Card.css";

const Card = ({
  id,
  src,
  title,
  city,
  price,
  rating
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
          <span>⭐ {rating}</span>

          <span>
            <strong>R{price}</strong>/night
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;