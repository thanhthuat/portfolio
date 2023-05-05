import Link from "next/link";
import React from "react";

type Props = {};

function FooterPage({}: Props) {
  return (
    <footer className="clsfooterpage">
      <div className="clsfooterpage-content">
        <div className="clsfooterpage-social">
          <img src="/image/logo.svg"></img>
          <div className="clsfooterpage-social">
            <span>
              <img src="/image/icons/Intagram.svg"></img>
            </span>
            <span>
              <img src="/image/icons/Twitter.svg"></img>
            </span>
            <span>
              <img src="/image/icons/Facebook.svg"></img>
            </span>
          </div>
        </div>
        <div className="clsfooterpage-page">
          <div className="clsfooterpage-title">Page</div>
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
