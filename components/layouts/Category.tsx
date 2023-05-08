import CategoryProject from "@components/category-project/category-project";
import Contact from "@components/contact/contact";
import MainLayout from "@components/hoc/main-layout";
import TextStroke from "@components/text-stroke/text-stroke";
import WebService from "@components/web-service/web-service";
import React from "react";

const CategoryPage = () => {
  return (
    <div>
      <MainLayout>
        <WebService />
        <TextStroke />
        <CategoryProject />
        <Contact />
      </MainLayout>
    </div>
  );
};

export default CategoryPage;
