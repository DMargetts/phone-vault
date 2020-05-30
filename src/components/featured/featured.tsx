import React from "react";
import featuredStyle from "./featuredStyle.module.scss";
import samsung from "../../images/samsung-galaxy-s10-prism-white.png";
import apple from "../../images/iPhone_11_Purple.jpg";
import lg from "../../images/LG_G8X_ThinQ_Catalog_Single.png";
import google from "../../images/google-pixel-2-xl-just-black.jpg";
import Container from "../container/container";

const featured = () => {
  return (
    <Container>
      <div className={featuredStyle.featured}>
        <img src={samsung} alt="samsung" />
        samsung
        <img src={apple} alt="apple" />
        apple
        <img src={lg} alt="leg" />
        lg
        <img src={google} alt="google" />
        google
      </div>
    </Container>
  );
};

export default featured;
