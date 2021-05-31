import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from '@nivo/core'

const charts = {
  textColor: "#49A0EB",
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
        fontWeight: 800,
        fill: "white",
      },
    },
    legend: {
      text: {
        fontSize: 14,
        fontWeight: 600
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

const colors = ["#E359A4"];

const CustomTick = tick => {
  const theme = useTheme()

  return (
    <g transform={`translate(${tick.x-20},${tick.y})`}>
          <text
              textAnchor="end"
              dominantBaseline="middle"
              style={{
                  ...theme.axis.ticks.text,
                  fill: '#49A0EB',
                  fontSize: 12,
                  fontWeight: 500,
                  // fontFamily: "'IBM Plex Mono', monospace"
              }}
          >
              {tick.value}
          </text>
      </g>
  )
}


const Bar = ({data}) => (
  <div className="chart-container">
    <div className="chart-container x-scroll">
      <div className="chart-container chart-inner">
        <ResponsiveBar
          data={data}
          keys={["years"]}
          indexBy="language"
          margin={{ top: 50, right: 130, bottom: 50, left: 120 }}
          padding={.5}
          layout="horizontal"
          theme={charts}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={colors}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: "" }}
          axisRight={null}
          axisLeft={{
            tickSize: 0,
            renderTick: CustomTick
          }}
          label={null}
          isInteractive={false}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </div>
  </div>
);

export default Bar;
