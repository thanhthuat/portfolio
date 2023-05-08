import React from "react";
import HeaderWebProject from "./header-web-project";
import PreviewImg from "./preview-img";
import img1 from "public/image/page-project/Image Wrapper.png";
import img2 from "public/image/page-project/Image Wrapper (1).png";
import img3 from "public/image/page-project/Image Wrapper (2).png";
import img4 from "public/image/page-project/Image Wrapper (3).png";

type Props = {};
const arr = [
  { alt: "image1", urlImage: img1, url: "/" },
  { alt: "image2", urlImage: img2, url: "/" },
  { alt: "image3", urlImage: img3, url: "/" },
  { alt: "image4", urlImage: img4, url: "/" },
];
const WebProject = (props: Props) => {
  return (
    <div className="clswebproject">
      <HeaderWebProject />
      {arr.map((item) => {
        return <PreviewImg item={item} key={item.alt} />;
      })}
    </div>
  );
};

export default WebProject;
