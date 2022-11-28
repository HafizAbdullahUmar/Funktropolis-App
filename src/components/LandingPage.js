import React from "react";
import MainHeader from "./MainHeader";
import MainWallet from "./Wallets/MainWallet";
import LiveNFTs from "./LiveNFTs";
import HotCollection from "./HotCollection";
import TopSeller from "./TopSeller";
import TodaysNFTs from "./TodaysNFTs";
function LandingPage() {
  return (
    <>
      <MainHeader />
      <MainWallet />
      <LiveNFTs />
      <HotCollection />
      <TopSeller />
      <TodaysNFTs
        repeats={1}
        text={"Todays NFTs"}
        cl={"container mt-5 text-center"}
      />
    </>
  );
}

export default LandingPage;
