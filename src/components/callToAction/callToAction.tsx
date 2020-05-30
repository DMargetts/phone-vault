import React from "react";
import callToActionStyle from "./callToActionStyle.module.scss";
const callToAction = () => {
  return (
    <div className={callToActionStyle.container}>
      <button>go to shop</button>
    </div>
  );
};

export default callToAction;
