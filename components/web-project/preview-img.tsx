import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface PreviewImgProps {
  item: {
    urlImage: StaticImageData;
    alt: string;
    url: string;
  };
}
const PreviewImg: React.FC<PreviewImgProps> = ({ item }) => {
  return (
    <div className="clspreviewimg wapperlayout">
      I
      <Link href={item?.url || ""}>
        <Image src={item.urlImage} alt={item.alt}></Image>
      </Link>
    </div>
  );
};

export default PreviewImg;
