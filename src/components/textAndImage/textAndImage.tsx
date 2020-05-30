import React from "react";
import Container from "../container/container";
import textAndImageStyle from "./textAndImageStyle.module.scss";
import image from "../../images/man-holding-phone.jpg";

const textAndImage = () => {
  return (
    <Container>
      <div className={textAndImageStyle.flow}>
        <p className={textAndImageStyle.paragraph}>
          Aliquip culpa adipisicing laboris laboris proident. In velit in est
          voluptate deserunt eiusmod sunt fugiat nostrud dolore proident nostrud
          aute. Eiusmod anim non occaecat est esse consectetur laboris id
          adipisicing qui dolor ut consequat elit. Exercitation quis sint ea
          reprehenderit aliquip consectetur labore voluptate cillum Lorem veniam
          incididunt est laboris.
        </p>
        <img src={image} alt="man holding phone" />
      </div>
    </Container>
  );
};

export default textAndImage;
