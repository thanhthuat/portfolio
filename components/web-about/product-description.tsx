import Link from "next/link";
import React from "react";
import OverViewAbout from "./over-view-about";

type Props = {};

const ProductDescription = (props: Props) => {
  return (
    <div className="clsproductdescription">
      <div className="clsproductdescription-content">
        <div className="clsproductdescription-header">
          <h3 className="clsproductdescription-header__stroke">Project name</h3>
          <p className="clsproductdescription-header__title">
            (주)해솔종합건축사무소 반응형 홈페이지
          </p>
          <Link href={"/contact"}>
            <button className="clsproductdescription-header__button">
              GEt in touch
            </button>
          </Link>
          <div className="clsproductdescription-header__category">
            <ul>
              <li>UX/UI DESIGN</li>
              <li>FE/BE</li>
              <li>WEB development</li>
            </ul>
          </div>
        </div>
        <div className="clsproductdescription-description">
          <h3 className="clsproductdescription-description__name">
            PROJECT DESCRIPTION
          </h3>
          <p className="clsproductdescription-description__description">
            Working with a soft and comfortable image rather than a hard image
            like existing construction companies.
          </p>
        </div>
        <div className="clsproductdescription-description">
          <h3 className="clsproductdescription-description__name">
            Participation period
          </h3>
          <p className="clsproductdescription-description__description">
            July 2019 - September 2019
          </p>
        </div>
        <div className="clsproductdescription-description">
          <h3 className="clsproductdescription-description__name">CLIENT</h3>
          <p className="clsproductdescription-description__description">
            Into Construction
          </p>
        </div>
        <div className="clsproductdescription-body">
          <h3 className="clsproductdescription-body__name">
            Technology applied and scope work
          </h3>
          <div className="clsproductdescription-tech">
            <h3 className="clsproductdescription-tech__name">
              Into Construction
            </h3>
            <p className="clsproductdescription-tech__des">Technology</p>
            <div className="clsproductdescription-tech__category">
              <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>jQUERY</li>
              </ul>
            </div>
          </div>
          <div className="clsproductdescription-tech">
            <h3 className="clsproductdescription-tech__name">Design</h3>
            <p className="clsproductdescription-tech__des">Technology</p>
            <div className="clsproductdescription-tech__category">
              <ul>
                <li>PTS</li>
                <li>FIgma</li>
                <li>ILLUSTRATOR</li>
              </ul>
            </div>
          </div>
          <div className="clsproductdescription-tech">
            <h3 className="clsproductdescription-tech__name">Front end</h3>
            <p className="clsproductdescription-tech__des">Technology</p>
            <div className="clsproductdescription-tech__category">
              <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>jQUERY</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <OverViewAbout />
    </div>
  );
};

export default ProductDescription;
