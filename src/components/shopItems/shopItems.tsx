import React from "react";

import shopItemStyle from "./shopItemsStyle.module.scss";

interface shopItems {
  image: string;
  price: number;
  alt: string;
}

const shopItems = ({ image, price, alt }: shopItems) => {
  let total: number = price;
  return (
    <div className={shopItemStyle.item}>
      <img src={image} alt={alt} />
      <p>{alt}</p>

      <h3>${total}</h3>
    </div>
  );
};

export default shopItems;
