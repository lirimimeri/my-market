import React from "react";

import Sparkline from "../Common/Sparklines";

const YearlyGraph = (props) => {
  return (
    <section>
      <div className="card border-0">
        <div className="card-body bg-success">
          <div className="h5 mt-0">Te ardhurat vjetore</div>
          {/* Line chart */}
          <Sparkline
            values={props.data}
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
          />
        </div>
      </div>
    </section>
  );
};

export default YearlyGraph;
