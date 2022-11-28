import React from "react";
import PsuedoHeader from "./PsuedoHeader";
import ProfileBackground1 from "../assests/AssestsPsuedo/ProfileAssests/ProfileBackground1.png";
import ProfileBackground2 from "../assests/AssestsPsuedo/ProfileAssests/ProfileBackground2.png";

function ProfileSettings() {
  return (
    <>
      <div className="container" id="profile">
        <PsuedoHeader
          heading={"Profile Setting"}
          subHeading={"Home / Create Profile"}
        />
        <div className="contianer">
          <div className="row gx-5">
            <div className="container col-xl-4 col-lg-12 col-md-12 col-sm-12">
              <div className="dp-div container">
                <div className="example-img-div mx-auto"></div>
                <div className="funktropolis-btn d-block mx-auto w-75 mt-5 position-relative">
                  <input type="file" className="file-input position-absolute" />
                  <p className="input-cover position-absolute">
                    Upload New Photo
                  </p>
                </div>
                <button className="funktropolis-btn-white mx-auto mt-3 w-75 d-block mb-3">
                  Delete
                </button>
              </div>
            </div>
            <div className="container col-xl-8 col-lg-12 col-md-12 col-sm-12 ">
              <div className="container-fluid px-5 my-4">
                <p className="p20 my-4">Upload Cover Photo</p>
                <div className="img-container">
                  <div className="upload-div">
                    <div className="funktropolis-btn d-block ms-4 mt-1 w-100 position-relative ">
                      <input
                        type="file"
                        className="file-input position-absolute"
                      />
                      <p className="input-cover position-absolute">
                        Upload File
                      </p>
                    </div>
                    <img src={ProfileBackground1} alt="ProfileBackground1" />
                    <img src={ProfileBackground2} alt="ProfileBackground2" />
                  </div>
                </div>
              </div>
              <div className="contianer" id="form">
                <div className="row ps-5">
                  <div className="container col-lg-6 col-md-12 col-sm-12 d-flex flex-column form-inner-container">
                    <h2 className="my-4">Account Info</h2>
                    <label htmlFor="name">
                      Display Name
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter display name"
                      />
                    </label>
                    <label htmlFor="url">
                      Custom URL
                      <input
                        type="text"
                        name="url"
                        id="url"
                        placeholder="Enter Item URL"
                      />
                    </label>
                    <label htmlFor="eamil">
                      Email
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email here"
                      />
                    </label>
                    <label htmlFor="bio">
                      Bio
                      <textarea
                        name="bio"
                        id="bio"
                        rows="5"
                        placeholder="e.g. This is a very limited item"
                      ></textarea>
                    </label>
                  </div>
                  <div className="container col-lg-6 col-md-12 col-sm-12 d-flex flex-column form-inner-container">
                    <h2 className="my-4">Social Profile</h2>
                    <label htmlFor="facebook">
                      Facebook
                      <input
                        type="text"
                        name="facebook"
                        id="facebook"
                        placeholder="Enter Facebook Profile URL"
                      />
                    </label>
                    <label htmlFor="twitter">
                      Twitter
                      <input
                        type="text"
                        name="twitter"
                        id="twitter"
                        placeholder="Enter Twitter Profile URL"
                      />
                    </label>
                    <label htmlFor="discord">
                      Discord
                      <input
                        type="text"
                        name="discord"
                        id="discord"
                        placeholder="Enter Discord Profile URL"
                      />
                    </label>
                  </div>
                  <div className="funktropolis-btn d-block mt-4 w-100 mx-auto position-relative">
                    <input
                      type="file"
                      className="file-input position-absolute"
                    />
                    <p className="input-cover position-absolute">Upload File</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSettings;
