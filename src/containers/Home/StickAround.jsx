import React from "react";
import "./StickAround.css";
// import SvgFirst from "./Svgs/SvgFirst";
// import SvgSec from "./Svgs/SvgSec";
// import SvgThird from "./Svgs/SvgThird";

const StickAround = (props) => {
  const stickContent = [
      {
          id: 1,
          // Img:  <SvgFirst />,
          description: "3,857,000 Trusting Customers"
      },
      {
          id: 2,
          // Img:  <SvgSec />,
          description: "99.999% Uptime Guarantee"
      },
      {
          id: 3,
          // Img:  <SvgThird />,
          description: "Lightning Fast CDN"
      },

  ]

  return (
    <section id="key-features">
            <h1 className="section-title">Many Good Reasons to Stick Around</h1>
            <ul className="key-feature__list">
               {stickContent.map( content => (
                <li className="key-feature" key={content.id}>
                <div className="key-feature__image">
                  {content.Img}
                </div>
                <p className="key-feature__description">{content.description}</p>
                </li>
               ))}
            </ul>
        </section>
  );
};

export default StickAround;
