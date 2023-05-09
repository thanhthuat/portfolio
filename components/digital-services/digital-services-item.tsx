import Link from "next/link";
import React from "react";

type Props = {};

const DigitalServicesItem = (props: Props) => {
  return (
    <div className="clsdigitalitem">
      <Link href={"/services"}>
        <div className="clsdigitalitem-content">
          <img src="/image/logo-web.svg" alt="logo-web" className="clsdigitalitem-img" />
          <h3 className="clsdigitalitem-title"> WEB</h3>
          <p className="clsdigitalitem-des">
            Dolor magna eget est lorem ipsum dolor sit amet consectetur. Bibendum est ultricies integer quis
            auctor elit sed. Odio morbi quis commodo odio aenean
          </p>

          <p className="clsdigitalitem-more">Explore WEB Services </p>
        </div>
      </Link>
    </div>
  );
};

export default DigitalServicesItem;
