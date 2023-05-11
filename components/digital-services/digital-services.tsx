import React from "react";
import DigitalServicesHeader from "./digital-services-header";
import DigitalServicesItem from "./digital-services-item";

interface DigitalServicesProps {}

const arr = [
  { item: "WEB" },
  { item: "MARKETING DESIGN" },
  { item: "PACKETGING SERVICES" },
  { item: "APP" },
  { item: "GAME" },
  { item: "BRANDING DESIGN " },
];
const DigitalServices: React.FC<DigitalServicesProps> = () => {
  return (
    <section className="clsdigitalservices wapperlayout">
      <div className="clsdigitalservices-content">
        <DigitalServicesHeader />
        <div className="clsdigitalservices-category">
          {arr.map((item, index) => {
            return <DigitalServicesItem key={index} item={item.item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;
