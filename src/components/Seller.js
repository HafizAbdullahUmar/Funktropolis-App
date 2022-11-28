import React from "react";

function Seller({ img, t1, t2, cl, cl1, cl2 }) {
  return (
    <>
      <div className={cl}>
        <div className={cl1}>
          <img src={img} alt="RLCImg" className="rlc-img" />
        </div>
        <div className={cl2}>
          <h4 className="seller-h-1">{t1}</h4>
          <p className="seller-h-2">{t2}</p>
        </div>
      </div>
    </>
  );
}

export default Seller;
