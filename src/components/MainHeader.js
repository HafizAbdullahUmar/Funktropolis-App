import React from "react";
import "../App.css";
import "../cssFiles/MainHeader.css";
import BackgroundHeaderLight1 from "../assests/HeaderAssests/BackgroundHeaderLight1.png";
import BackgroundHeaderLight2 from "../assests/HeaderAssests/BackgroundHeaderLight2.png";
import BackgroundHeaderLight3 from "../assests/HeaderAssests/BackgroundHeaderLight3.png";
import HeaderImage from "../assests/HeaderAssests/HeaderImage.png";
import DiscoverIcon from "../assests/HeaderAssests/DiscoverIcon.png";
import ShapeCopy1 from "../assests/HeaderAssests/ShapeCopy1.png";
import ShapCopy2 from "../assests/HeaderAssests/ShapeCopy2.png";
import ShapCopy3 from "../assests/HeaderAssests/ShapeCopy3.png";
import { Link } from "react-router-dom";
function MainHeader() {
  return (
    <>
      <div className="container position-relative text-center" id="main-header">
        <img
          src={BackgroundHeaderLight1}
          alt="BackgroundHeaderLight1"
          className="BackgroundHeaderLight1 img-fluid"
        />
        <img
          src={BackgroundHeaderLight2}
          alt="BackgroundHeaderLight2"
          className="BackgroundHeaderLight2 img-fluid"
        />
        <img
          src={BackgroundHeaderLight3}
          alt="BackgroundHeaderLight3"
          className="BackgroundHeaderLight3 img-fluid"
        />
        <div className="row">
          <div id="main-header-div-1" className="col-md-12 col-lg-6">
            <img src={HeaderImage} alt="HeaderImage" className="img-fluid " />
          </div>
          <div
            id="main-header-div-2"
            className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center"
          >
            <div className="transparent-div">
              <div className="transparent-wrap"></div>
              <img src={ShapeCopy1} alt="" className="shape-copy-1 shapes" />
              <img src={ShapCopy2} alt="" className="shape-copy-2 shapes" />
              <img src={ShapCopy3} alt="" className="shape-copy-3 shapes" />
              <h1 className="discover-text fw-bold">
                DISCOVER & GET EXTRAORDINARY{" "}
                <span
                  style={{
                    backgroundColor: "#7E2285aa",
                    paddingInline: "10px",
                  }}
                >
                  {" "}
                  PREMIUM NFTs
                </span>
              </h1>
              <Link to="/discover-nfts">
                <button className="funktropolis-btn mt-4">
                  <img
                    src={DiscoverIcon}
                    alt="Wallet Icon"
                    className="wallet-icon"
                  />{" "}
                  Discover
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
