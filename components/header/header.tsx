import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "public/image/logo.svg";

type Props = {};

const HeaderPage = (props: Props) => {
  return (
    <div className="clsheaderpage">
      <div className="clsheaderpage-content">
        <nav className="clsheaderpage-navbar wapperlayout">
          <div className="clsheaderpage-logo">
            <img src={"/image/logo.svg"} alt="logo"></img>
            {/* <Image ></Image> */}
          </div>
          <ul className="clsheaderpage-link">
            <li className="clsheaderpage-link__item">
              <Link href={"/"}> PROJECTS</Link>
            </li>
            <li className="clsheaderpage-link__item">
              <Link href={"/services"}>SERVICES</Link>
            </li>
            <li className="clsheaderpage-link__item">
              <Link href={"/services"}>SERVICES</Link>
            </li>
            <li className="clsheaderpage-link__item">
              <Link href={"/about"}>ABOUT</Link>
            </li>
          </ul>
          <div className="clsheaderpage-button">
            <Link href={"/get"}>GEt in touch</Link>{" "}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderPage;
