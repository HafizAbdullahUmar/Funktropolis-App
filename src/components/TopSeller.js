import React from "react";
import Seller from "./Seller";
import RLCImg1 from "../assests/TopSellerAssests/RLCImg1.png";
import RLCImg2 from "../assests/TopSellerAssests/RLCImg2.png";

function TopSeller() {
  let arr = [RLCImg1, RLCImg2];
  let newArr = [...arr, ...arr, ...arr, ...arr, ...arr];
  return (
    <>
      <div className="container mt-5" id="top-seller">
        <h3 className="text-center">Top Seller</h3>
        <div className="row justify-content-center mt-5">
          {newArr.map((x) => {
            return (
              <Seller
                img={x}
                t1={"Crispin Berry"}
                t2={"214.2 RLC"}
                cl={"container seller row py-3 px-2"}
                cl1={"col-6"}
                cl2={"col-6"}
              />
            );
          })}
        </div>
        <div className="container mx-auto justify-content-center d-flex">
          <button className="funktropolis-btn mx-auto mt-5">See More...</button>
        </div>
      </div>
    </>
  );
}

export default TopSeller;
