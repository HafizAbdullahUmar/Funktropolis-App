import React from "react";
import "../cssFiles/SlimNFTsCard.css";
import SlimNFTsCard from "./SlimNFTsCard";
import SlimNFTs1 from "../assests/SlimNFTsCardAssests/SlimNFTs1.png";
import SlimNFTs2 from "../assests/SlimNFTsCardAssests/SlimNFTs2.png";
import SlimNFTs3 from "../assests/SlimNFTsCardAssests/SlimNFTs3.png";
import SlimNFTs4 from "../assests/SlimNFTsCardAssests/SlimNFTs4.png";

function TodaysNFTs({ text, repeats, cl }) {
  const makeRepeated = (arr, repeats) =>
    [].concat(...Array.from({ length: repeats }, () => arr));
  let arr = [SlimNFTs1, SlimNFTs2, SlimNFTs3, SlimNFTs4];
  let newArr = makeRepeated(arr, repeats);
  return (
    <>
      <div className={cl}>
        <div className="container-fluid px-5">
          <h3 className="my-5">{text}</h3>
        </div>
        <div className="container-fluid todays-div text-start justify-content-evenly">
          {newArr.map((x) => (
            <SlimNFTsCard img={x} />
          ))}
        </div>

        <div className="container mx-auto justify-content-center d-flex">
          <button className="funktropolis-btn-white mx-auto mt-5">
            See More...
          </button>
        </div>
      </div>
    </>
  );
}

export default TodaysNFTs;
