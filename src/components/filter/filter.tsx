import React, { SyntheticEvent } from "react";
import filterStyle from "./filterStyle.module.scss";

const filter = ({ brand }: any) => {
  return (
    <div className={filterStyle.container}>
      <div className={filterStyle.selection}>
        <label htmlFor="samsung">Samsung </label>
        <input type="checkbox" name="samsung" onClick={brand} />
      </div>
      <div className={filterStyle.selection}>
        <label htmlFor="apple">Apple </label>
        <input type="checkbox" name="apple" onClick={brand} />
      </div>
      <div className={filterStyle.selection}>
        <label htmlFor="google">Google </label>
        <input type="checkbox" name="google" onClick={brand} />
      </div>
      <div className={filterStyle.selection}>
        <label htmlFor="lg">LG </label>
        <input type="checkbox" name="lg" onClick={brand} />
      </div>
      <div className={filterStyle.selection}>
        <label htmlFor="huawei">Huawei </label>
        <input type="checkbox" name="huawei" onClick={brand} />
      </div>
      <div className={filterStyle.selection}>
        <label htmlFor="motorola">Motorola </label>
        <input type="checkbox" name="motorola" onClick={brand} />
      </div>
      <div className={filterStyle.selection}>
        <label htmlFor="sonim">Sonim </label>
        <input type="checkbox" name="sonim" onClick={brand} />
      </div>
    </div>
  );
};

export default filter;
