import React from "react";

import Sparkline from "../Common/Sparklines";

const MonthlyGraph = (props) => {

  return (
    <section>
      <div className="card-body bg-primary">
        <div className="h5 mt-0">Te ardhurat mujore</div>
        <Sparkline
          options={{
            type: "line",
            height: "80",
            width: "100%",
            lineWidth: "2",
            lineColor: "#dddddd",
            spotColor: "#bbbbbb",
            fillColor: "",
            highlightLineColor: "#fff",
            spotRadius: "3",
            resize: true,
          }}
          values={props.data}
        />
      </div>
      <div className="card-body bg-inverse">
        <div className="row text-center">
          <div className="col-4">
            <p className="m-0 h3">15080</p>
            <p className="m-0 text-muted">test</p>
          </div>
          <div className="col-4">
            <p className="m-0 h3">12000</p>
            <p className="m-0 text-muted">test</p>
          </div>
          <div className="col-4">
            <p className="m-0 h3">5100</p>
            <p className="m-0 text-muted">test</p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default MonthlyGraph;
