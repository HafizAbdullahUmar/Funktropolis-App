import React from "react";
import "../App.css";
import "../cssFiles/SlimNFTsCard.css";
import ReloadIcon from "../assests/SlimNFTsCardAssests/ReloadIcon.png";
import ArtistIcon from "../assests/SlimNFTsCardAssests/ArtistIcon.png";
import HeartIcon from "../assests/SlimNFTsCardAssests/HeartIcon.png";
import defaultImg from "../assests/SlimNFTsCardAssests/SlimNFTs1.png";
import { Link } from "react-router-dom";
function SlimNFTsCard({ img }) {
  return (
    <>
      <div className="NFT-card swiper-slide" id="NFT-card">
        <img
          src={img === undefined ? defaultImg : img}
          alt="SlimNFTs1"
          className="NFT-img"
        />
        <div className="likes">
          <img src={HeartIcon} alt="HeartIcon" className="heart-icon" />
          100
        </div>
        <div className="duration">04:05:12:18</div>
        <div className="card-content row f-row pt-2 px-2">
          <div className="div1 col-6 mt-4 ">
            <Link to="/artist">
              <img src={ArtistIcon} alt="ArtistIcon" className="artist-icon" />
            </Link>
            <p className="heading1">Artist name</p>
            <p className="heading2">Neon City Photo</p>
            <p className="heading3 mt-n3">#2345</p>
            <div className="history mt-3 mb-4">
              <p className="heading4">
                <img
                  src={ReloadIcon}
                  alt="ReloadIcon"
                  className="reload-icon"
                />{" "}
                <span className="heading1">View History</span>
              </p>
            </div>
          </div>
          <div className="div2 col-6 text-end mt-3">
            <Link to="/collections">
              <button className="bid-btn">PLACE BID</button>
            </Link>
            <p className="heading5">Current Bid</p>
            <p className="heading6">25.8</p>
            <p className="heading7">($2156.68)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlimNFTsCard;
