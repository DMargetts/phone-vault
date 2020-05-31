import React from "react";
import formStyle from "./formStyle.module.scss";
const form = () => {
  return (
    <div>
      <form className={formStyle.form}>
        <div className={formStyle.name}>
          <input type="text" placeholder="First Name" />
          <input type="email" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
        <div className={formStyle.location}>
          <select placeholder="Province">
            <option value="Manitoba">Manitoba</option>
            <option value="Ontario">Ontario</option>
            <option value="Saskatchewan">Saskatchewan</option>
            <option value="Alberta">Alberta</option>
          </select>
          <input type="text" placeholder="Postal Code" />
        </div>
        <button>Order</button>
      </form>
    </div>
  );
};

export default form;
