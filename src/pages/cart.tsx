import React from "react";
import Navigation from "../components/navigation/navigation";
import Form from "../components/form/form";
import Container from "../components/container/container";
import ShopItems from "../components/shopItems/shopItems";
import Footer from "../components/footer/footer";
import cartStyle from "./cartStyle.module.scss";
import { connect } from "react-redux";

interface cartProps {
  itemArray: any;
}

const cart = ({ itemArray }: cartProps) => {
  const taxes =
    itemArray.reduce((acc: number, item: number[]) => (acc += item[1]), 0) *
    0.12;
  const subTotal = itemArray.reduce(
    (acc: number, item: number[]) => (acc += item[1]),
    0
  );
  return (
    <div>
      <Navigation />
      <Container>
        <div className={cartStyle.address}>
          <h1>Shipping Address</h1>
          <Form />
        </div>
        <div className={cartStyle.shopItems}>
          {itemArray.map((phone: any) => {
            return (
              <ShopItems image={phone[0]} price={phone[1]} alt={phone[2]} />
            );
          })}
          <div className={cartStyle.price}>
            <h4>Subtotal: ${subTotal}</h4>
            <h4>Tax: ${taxes}</h4>
            <h4>Shipping: $11</h4>
            <h2>Total ${subTotal + taxes + 11}</h2>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  itemArray: state.itemArray,
});
export default connect(mapStateToProps)(cart);
