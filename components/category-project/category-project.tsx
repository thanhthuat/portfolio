import ItemImg from "@components/item-img/item-img";
import React from "react";
import img from "public/image/project/Image1.png";
import img1 from "public/image/project/Image2.png";
import img2 from "public/image/project/Image3.png";
import img3 from "public/image/project/Image4.png";
import img4 from "public/image/project/Image5.png";
import img5 from "public/image/project/Image6.png";
type Props = {};

const arr = [
  { urlImage: img, title: "WEBSITE NAME", description: "VISION SQUARE" },
  { urlImage: img1, title: "APP NAME", description: "MOTION AGENCY" },
  {
    urlImage: img2,
    title: "BRANDING PROJECT NAME",
    description: "VISION SQUARE",
  },
  { urlImage: img3, title: "BRANDING", description: "MOTION AGENCY" },
  {
    urlImage: img4,
    title: "NEWS SOLUTION WEBSITE",
    description: "VISION SQUARE",
  },
  {
    urlImage: img5,
    title: "TRAVEL BOOKING WEBSITE",
    description: "MOTION AGENCY",
  },
];
const CategoryProject = (props: Props) => {
  return (
    <div className="clscategoryproject wapperlayout">
      <div className="clscategoryproject-content">
        {arr.map((item, index) => {
          return <ItemImg key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CategoryProject;
