import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from '@nivo/core'

const charts = {
  textColor: "#E359A4",
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

const data = [
  {
    language: "Powershell",
    "years": 1
  },
  {
    language: "Java",
    "years": 2
  },
  {
    language: "Python",
    "years": 2
  },
  {
    language: "F#",
    "years": 2
  },
  {
    language: "Ruby",
    "years": 3
  },
  {
    language: "JavaScript",
    "years": 9
  },
  {
    language: "C#",
    "years": 9
  },
  {
    language: "HTML/CSS",
    "years": 10
  },
  {
    language: "SQL",
    "years": 11
  }
];
const colors = ["#49A0EB"];

const CustomTick = tick => {
  const theme = useTheme()

  return (
    <g transform={`translate(${tick.x-60},${tick.y})`}>
          {/* <line stroke="rgb(232, 193, 160)" strokeWidth={1.5} y1={-22} y2={-12} /> */}
          <text
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                  ...theme.axis.ticks.text,
                  fill: '#E359A4',
                  fontSize: 14,
                  fontFamily: "'IBM Plex Mono', monospace"
              }}
          >
              {tick.value}
          </text>
      </g>
  )
}


const MyResponsiveBar = () => (
  <div className="chart-container">
    <div className="chart-container x-scroll">
      <div className="chart-container chart-inner">
        <ResponsiveBar
          data={data}
          keys={["years"]}
          indexBy="language"
          margin={{ top: 50, right: 130, bottom: 50, left: 120 }}
          padding={.3}
          layout="horizontal"
          theme={charts}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={colors}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: "" }}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Total Years",
            legendPosition: "middle",
            legendOffset: 38,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 40,
            renderTick: CustomTick
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="#212529"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </div>
  </div>
);

export default MyResponsiveBar;
