import CategoryProject from "@components/category-project/category-project";
import Contact from "@components/contact/contact";
import DigitalServices from "@components/digital-services/digital-services";
import FooterPage from "@components/footer/footer-page";
import HeaderPage from "@components/header/header";
import ItemImg from "@components/item-img/item-img";
import TextStroke from "@components/text-stroke/text-stroke";
import VideoBg from "@components/video-bg/video-bg";
import React from "react";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <HeaderPage />
      <main>{children}</main>
      <FooterPage />
    </div>
  );
};

export default MainLayout;
