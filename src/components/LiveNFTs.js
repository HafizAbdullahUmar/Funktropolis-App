import React from "react";
import "../App.css";
import NFTsCarousel from "../components/NFTsCarousel";

function LiveNFTs() {
  return (
    <>
      <div className="container my-5 px-5 d-flex justify-content-between text-center">
        <h3 className="d-inline-block ms-5">Live NFTs</h3>
        <button className="funktropolis-btn inline-btn">See More...</button>
      </div>
      <NFTsCarousel />
    </>
  );
}

export default LiveNFTs;
