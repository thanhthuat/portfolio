import Contact from "@components/contact/contact";
import MainLayout from "@components/hoc/main-layout";
import WebProject from "@components/web-project/web-project";
import React from "react";

const ProjectPage = () => {
  return (
    <MainLayout>
      <WebProject />
      <Contact />
    </MainLayout>
  );
};

export default ProjectPage;
