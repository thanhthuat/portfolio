import React from "react";
import BgWebAbout from "./bg-web-about";
import img1 from "public/image/about/Image (7).png";
import img2 from "public/image/about/Image (8).png";
import img3 from "public/image/about/Image (9).png";
import Image from "next/image";


const arr = [{ urlImg: img1 }, { urlImg: img2 }, { urlImg: img3 }];
const OverViewAbout = () => {
  return (
    <div className="clsoverviewabout">
      <div className="clsoverviewabout-content">
        <div className="clsoverviewabout-title">
          <h3> RELATED SERVICE</h3>
        </div>
        {arr.map((item) => {
          return (
            <div className="clsoverviewabout-item">
              <Image src={item?.urlImg} alt="bg-img" />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverViewAbout;
