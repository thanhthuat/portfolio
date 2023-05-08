import React from "react";

type Props = {};
const arr = [
  { title: " Client", subTitle: "KT telecom" },
  { title: " TIMELINE", subTitle: "months" },
  { title: " SErvices", subTitle: "WEBsite" },
  { title: " WEBSITE", subTitle: "Lorem.com" },
];
const HeaderWebAbout = (props: Props) => {
  return (
    <div className="clsheaderwebabout">
      <div className="clsheaderwebabout-content">
        <div className="clsheaderwebabout-title">
          {arr.map((item) => {
            return (
              <div className="clsheaderwebabout-title__block" key={item.title}>
                <h3 className="clsheaderwebabout-title__title">{item.title}</h3>
                <p className="clsheaderwebabout-title__subtitle">
                  {item.subTitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeaderWebAbout;
