import useCopyToClipboard from "@utils/hook.util";
import React from "react";

interface FormContactProps {
  affterSend: () => void;
}
const FormContact: React.FC<FormContactProps> = ({ affterSend }) => {
  const [value, copy] = useCopyToClipboard();
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setTimeout(() => affterSend(), 100);
  };
  return (
    <div className="clsformcontact">
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="clsforminput">
          <label className="clsforminput-label">Name</label>
          <input className="clsforminput-input" name="email" placeholder="Name" />
        </div>
        <div className="clsforminput">
          <label className="clsforminput-label">Email</label>
          <input className="clsforminput-input" type="email" name="email" placeholder="Email" />
        </div>
        <div className="clsforminput">
          <label className="clsforminput-label">Message</label>
          <textarea
            className="clsforminput-textarea"
            name="email"
            placeholder="Anything you want to tell us"
          />
        </div>
        <button className="clsformcontact-button" type="submit">
          Submit
        </button>
      </form>
      {/* <button onClick={() => copy("Thanh Thuat")}>Thanh thuat</button> */}
    </div>
  );
};

export default FormContact;
