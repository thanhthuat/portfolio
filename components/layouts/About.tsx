import Contact from "@components/contact/contact";
import MainLayout from "@components/hoc/main-layout";
import WebAbout from "@components/web-about/web-about";
import React from "react";

const AboutPage = () => {
  return (
    <MainLayout>
        <WebAbout/>
      <Contact />
    </MainLayout>
  );
};

export default AboutPage;
