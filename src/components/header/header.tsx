import React from "react";
import Navigation from "../navigation/navigation";
import headerStyle from "./headerStyle.module.scss";

const header = () => {
  return (
    <div className={headerStyle.header}>
      <Navigation />
      <div className={headerStyle.intro}>
        <h1>Phone Vault</h1>
        <button>Shop Phones</button>
      </div>
    </div>
  );
};

export default header;
