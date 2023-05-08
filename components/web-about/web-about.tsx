import React from "react";
import HeaderWebAbout from "./header-web-about";
import BgWebAbout from "./bg-web-about";
import ProductDescription from "./product-description";
import ProductPreview from "./product-preview";

type Props = {};

const WebAbout = (props: Props) => {
  return (
    <div className="clswebabout wapperlayout">
      <HeaderWebAbout />
      <BgWebAbout />
      <div className="clswebabout-content">
        <ProductDescription />
        <ProductPreview />
      </div>
    </div>
  );
};

export default WebAbout;
