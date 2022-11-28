import React from "react";
import FLogo from "../assests/FooterAssests/FLogo.png";
import TwitterIcon from "../assests/FooterAssests/TwitterIcon.png";
import DiscordIcon from "../assests/FooterAssests/DiscordIcon.png";
import MailIcon from "../assests/FooterAssests/MailIcon.png";
import SendIcon from "../assests/FooterAssests/SendIcon.png";
import "../cssFiles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="container-fluid mt-5" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <Link to="/">
                {" "}
                <img src={FLogo} alt="FLogo" className="f-logo" />
              </Link>
              <p style={{ fontSize: "16px", color: "#fff" }}>
                FUNKTROPOLIS Slogan or details comes here with other infos,
              </p>
              <img
                src={TwitterIcon}
                alt="TwitterIcon"
                className="social-icons"
              />
              <img
                src={DiscordIcon}
                alt="DiscordIcon"
                className="social-icons"
              />
              <img src={MailIcon} alt="MailIcon" className="social-icons" />
              <p className="f-heading-2 ms-2 mt-2">
                Copyright © 2022 Funktropolis All rights reserved.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <ul className="footer-list">
                <li>Marketplace</li>
                <li>Collections</li>
                <Link to={"/create-nfts"}>
                  <li>Create NFT</li>
                </Link>
                <li>Top Authors</li>
                <li>Coingeko</li>
                <li>DEXSecreener</li>
                <li>NFTs</li>
                <li>Contact us</li>
                <li>Help</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <h3 className="f-heading-3">Subscribe Us</h3>
              <div className="input-div" style={{ minWidth: "244px" }}>
                <input type="text" placeholder="info@yourgmail.com" />
                <button>
                  <img src={SendIcon} alt="SendIcon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
