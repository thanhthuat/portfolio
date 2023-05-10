import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "public/image/logo.svg";
import { useWindowDimensions } from "@hook/hooks";
import { useRouter } from "next/router";
interface HeaderPageProps {
  className?: string;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ className = "" }) => {
  const [rotate, setRotate] = useState<boolean>(false);
  const router = useRouter();
  const size = useWindowDimensions();

  useEffect(() => {
    if (rotate) {
      document.body.classList.add("disable-scrolling");
    } else {
      document.body.classList.remove("disable-scrolling");
    }
    return () => {};
  }, [rotate]);
  useEffect(() => {
    if (size?.width! > 1100) {
      setRotate(false);
    }
  }, [size]);

  return (
    <div className="clsheaderpage">
      <div className={`${className}  clsheaderpage-content`}>
        <nav
          className={
            rotate
              ? "clsheaderpage-navbar wapperlayout responsive_nav"
              : " clsheaderpage-navbar wapperlayout "
          }
        >
          <div className="clsheaderpage-logo">
            <Link href={"/"}>
              <img src={"/image/logo.svg"} alt="logo"></img>
            </Link>
          </div>
          <ul className={rotate ? "clsheaderpage-link active" : "clsheaderpage-link"}>
            <li
              className={
                router.pathname == "/project" ? "clsheaderpage-link__item active" : "clsheaderpage-link__item"
              }
            >
              <Link href={"/project"}> PROJECTS</Link>
            </li>
            <li
              className={
                router.pathname == "/services"
                  ? "clsheaderpage-link__item active"
                  : "clsheaderpage-link__item"
              }
            >
              <Link href={"/services"}>SERVICES</Link>
            </li>
            <li
              className={
                router.pathname == "/about" ? "clsheaderpage-link__item active" : "clsheaderpage-link__item"
              }
            >
              <Link href={"/about"}>ABOUT</Link>
            </li>
            <div className="clsheaderpage-button">
              <Link href={"/contact"}>GEt in touch</Link>{" "}
            </div>
          </ul>

          <div className={rotate ? "icon-burger active " : "icon-burger"} onClick={() => setRotate(!rotate)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderPage;
