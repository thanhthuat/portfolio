import React from "react";
import DigitalServicesHeader from "./digital-services-header";
import DigitalServicesItem from "./digital-services-item";

interface DigitalServicesProps {}

const DigitalServices: React.FC<DigitalServicesProps> = () => {
  return (
    <section className="clsdigitalservices wapperlayout">
      <div className="clsdigitalservices-content">
        <DigitalServicesHeader />
        <div className="clsdigitalservices-category">
          {Array(6)
            .fill(null)
            .map((item, index) => {
              return <DigitalServicesItem key={index} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;
