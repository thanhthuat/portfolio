import React from "react";
import BgWebAbout from "./bg-web-about";
import img1 from "public/image/about/Image (7).png";
import img2 from "public/image/about/Image (8).png";
import img3 from "public/image/about/Image (9).png";
import Image from "next/image";
type Props = {};

const arr = [{ urlImg: img1 }, { urlImg: img2 }, { urlImg: img3 }];
const OverViewAbout = () => {
  return (
    <div className="clsoverviewabout">
      {arr.map((item) => {
        return <Image src={item?.urlImg} alt="bg-img" />;
      })}
    </div>
  );
};

export default OverViewAbout;
