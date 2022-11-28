import React from "react";
import { Link } from "react-router-dom";
import ArtistBackground1 from "../assests/AssestsPsuedo/CollectionsAssests/ArtistBackground1.png";
import SettingsIcon from "../assests/AssestsPsuedo/CollectionsAssests/SettingsIcon.png";
import ShareIcon from "../assests/AssestsPsuedo/CollectionsAssests/ShareIcon.png";
import ProfileImg from "../assests/AssestsPsuedo/CollectionsAssests/ProfileImg.png";
import Check from "../assests/AssestsPsuedo/CollectionsAssests/Check.png";
import Filter from "./Filter";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TodaysNFTs from "./TodaysNFTs";

function NFTArtist() {
  return (
    <>
      <div className="container artist" id="nft-artist">
        <div className="artist-div">
          <img
            src={ArtistBackground1}
            alt="ArtistBackground"
            className="artist-background img-fluid"
          />
          <div className="content-div d-flex justify-content-end align-items-center pe-4">
            <img
              src={ShareIcon}
              alt="ShareIcon"
              className="mx-3 content-icons"
            />{" "}
            <Link to="/profile-settings">
              {" "}
              <img
                src={SettingsIcon}
                alt="SettingsIcon"
                className="mx-3 content-icons"
              />
            </Link>
            <div className="artist-profile-div">
              <div className="artist-profile-div-inner">
                <img src={ProfileImg} alt="ProfileImg" className="prof-img" />
                <img src={Check} alt="Check" className="check" />
              </div>
            </div>
          </div>
        </div>
        <div className="artist-details-div text-center my-5">
          <p className="artist-h-1">Collection Name</p>
          <div className="artist-id">0x2856917592FnkDR939430xmi3mF4</div>
        </div>
        <div className="item-info d-flex flex-row justify-content-center">
          <div className="item">
            <p className="p1">10K</p>
            <p className="p2">Items</p>
          </div>
          <div className="item">
            <p className="p1">8.6K</p>
            <p className="p2">Owned</p>
          </div>
          <div className="item">
            <p className="p1">123</p>
            <p className="p2">floor price</p>
          </div>
          <div className="item">
            <p className="p1">1K</p>
            <p className="p2">Volume</p>
          </div>
        </div>
        <p className="artist-lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>{" "}
        <div className="container mt-5" id="card-tab-div">
          <Tabs defaultActiveKey="profile" id="card-tab" className="mb-3">
            <Tab eventKey="contact" title="Items">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-3 col-lg-11 col-md-12 col-sm-12"}
                />
                <div className="nft-div col-xl-9 col-lg-12 col-md-12 col-sm-12">
                  <div className="nft-div-wrap"></div>
                  <div className="nft-div-wrap-2"></div>
                  <TodaysNFTs
                    repeats={4}
                    text={"52450 Items"}
                    cl={"container mt-5 "}
                  />
                </div>
              </div>
            </Tab>
            <Tab eventKey="listing" title="Activity">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-3 col-lg-11 col-md-12 col-sm-12"}
                />
                <div className="nft-div col-xl-9 col-lg-12 col-md-12 col-sm-12">
                  <div className="nft-div-wrap"></div>
                  <div className="nft-div-wrap-2"></div>
                  <TodaysNFTs
                    repeats={4}
                    text={"52450 Items"}
                    cl={"container mt-5 "}
                  />
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default NFTArtist;
