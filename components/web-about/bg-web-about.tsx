import Image, { StaticImageData } from "next/image";
import React from "react";
import img from "public/image/about/Frame.png";
interface BgWebAboutProps {
  item?: { urlImg: StaticImageData };
}

const BgWebAbout: React.FC<BgWebAboutProps> = ({ item }) => {
  return (
    <section className="clsbgwebabout wapperlayout">
      <Image src={item?.urlImg ? item?.urlImg : img} alt="bg-img" />
    </section>
  );
};

export default BgWebAbout;
