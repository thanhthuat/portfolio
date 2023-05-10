import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "public/image/logo.svg";

interface HeaderPageProps {
  className?: string;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ className = "" }) => {
  return (
    <div className="clsheaderpage">
      <div className={`${className}  clsheaderpage-content`}>
        <nav className="clsheaderpage-navbar wapperlayout">
          <div className="clsheaderpage-logo">
            <Link href={"/"}>
              <img src={"/image/logo.svg"} alt="logo"></img>
            </Link>

            {/* <Image ></Image> */}
          </div>
          <ul className="clsheaderpage-link">
            <li className="clsheaderpage-link__item">
              <Link href={"/project"}> PROJECTS</Link>
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
            <Link href={"/contact"}>GEt in touch</Link>{" "}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderPage;
