import React from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";

const Card = ({
  id,
  src,
  title,
  description,
  price
}) => {
  const history = useHistory();

  return (
    <div
      className="card"
      onClick={() =>
        history.push(`/listing/${id}`)
      }
    >
      <img src={src} alt={title} />

      <div className="card_info">
        <h2>{title}</h2>

        <p>{description}</p>

        <h3>R{price}/night</h3>
      </div>
    </div>
  );
};

export default Card;