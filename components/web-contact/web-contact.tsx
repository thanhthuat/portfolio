import React, { useState } from "react";
import FormContact from "./form-contact";
import SuccessSendContact from "./success-send-contact";

const WebContact = () => {
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const handleSendSuccess = () => {
    setSendSuccess(true);
  };
  return (
    <section className="clswebcontact wapperlayout">
      {!sendSuccess ? (
        <div className="clswebcontact-content">
          <div className="clswebcontact-title">
            <h1 className="clswebcontact-title__title">
              LET’s GET <br /> TO WORK
            </h1>
          </div>
          <FormContact affterSend={handleSendSuccess} />
        </div>
      ) : (
        <SuccessSendContact />
      )}
    </section>
  );
};

export default WebContact;
