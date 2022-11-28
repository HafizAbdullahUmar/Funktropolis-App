import React from "react";
import PsuedoHeader from "./PsuedoHeader";
import Filter from "./Filter";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DiscoverCards from "./DiscoverCards";

function DiscoverNFTs() {
  return (
    <>
      <div className="container" id="discover-nfts">
        <PsuedoHeader
          heading={"DISCOVER NFT COLLECTION"}
          subHeading={"Trendy and stylish NFT collections on Funktropolis"}
        />
        <div className=" mt-5" id="card-tab-div">
          <Tabs
            defaultActiveKey="profile"
            id="card-tab"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="Bid History">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-11 col-lg-11 col-md-11 col-sm-12"}
                />
                <div className="nft-div col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <DiscoverCards cl={"mt-5"} repeats={8} text={"52450 Items"} />
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Sales">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-11 col-lg-11 col-md-11 col-sm-12"}
                />
                <div className="nft-div col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <DiscoverCards cl={"mt-5"} repeats={8} text={"52450 Items"} />
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Transfers">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-11 col-lg-11 col-md-11 col-sm-12"}
                />
                <div className="nft-div col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <DiscoverCards cl={"mt-5"} repeats={8} text={"52450 Items"} />
                </div>
              </div>
            </Tab>
            <Tab eventKey="listing" title="Listing">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-11 col-lg-11 col-md-11 col-sm-12"}
                />
                <div className="nft-div col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <DiscoverCards cl={"mt-5"} repeats={8} text={"52450 Items"} />
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default DiscoverNFTs;
