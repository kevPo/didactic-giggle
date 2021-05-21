// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bump
import React from 'react'
import { useSpring, animated } from 'react-spring'
import { ResponsiveBump } from '@nivo/bump'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const charts = {
    emptyPattern: {
        id: 'empty',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(0, 0, 0, .07)',
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
                fill: 'white'
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
            strokeDasharray: '1 2',
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

const colors = [
    '#fbf34c',
    '#F649A7',
    '#EF8D33',
    '#599E38',
    '#85EBA2',
    '#1ea0f2',
    '#FE6A6A',
    '#7854C3',
    '#41c7c7',
    '#4861EC',
];

const CustomPoint = ({
    x,
    y,
    data,
    isInactive,
    size,
    borderColor,
    borderWidth,
}) => {

    const transition = useSpring({
        transform: `translate(${x}, ${y})`,
        radius: size / 2,
        shadowRadius: (size + borderWidth) / 2,
    })

    return (
        <animated.g transform={transition.transform} style={{ pointerEvents: 'none' }}>
            <animated.circle r={transition.shadowRadius} cy={size / 5} fill="rgba(0, 0, 0, .2)" />
            <animated.circle
                r={transition.radius}
                fill={'#212529'}
                stroke={borderColor}
                strokeWidth={borderWidth}
            />
            {!isInactive && (
                <text textAnchor="middle" y={4} fill={'white'} fontSize="11px">
                    {Math.round(data.percentage)}%
                </text>
            )}
        </animated.g>
    )
}

const data = [
    {
      "id": "Java",
      "data": [
        {
          "x": 2010,
          "y": 1
        },
        {
          "x": 2011,
          "y": 1
        },
        {
            "x": 2012,
            "y": null
        },
          {
            "x": 2013,
            "y": null
          },
          {
            "x": 2014,
            "y": null
          },
          {
            "x": 2015,
            "y": null
          },
          {
            "x": 2016,
            "y": null
          },
          {
            "x": 2017,
            "y": null
          },
          {
            "x": 2018,
            "y": null
          },
          {
            "x": 2019,
            "y": null
          },
          {
            "x": 2020,
            "y": null
          },
          {
              "x": 2021,
              "y": null
          }
      ]
    },
    {
      "id": "C#",
      "data": [
        {
            "x": 2010,
            "y": null
        },
        {
            "x": 2011,
            "y": null
        },
        {
          "x": 2012,
          "y": 1
        },
        {
          "x": 2013,
          "y": 1
        },
        {
          "x": 2014,
          "y": 1
        },
        {
          "x": 2015,
          "y": 1
        },
        {
          "x": 2016,
          "y": 1
        },
        {
          "x": 2017,
          "y": 1
        },
        {
          "x": 2018,
          "y": 1
        },
        {
          "x": 2019,
          "y": 5
        },
        {
          "x": 2020,
          "y": 1
        },
        {
            "x": 2021,
            "y": 1
        }
      ]
    },
    {
      "id": "JavaScript",
      "data": [
        {
            "x": 2010,
            "y": null
          },
          {
            "x": 2011,
            "y": null
          },
        {
            "x": 2012,
            "y": 2
          },
          {
            "x": 2013,
            "y": 2
          },
          {
            "x": 2014,
            "y": 2
          },
          {
            "x": 2015,
            "y": 2
          },
          {
            "x": 2016,
            "y": 2
          },
          {
            "x": 2017,
            "y": 2
          },
          {
            "x": 2018,
            "y": 2
          },
          {
            "x": 2019,
            "y": 1
          },
          {
            "x": 2020,
            "y": 2
          },
          {
              "x": 2021,
              "y": 2
          }
      ]
    },
    {
      "id": "Python",
      "data": [
        {
            "x": 2010,
            "y": null
          },
        {
            "x": 2011,
            "y": null
          },
        {
            "x": 2012,
            "y": null
          },
          {
            "x": 2013,
            "y": null
          },
          {
            "x": 2014,
            "y": null
          },
          {
            "x": 2015,
            "y": null
          },
          {
            "x": 2016,
            "y": null
          },
          {
            "x": 2017,
            "y": null
          },
          {
            "x": 2018,
            "y": null
          },
          {
            "x": 2019,
            "y": 2
          },
          {
            "x": 2020,
            "y": 5
          },
          {
              "x": 2021,
              "y": null
          }
      ]
    },
    {
      "id": "Ruby",
      "data": [
        {
            "x": 2010,
            "y": null
          },
          {
            "x": 2011,
            "y": null
          },
          {
              "x": 2012,
              "y": null
          },
            {
              "x": 2013,
              "y": null
            },
            {
              "x": 2014,
              "y": null
            },
            {
              "x": 2015,
              "y": null
            },
            {
              "x": 2016,
              "y": null
            },
            {
              "x": 2017,
              "y": null
            },
            {
              "x": 2018,
              "y": 5
            },
            {
              "x": 2019,
              "y": 3
            },
            {
              "x": 2020,
              "y": 6
            },
            {
                "x": 2021,
                "y": null
            }
      ]
    },
    {
      "id": "SQL",
      "data": [
          {
              "x": 2010,
              "y": 2
          },
        {
            "x": 2011,
            "y": 2
        },
        {
            "x": 2012,
            "y": 4
        },
          {
            "x": 2013,
            "y": 4
          },
          {
            "x": 2014,
            "y": 4
          },
          {
            "x": 2015,
            "y": 4
          },
          {
            "x": 2016,
            "y": 4
          },
          {
            "x": 2017,
            "y": 4
          },
          {
            "x": 2018,
            "y": 4
          },
          {
            "x": 2019,
            "y": 6
          },
          {
            "x": 2020,
            "y": 4
          },
          {
              "x": 2021,
              "y": 4
          }
      ]
    },
    {
      "id": "HTML/CSS",
      "data": [
          {
              "x": 2010,
              "y": null
          },
        {
            "x": 2011,
            "y": 3
        },
        {
            "x": 2012,
            "y": 3
        },
          {
            "x": 2013,
            "y": 3
          },
          {
            "x": 2014,
            "y": 3
          },
          {
            "x": 2015,
            "y": 3
          },
          {
            "x": 2016,
            "y": 3
          },
          {
            "x": 2017,
            "y": 3
          },
          {
            "x": 2018,
            "y": 3
          },
          {
            "x": 2019,
            "y": 4
          },
          {
            "x": 2020,
            "y": 3
          },
          {
              "x": 2021,
              "y": 3
          }
      ]
    },
    {
        "id": "F#",
        "data": [
            {
                "x": 2010,
                "y": null
            },
          {
              "x": 2011,
              "y": null
          },
          {
              "x": 2012,
              "y": null
          },
            {
              "x": 2013,
              "y": null
            },
            {
              "x": 2014,
              "y": null
            },
            {
              "x": 2015,
              "y": null
            },
            {
              "x": 2016,
              "y": null
            },
            {
              "x": 2017,
              "y": null
            },
            {
              "x": 2018,
              "y": null
            },
            {
              "x": 2019,
              "y": null
            },
            {
              "x": 2020,
              "y": 7
            },
            {
                "x": 2021,
                "y": 5
            }
        ]
      },
      {
        "id": "Powershell",
        "data": [
            {
                "x": 2010,
                "y": null
            },
          {
              "x": 2011,
              "y": null
          },
          {
              "x": 2012,
              "y": null
          },
            {
              "x": 2013,
              "y": null
            },
            {
              "x": 2014,
              "y": null
            },
            {
              "x": 2015,
              "y": null
            },
            {
              "x": 2016,
              "y": null
            },
            {
              "x": 2017,
              "y": null
            },
            {
              "x": 2018,
              "y": null
            },
            {
              "x": 2019,
              "y": null
            },
            {
              "x": 2020,
              "y": null
            },
            {
                "x": 2021,
                "y": 6
            }
        ]
      }
  ];

const MyResponsiveBump = () => (
    <ResponsiveBump
            data={data}
            margin={{ top: 40, right: 150, bottom: 40, left: 150 }}
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
            axisRight={(null)}
            axisBottom={{
                tickSize: 0,
                tickPadding: 9,
            }}
            axisLeft={(null)}
            startLabel={(d) => d.id}
            startLabelTextColor={{
                from: 'color',
                modifiers: [['brighter', 1]],
            }}
            startLabelPadding={20}
            endLabel={(d) => d.id}
            endLabelTextColor={{
                from: 'color',
                modifiers: [['brighter', 1]],
            }}
            endLabelPadding={20}
            // pointComponent={CustomPoint}
            lineWidth={5}
            pointSize={18}
            pointBorderWidth={3}
            pointBorderColor={{ from: 'serie.color' }}
            activeLineWidth={8}
            activePointSize={24}
            activePointBorderWidth={4}
            inactivePointSize={0}
            inactivePointBorderWidth={2}
            // @ts-ignore
            // tooltip={({ serie }) => <CustomTooltip {...serie} />}
        />
)

export default MyResponsiveBump;