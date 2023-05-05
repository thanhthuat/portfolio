import CategoryProject from "@components/category-project/category-project";
import Contact from "@components/contact/contact";
import DigitalServices from "@components/digital-services/digital-services";
import FooterPage from "@components/footer/footer-page";
import HeaderPage from "@components/header/header";
import ItemImg from "@components/item-img/item-img";
import TextStroke from "@components/text-stroke/text-stroke";
import VideoBg from "@components/video-bg/video-bg";
import React from "react";

interface HomeLayoutProps {
  children?: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div>
      <HeaderPage />
      <VideoBg />
      <DigitalServices />
      <TextStroke/>
      <CategoryProject />
      <Contact />
      <FooterPage/>
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
