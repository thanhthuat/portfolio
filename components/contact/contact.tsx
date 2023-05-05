import Link from "next/link";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="clscontact">
      <div className="clscontact-content">
        <div className="clscontact-header">
          <h3 className="clscontact-header__title">Contact</h3>
        </div>
        <div className="clscontact-body">
          <h2 className="clscontact-body__title">
            Let’s <br /> Connect
          </h2>
        </div>
        <div className="clscontact-bg">
            
        </div>
        <div className="clscontact-footer">
          <Link href={"/"}>
            <button className="clscontact-footer__contact">
              {" "}
              GEt in touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
