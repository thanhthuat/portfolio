import Link from "next/link";
import React from "react";

type Props = {};

function FooterPage({}: Props) {
  return (
    <footer className="clsfooterpage">
      <div className="clsfooterpage-content">
        <div className="clsfooterpage-social">
          <img src="/image/logo.svg" className="logo"></img>
          <div className="clsfooterpage-connect">
            <span className="icon mr-8">
              <img src="/image/icons/Intagram.svg"></img>
            </span>
            <span className="icon mr-8">
              <img src="/image/icons/Twitter.svg"></img>
            </span>
            <span className="icon">
              <img src="/image/icons/Facebook.svg"></img>
            </span>
          </div>
        </div>
        <div className="clsfooterpage-page">
          <p className="clsfooterpage-title">Page</p>
          <ul className="clsfooterpage-category">
            <li>
              <Link href={"/contact"}> Home</Link>
            </li>
            <li>
              <Link href={"/contact"}>services</Link>
            </li>
            <li>
              <Link href={"/contact"}>services</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="clsfooterpage-coppyright">
        <div>
          <p>© Copyright belong to mthstudio</p>
        </div>
        <div className="clsfooterpage-coppyright__privacy">
          <p>Privacy</p>
          <p>Imprint</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
