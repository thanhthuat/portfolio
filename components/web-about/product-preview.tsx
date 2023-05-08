import Image from "next/image";
import React from "react";
import img from "public/image/about/aboutproject.jpg.png";
type Props = {};

const ProductPreview = (props: Props) => {
  return (
    <div className="clsproductpreview">
      <div className="clsproductpreview-content">
        <Image src={img} alt="" />
      </div>
    </div>
  );
};

export default ProductPreview;
