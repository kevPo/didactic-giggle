import React from "react";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";

const theme = {
  textColor: "#ffffff",
  fontSize: 14,
  fontFamily: "'IBM Plex Mono', monospace",
};
const colors = ["#212529", "#E359A4"];

const Circle = ({ data }) => (
  <div className="tool-info">
    <div className="chart-container--small">
      <div className="chart-container--small x-scroll">
        <div className="chart-container--small chart-inner--small round-border">
          <ResponsiveCirclePacking
            data={data}
            theme={theme}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            id="name"
            value="loc"
            valueFormat=" >-"
            colors={colors}
            padding={4}
            enableLabels={true}
            labelsFilter={function (e) {
              return 1 === e.node.depth;
            }}
            tooltip={({ id, value, color }) =>
              id === data.name ? (
                <div></div>
              ) : (
                <strong style={{ color: "white" }}>
                  {value === 1 ? value + " year" : value + " years"}
                </strong>
              )
            }
            labelTextColor={"#ffffff"}
            fill={[{ match: { depth: 1 }, id: "lines" }]}
          />
        </div>
      </div>
    </div>
    <p>{data.name}</p>
  </div>
);

export default Circle;
