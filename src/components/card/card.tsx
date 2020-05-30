import React from "react";
import cardStyle from "./cardStyle.module.scss";
interface cardProps {
  image: string;
  alt: string;
}

const card = ({ image, alt }: cardProps) => {
  return (
    <div className={cardStyle.card}>
      <img src={image} alt={alt} />
      <p>{alt}</p>
    </div>
  );
};

export default card;
