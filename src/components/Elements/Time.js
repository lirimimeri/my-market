import React from "react";

import  Now  from '../Common/Now'

const Time = () => (
  <div className="card flex-row align-items-center align-items-stretch border-0">
    <div className="col-4 d-flex align-items-center bg-green justify-content-center rounded-left">
      <div className="text-center">
        <Now format="MMMM" className="text-sm" />
        <br />
        <Now format="D" className="h2 mt0" />
      </div>
    </div>
    <div className="col-8 py-3 rounded-right">
      <Now format="dddd" className="text-uppercase" />
      <br />
      <Now format="h:mm" className="h2 mt0 mr-sm" />
      <Now format="a" className="text-muted text-sm" />
    </div>
  </div>
);

export default Time