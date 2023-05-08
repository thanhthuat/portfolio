import React from "react";

interface DetailServiceProps {
  item: {
    title: {
      titleStroke: string;
      title: string;
    };
    category: string[];
    subTitle: string;
    description: string;
    urlImage: string;
    alt: string;
  };
}

const DetailService: React.FC<DetailServiceProps> = ({ item }) => {
  return (
    <section className="clsdetailservice">
      <div className="clsdetailservice-content wapperlayout">
        <div className="clsdetailservice-blockleft">
          <div className="clsdetailservice-blockleft__title">
            <h3>
              <p className="clsdetailservice-blockleft__stroke">
                {" "}
                {item.title.titleStroke}
              </p>
              {item.title.title}
            </h3>
          </div>
          <div className="clsdetailservice-category">
            <ul>
              {item.category.map((item) => {
                return <li key={item}> {item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="clsdetailservice-blockright">
          <h3 className="clsdetailservice-blockright__title">
            {item.subTitle}
          </h3>
          <p className="clsdetailservice-blockright__des">{item.description}</p>
          <div className="clsdetailservice-blockright__img">
            <img
              src={item.urlImage || "/image/category-project/Image (6).png"}
              alt={item.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailService;
