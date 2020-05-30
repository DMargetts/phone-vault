import React from "react";
import Header from "../components/header/header";
import TextAndImage from "../components/textAndImage/textAndImage";
import Featured from "../components/featured/featured";
import CallToAction from "../components/callToAction/callToAction";
import Footer from "../components/footer/footer";

const home = () => {
  return (
    <div>
      <Header />
      <TextAndImage />
      <Featured />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default home;
