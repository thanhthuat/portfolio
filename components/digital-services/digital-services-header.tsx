import Link from "next/link";
import React from "react";

type Props = {};

const DigitalServicesHeader = (props: Props) => {
  return (
    <div className="clsservicesheader">
      <div className="clsservicesheader-content">
        <div>
          <h2 className="clsservicesheader-text">
            Digital <br /> Services
          </h2>
        </div>

        <div>
          <Link href={"/"}>
            <div className="clsservicesheader-button">
              <h2 className="clsservicesheader-button__text">
                Explore Services
              </h2>
              <img
                className="clsservicesheader-button__img"
                src="/image/arrow-right.svg"
                alt="arrow-right"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalServicesHeader;
