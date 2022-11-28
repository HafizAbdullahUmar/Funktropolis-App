import React from "react";
import PsuedoHeader from "./PsuedoHeader";
import WalletIcon from "../assests/NavbarAssests/IconWallet.png";
import ConnectGif from "../assests/ConnectWalletAssests/ConnectGif.gif";
import { Link } from "react-router-dom";
function ConnectWallet() {
  return (
    <>
      <div className="container" id="connect-wallet">
        <PsuedoHeader heading={"Connect Wallet"} />
        <div className="container">
          <img
            src={ConnectGif}
            alt="ConnectGif"
            className="img-fluid mx-auto d-block connect-gif"
          />
        </div>
        <div className="">
          <Link to="/connect-wallet">
            <button className="funktropolis-btn d-block mx-auto">
              <img src={WalletIcon} alt="Wallet Icon" className="wallet-icon" />{" "}
              Connect Wallet
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ConnectWallet;
