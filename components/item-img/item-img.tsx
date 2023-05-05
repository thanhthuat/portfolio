import React from "react";

type Props = {};

const ItemImg = (props: Props) => {
  return (
    <div className="clsitemimg">
      <div className="clsitemimg-content">
        <img
          className="clsitemimg-image"
          src="/image/category-project/Image.png"
          alt="image"
        />
        <div className="clsitemimg-text">
          <h3>WEBSITE name</h3>
          <p>Vision Square</p>
        </div>
      </div>
    </div>
  );
};

export default ItemImg;
