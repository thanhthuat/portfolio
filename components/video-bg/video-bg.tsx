import React from "react";

type Props = {};

const VideoBg = (props: Props) => {
  return (
    <section className="clsvideobg">
      <video playsInline autoPlay muted loop className="clsvideobg-content">
        <source src="/video/video-bg.mp4" type="video/mp4" />
      </video>
      <div className="clsvideobg-textcontent"> </div>
      <div className="clsvideobg-text">
        <h3 className="clsvideobg-text__logo">
          <img src={"/image/logo-text.svg"} alt="logo"></img>
        </h3>
        <div className="clsvideobg-text__des">
          <h1>
            {" "}
            Let take your product into the next
            <br /> level with us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VideoBg;
