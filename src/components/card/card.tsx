import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions";
import cardStyle from "./cardStyle.module.scss";

interface cardProps {
  image: string;
  alt: string;
  price: number;
  addItem: any;
}

const card = ({ image, alt, price, addItem }: cardProps) => {
  return (
    <div className={cardStyle.card} onClick={() => addItem(image, alt, price)}>
      <img src={image} alt={alt} />
      <p>{alt}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (image: string, alt: string, price: number) => {
    const obj: [string, number, string] = [image, price, alt];
    return dispatch(addItem(obj));
  },
});

export default connect(null, mapDispatchToProps)(card);
