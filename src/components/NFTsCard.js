import React from "react";
import "../App.css";
import "../cssFiles/NFTsCard.css";
import HeartIcon from "../assests/SlimNFTsCardAssests/HeartIcon.png";
import Check from "../assests/HotCollectionAssests/Check.png";
import { Link } from "react-router-dom";
function NFTsCard({ img, pf }) {
  return (
    <>
      <div className="NFT-card swiper-slide" id="NFT-card-1">
        <img src={img} alt="NFT-img" className="NFT-img" />
        <div className="likes">
          <img src={HeartIcon} alt="HeartIcon" className="heart-icon" />
          100
        </div>
        <div className="card-content pt-2 px-2 position-relative">
          <div className="profile-img-div">
            <Link to="/artist">
              <img src={pf} alt="ProfileImg1" className="profile-img" />
            </Link>
            <img src={Check} alt="Check" className="check" />
          </div>
          <h3 className="mt-5 ms-4">Neon City Collection</h3>
          <p className="mb-5 ms-4 credits">
            <span className="credited me-2">Credited by </span>
            <span> John Smith</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default NFTsCard;
