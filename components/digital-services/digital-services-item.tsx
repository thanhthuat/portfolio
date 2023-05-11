import Link from "next/link";
import React from "react";

interface DigitalServicesItemProps {
  item: string;
}

const DigitalServicesItem: React.FC<DigitalServicesItemProps> = ({ item }) => {
  return (
    <div className="clsdigitalitem">
      <Link href={"/services"}>
        <div className="clsdigitalitem-content">
          <img
            src="/image/logo-web.svg"
            alt="logo-web"
            className="clsdigitalitem-img"
          />
          <h3 className="clsdigitalitem-title">{item}</h3>
          <p className="clsdigitalitem-des">
            Dolor magna eget est lorem ipsum dolor sit amet consectetur.
            Bibendum est ultricies integer quis auctor elit sed. Odio morbi quis
            commodo odio aenean
          </p>

          <p className="clsdigitalitem-more">
            Explore&nbsp;&nbsp;{item}&nbsp;&nbsp;Services
          </p>
        </div>
      </Link>
    </div>
  );
};

export default DigitalServicesItem;
