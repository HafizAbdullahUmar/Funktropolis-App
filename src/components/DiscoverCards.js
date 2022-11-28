import React from "react";
import NFTsCard from "./NFTsCard";
import ProfileImg1 from "../assests/HotCollectionAssests/ProfileImg1.png";
import DiscoverImg from "../assests/AssestsPsuedo/CollectionsAssests/DiscoverImg.png";
function DiscoverCards({ text, repeats, cl }) {
  const makeRepeated = (arr, repeats) =>
    [].concat(...Array.from({ length: repeats }, () => arr));
  let arr = [DiscoverImg];
  let newArr = makeRepeated(arr, repeats);
  return (
    <>
      <div className={cl}>
        <div className="container-fluid px-5">
          <h3 className="my-5">{text}</h3>
        </div>
        <div className="container-fluid todays-div text-start justify-content-evenly">
          {newArr.map((x) => (
            <NFTsCard img={x} pf={ProfileImg1} />
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

export default DiscoverCards;
