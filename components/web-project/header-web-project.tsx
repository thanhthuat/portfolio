import React from "react";

type Props = {};

const HeaderWebProject = (props: Props) => {
  return (
    <section className="clsheaderproject wapperlayout">
      <div className="clsheaderproject-content">
        <div className="clsheaderproject-title">
          <h1>Projects</h1>
          <div className="clsheaderproject-category">
            <ul>
              <li>UX/UI DESIGN</li>
              <li>Branding</li>
              <li>Graphic design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderWebProject;
