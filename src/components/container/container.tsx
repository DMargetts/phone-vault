import React from "react";
import containerStyle from "./containerStyle.module.scss";

interface containerProps {
  children: React.ReactNode;
}
const container = ({ children }: containerProps) => {
  return <div className={containerStyle.container}>{children}</div>;
};

export default container;
