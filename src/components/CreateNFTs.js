import React from "react";
import PsuedoHeader from "./PsuedoHeader";
import SlimNFTsCard from "./SlimNFTsCard";

function CreateNFTs() {
  return (
    <>
      <div className="container" id="create-nfts">
        <PsuedoHeader
          heading={"Create Your NFTs"}
          subHeading={"Home / Create NFT"}
        />
        <div className="container">
          <div className="row">
            <div className="container col-lg-4 col-md-12 col-sm-12 text-center">
              <p>Preview item</p>
              <SlimNFTsCard />
            </div>
            <div className="container col-lg-8 col-md-12 col-sm-12 create-t-div">
              <p>Upload File</p>
              <div className="upload-div py-4 ps-4 pe-2 d-flex justify-content-between">
                <span className="heading5">
                  PNG, JPG, GIF, WEBP or MP4. Max{" "}
                </span>
                <div className="funktropolis-btn w-50 text-center">
                  <input type="file" className="file-input position-absolute" />
                  Upload File
                </div>
              </div>
              <div className="row ">
                <div className="container d-flex flex-column form-inner-container col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="price">
                    Price
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Enter price for one item"
                    />
                  </label>
                  <label htmlFor="title">
                    Title
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Item Name"
                    />
                  </label>
                  <label htmlFor="description">
                    Description
                    <textarea
                      name="description"
                      id="description"
                      rows="5"
                      placeholder="e.g. This is a very limited item"
                    ></textarea>
                  </label>
                </div>
                <div className="container d-flex flex-column col-lg-5 col-md-12 col-sm-12">
                  <label htmlFor="royalties">
                    Royalties
                    <input
                      type="number"
                      name="royalties"
                      id="royalties"
                      placeholder="5"
                    />
                  </label>
                  <label htmlFor="collection">
                    Choose Collection
                    <select
                      name="collection"
                      id="collection"
                      className="l-light"
                    >
                      <option value="collection1">Collection Name</option>
                      <option value="collection2">Collection1</option>
                      <option value="collection3">Collection2</option>
                    </select>
                  </label>
                  <label htmlFor="category">
                    Select Category
                    <select name="category" id="category" className="l-light">
                      <option value="collection1">Category Name</option>
                      <option value="collection2">Category1</option>
                      <option value="collection3">Category2</option>
                    </select>
                  </label>
                  <label htmlFor="size">
                    Size
                    <input
                      type="text"
                      name="size"
                      id="size"
                      placeholder='e.g. "size"'
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNFTs;
