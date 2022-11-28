import React from "react";
import "../../cssFiles/Wallet.css";
import BackgroundWalletLight from "../../assests/WalletAssests/BackgroundWalletLight.png";
import { Link } from "react-router-dom";
function Wallet({ WalletImage, WalletBtnText }) {
  return (
    <>
      <div
        className="container position-relative text-center"
        id="wallet"
        style={{ maxWidth: "285px" }}
      >
        <img
          src={BackgroundWalletLight}
          alt=""
          className="BackgroundWalletLight"
        />
        <img src={WalletImage} alt="" className="etherium-wallet img-fluid" />
        <p className="wallet-text">
          Once you've set up your wallet of choice, connect it to OpenSeaby
          clicking the NFT Marketplacein the top right corner.
        </p>
        {WalletBtnText === "Add your NFTs" ? (
          <Link to={"/create-nfts"}>
            <button className="wallet-btn">{WalletBtnText}</button>
          </Link>
        ) : (
          <button className="wallet-btn">{WalletBtnText}</button>
        )}
      </div>
    </>
  );
}

export default Wallet;
