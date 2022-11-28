import React from "react";
import ShapeCopy1 from "../assests/HeaderAssests/ShapeCopy1.png";
import ShapeCopy2 from "../assests/HeaderAssests/ShapeCopy2.png";
import ShapeCopy3 from "../assests/HeaderAssests/ShapeCopy3.png";

function PsuedoHeader({ heading, subHeading }) {
  return (
    <>
      <div
        className="transparent-div container text-center py-5"
        id="psuedo-header"
      >
        <div className="transparent-wrap"></div>
        <h1>{heading}</h1>
        <p className="heading5">{subHeading}</p>
        <img
          src={ShapeCopy1}
          alt="ShapeCopy1"
          className="shape-copy-1 shapes"
        />
        <img
          src={ShapeCopy2}
          alt="ShapeCopy2"
          className="shape-copy-2 shapes"
        />
        <img
          src={ShapeCopy3}
          alt="ShapeCopy3"
          className="shape-copy-3 shapes"
        />
      </div>
    </>
  );
}

export default PsuedoHeader;
