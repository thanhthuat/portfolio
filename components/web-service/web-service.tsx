import React from "react";
import CarouselService from "./carousel-service";
import DetailService from "./detail-service";

const arr = [
  {
    title: {
      titleStroke: "UX/UI",
      title: "DESIGN",
    },
    category: ["User research ", "Wireframe", "Prototype", "UI design"],
    subTitle:
      " We take your user experience to the next level and bring the best to you",
    description: ` Dolor magna eget est lorem ipsum dolor sit amet consectetur.
            Bibendum est ultricies integer quis auctor elit sed. Odio morbi quis
            commodo odio aeneanDolor magna eget est lorem ipsum dolor sit amet
            consectetur. Bibendum est ultricies integer quis auctor elit sed.
            Odio morbi quis commodo odio aeneanDolor magna eget est lorem ipsum
            dolor sit amet consectetur. Bibendum est ultricies integer quis
            auctor elit sed. Odio morbi quis commodo odio aeneanDolor magna eget
            est lorem ipsum dolor sit amet consectetur. Bibendum est ultricies
            integer quis auctor elit sed. Odio morbi quis commodo odio aenean
            Dolor magna eget est lorem ipsum dolor sit amet consectetur.
            Bibendum est ultricies integer quis auctor elit sed. Odio morbi quis
            commodo odio aeneanDolor magna eget est lorem ipsum dolor sit amet
            consectetur. Bibendum est ultricies integer quis auctor elit sed.
            Odio morbi quis commodo odio aeneanDolor magna eget est lorem ipsum
            dolor sit amet consectetur. Bibendum est ultricies integer quis
            auctor elit sed. Odio morbi quis commodo odio aenean`,
    urlImage: "/image/category-project/Image (6).png",
    alt: "Design service ",
  },
  {
    title: {
      titleStroke: "WEB",
      title: "SERVICE",
    },
    category: ["Front end ", "Backend", "CSS", "Html"],
    subTitle:
      " We take your user experience to the next level and bring the best to you",
    description: ` Dolor magna eget est lorem ipsum dolor sit amet consectetur.
            Bibendum est ultricies integer quis auctor elit sed. Odio morbi quis
            commodo odio aeneanDolor magna eget est lorem ipsum dolor sit amet
            consectetur. Bibendum est ultricies integer quis auctor elit sed.
            Odio morbi quis commodo odio aeneanDolor magna eget est lorem ipsum
            dolor sit amet consectetur. Bibendum est ultricies integer quis
            auctor elit sed. Odio morbi quis commodo odio aeneanDolor magna eget
            est lorem ipsum dolor sit amet consectetur. Bibendum est ultricies
            integer quis auctor elit sed. Odio morbi quis commodo odio aenean
            Dolor magna eget est lorem ipsum dolor sit amet consectetur.
            Bibendum est ultricies integer quis auctor elit sed. Odio morbi quis
            commodo odio aeneanDolor magna eget est lorem ipsum dolor sit amet
            consectetur. Bibendum est ultricies integer quis auctor elit sed.
            Odio morbi quis commodo odio aeneanDolor magna eget est lorem ipsum
            dolor sit amet consectetur. Bibendum est ultricies integer quis
            auctor elit sed. Odio morbi quis commodo odio aenean`,
    urlImage: "/image/category-project/image 2.png",
    alt: "Web service ",
  },
];
const WebService = () => {
  return (
    <section className="clswebservice wapperlayout">
      <div className="clswebservice-content">
        <div className="clswebservice-title">
          <h1>
            <p className="clswebservice-stroke"> WEB</p>
            Services
          </h1>
          <div className="clswebservice-title__category">
            <p className="clswebservice-title__item">UX/UI DESIGN</p>
            <p className="clswebservice-title__item">FE/BE</p>
            <p className="clswebservice-title__item">WEB development</p>
          </div>
        </div>
        <CarouselService />
        {arr.map((item) => {
          return <DetailService item={item} key={item.alt} />;
        })}
      </div>
    </section>
  );
};

export default WebService;
