import Link from "next/link";
import React from "react";

const SuccessSendContact = () => {
  return (
    <section className="clssuccesssendcontact wapperlayout">
      <div className="clssuccesssendcontact-content">
        <div className="clssuccesssendcontact-logo">
        <img src={"/image/logo.svg"} alt="logo"></img>
        </div>
        <div className="clssuccesssendcontact-title">
          <h1>We have received your message!</h1>
          <p className="clssuccesssendcontact-title__stroke">Check your email</p>
        </div>
        <div className="clssuccesssendcontact-button">
          <Link href={"/"}>
            <button className="clssuccesssendcontact-button__back">Back to homepage</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessSendContact;
