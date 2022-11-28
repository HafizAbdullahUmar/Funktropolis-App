import React from "react";
import Wallet from "./Wallet";
import EthriumWallet from "../../assests/WalletAssests/EthriumWallet.png";
import NftIcon from "../../assests/WalletAssests/NftIcon.png";
import SellIcon from "../../assests/WalletAssests/SellIcon.png";

function MainWallet() {
  return (
    <>
      <div className="container mt-5">
        <div className="row gx-5">
          <Wallet
            WalletImage={EthriumWallet}
            WalletBtnText={"Set up Your wallet"}
          />
          <Wallet WalletImage={NftIcon} WalletBtnText={"Add your NFTs"} />
          <Wallet WalletImage={SellIcon} WalletBtnText={"Start Selling"} />
        </div>
      </div>
    </>
  );
}

export default MainWallet;
