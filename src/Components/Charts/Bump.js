import React from "react";
import { ResponsiveBump } from "@nivo/bump";
import { reduceEachTrailingCommentRange } from "typescript";

const charts = {
  emptyPattern: {
    id: "empty",
    type: "patternLines",
    background: "inherit",
    color: "rgba(0, 0, 0, .07)",
    rotation: -45,
    lineWidth: 3,
    spacing: 6,
  },
  axis: {
    domain: {
      line: {
        strokeWidth: 0,
      },
    },
    ticks: {
      text: {
        fontSize: 12,
        fill: "white",
      },
    },
    legend: {
      text: {
        fontSize: 14,
        fontWeight: 600,
      },
    },
  },
  streamTimelineAxis: {
    ticks: {
      line: {
        strokeWidth: 2,
      },
      text: {
        fontSize: 12,
      },
    },
  },
  grid: {
    line: {
      strokeDasharray: "1 2",
      strokeOpacity: 0.4,
    },
  },
  legends: {
    text: {
      fontSize: 11,
    },
  },
  tooltip: {
    container: {
      color: "#212529",
      fontSize: 14,
      borderRadius: 0,
      boxShadow: `9px 9px 0 rgba(0, 0, 0, 0.15)`,
    },
  },
  labels: {
    text: {
      fontSize: 12,
      fontWeight: 500,
      textShadow: `0px 2px 3px rgba(0,0,0,0.35)`,
    },
  },
  dots: {
    text: {
      fontSize: 12,
    },
  },
};

const colors = [
  "#fbf34c",
  "#F649A7",
  "#EF8D33",
  "#599E38",
  "#85EBA2",
  "#1ea0f2",
  "#FE6A6A",
  "#7854C3",
  "#41c7c7",
  "#4861EC",
  "#D68DF0",
  "#a3cacd",
];

const Bump = ({ data }) => (
  <div className="chart-container">
    <div className="chart-container x-scroll">
      <div className="chart-container chart-inner">
        <ResponsiveBump
          data={data}
          margin={{ top: 40, right: 125, bottom: 40, left: 125 }}
          colors={colors}
          // @ts-ignore
          inactiveLineWidth={5}
          theme={charts}
          enableGridX={true}
          enableGridY={false}
          axisTop={{
            tickSize: 0,
            tickPadding: 9,
          }}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 9,
          }}
          axisLeft={null}
          startLabel={(d) => d.id}
          startLabelTextColor={{
            from: "color",
            modifiers: [["brighter", 1]],
          }}
          startLabelPadding={20}
          endLabel={(d) => d.id}
          endLabelTextColor={{
            from: "color",
            modifiers: [["brighter", 1]],
          }}
          endLabelPadding={20}
          lineWidth={5}
          pointSize={18}
          pointBorderWidth={3}
          pointBorderColor={{ from: "serie.color" }}
          activeLineWidth={8}
          activePointSize={24}
          activePointBorderWidth={4}
          inactivePointSize={0}
          inactivePointBorderWidth={2}
        />
      </div>
    </div>
  </div>
);

export default Bump;
