import ItemImg from "@components/item-img/item-img";
import React from "react";

type Props = {};

const CategoryProject = (props: Props) => {
  return (
    <div className="clscategoryproject wapperlayout">
      <div className="clscategoryproject-content">
        {Array(6)
          .fill(null)
          .map((item, index) => {
            return <ItemImg key={index} />;
          })}
      </div>
    </div>
  );
};

export default CategoryProject;
