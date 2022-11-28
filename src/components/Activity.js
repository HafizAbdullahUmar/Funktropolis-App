import React from "react";

function Activity() {
  return (
    <>
      <div className="container mt-4" id="activity">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 justify-content-center d-flex d-md-block">
            <div className="gray-box"></div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 justify-content-center d-flex d-md-block flex-column text-center text-md-start"
            style={{ minHeight: "111px" }}
          >
            <p className="p1">Activity Here</p>
            <p className="p2">Had placed a bid</p>
            <p className="p2">8h ago</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 text-md-end pe-5 justify-content-center d-flex d-md-block flex-column text-center">
            <p className="p3">25.8</p>
            <p className="p4">($2156.68)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Activity;
