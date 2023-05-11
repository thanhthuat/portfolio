import Image, { StaticImageData } from "next/image";
import React from "react";

interface ItemImgProps {
  item: {
    urlImage: StaticImageData;
    title: string;
    description: string;
  };
}

const ItemImg: React.FC<ItemImgProps> = ({ item }) => {
  return (
    <div className="clsitemimg">
      <div className="clsitemimg-content">
        {/* <img
          className="clsitemimg-image"
          src="/image/project/Image1.png"
          alt="image"
        /> */}
        <Image
          className="clsitemimg-image"
          src={item.urlImage}
          alt={item.title}
        />
        <div className="clsitemimg-text">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemImg;
