import React from "react";
import { createNull } from "typescript";
import Bump from "./Charts/Bump";

const data = [
  {
    id: "Wicket",
    data: [
      {
        x: 2011,
        y: 1,
      },
      {
        x: 2012,
        y: 3,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: null,
      },
      {
        x: 2016,
        y: null,
      },
      {
        x: 2017,
        y: null,
      },
      {
        x: 2018,
        y: null,
      },
      {
        x: 2019,
        y: null,
      },
      {
        x: 2020,
        y: null,
      },
      {
        x: 2021,
        y: null,
      },
    ],
  },
  {
    id: "Entity Framework",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: 2,
      },
      {
        x: 2013,
        y: 2,
      },
      {
        x: 2014,
        y: 3,
      },
      {
        x: 2015,
        y: null,
      },
      {
        x: 2016,
        y: null,
      },
      {
        x: 2017,
        y: null,
      },
      {
        x: 2018,
        y: null,
      },
      {
        x: 2019,
        y: null,
      },
      {
        x: 2020,
        y: null,
      },
      {
        x: 2021,
        y: null,
      },
    ],
  },
  {
    id: ".NET (WPF | SignalR)",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: 1,
      },
      {
        x: 2013,
        y: 1,
      },
      {
        x: 2014,
        y: 2,
      },
      {
        x: 2015,
        y: null,
      },
      {
        x: 2016,
        y: null,
      },
      {
        x: 2017,
        y: null,
      },
      {
        x: 2018,
        y: null,
      },
      {
        x: 2019,
        y: null,
      },
      {
        x: 2020,
        y: null,
      },
      {
        x: 2021,
        y: null,
      },
    ],
  },
  {
    id: ".NET (WebAPI)",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: null,
      },
      {
        x: 2016,
        y: null,
      },
      {
        x: 2017,
        y: 3,
      },
      {
        x: 2018,
        y: 3,
      },
      {
        x: 2019,
        y: 9,
      },
      {
        x: 2020,
        y: 3,
      },
      {
        x: 2021,
        y: 3,
      },
      {
        x: 2022,
        y: null,
      },
    ],
  },
  {
    id: ".NET (MVC)",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: 2,
      },
      {
        x: 2016,
        y: 2,
      },
      {
        x: 2017,
        y: 2,
      },
      {
        x: 2018,
        y: 2,
      },
      {
        x: 2019,
        y: 8,
      },
      {
        x: 2020,
        y: 2,
      },
      {
        x: 2021,
        y: 2,
      },
      {
        x: 2022,
        y: null,
      },
    ],
  },
  {
    id: ".NET (WebForms)",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: 1,
      },
      {
        x: 2015,
        y: 1,
      },
      {
        x: 2016,
        y: 1,
      },
      {
        x: 2017,
        y: 1,
      },
      {
        x: 2018,
        y: 1,
      },
      {
        x: 2019,
        y: 7,
      },
      {
        x: 2020,
        y: 1,
      },
      {
        x: 2021,
        y: 1,
      },
      {
        x: 2022,
        y: null,
      },
    ],
  },
  {
    id: "Rails",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: null,
      },
      {
        x: 2016,
        y: null,
      },
      {
        x: 2017,
        y: null,
      },
      {
        x: 2018,
        y: null,
      },
      {
        x: 2019,
        y: 2,
      },
      {
        x: 2020,
        y: 6,
      },
      {
        x: 2021,
        y: null,
      },
    ],
  },
  {
    id: "Angular",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: 3,
      },
      {
        x: 2016,
        y: 3,
      },
      {
        x: 2017,
        y: 4,
      },
      {
        x: 2018,
        y: 4,
      },
      {
        x: 2019,
        y: 4,
      },
      {
        x: 2020,
        y: 5,
      },
      {
        x: 2021,
        y: 5,
      },
      {
        x: 2022,
        y: null,
      },
    ],
  },
  {
    id: "Vue",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: null,
      },
      {
        x: 2016,
        y: null,
      },
      {
        x: 2017,
        y: null,
      },
      {
        x: 2018,
        y: null,
      },
      {
        x: 2019,
        y: 1,
      },
      {
        x: 2020,
        y: 7,
      },
      {
        x: 2021,
        y: null,
      },
    ],
  },
  {
    id: "React",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: null,
      },
      {
        x: 2016,
        y: null,
      },
      {
        x: 2017,
        y: null,
      },
      {
        x: 2018,
        y: null,
      },
      {
        x: 2019,
        y: 5,
      },
      {
        x: 2020,
        y: 4,
      },
      {
        x: 2021,
        y: 4,
      },
      {
        x: 2022,
        y: null,
      },
    ],
  },
  {
    id: "Django",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: null,
      },
      {
        x: 2016,
        y: null,
      },
      {
        x: 2017,
        y: null,
      },
      {
        x: 2018,
        y: null,
      },
      {
        x: 2019,
        y: 3,
      },
      {
        x: 2020,
        y: null,
      },
      {
        x: 2021,
        y: null,
      },
    ],
  },
  {
    id: "NodeJS",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: 4,
      },
      {
        x: 2016,
        y: 4,
      },
      {
        x: 2017,
        y: 5,
      },
      {
        x: 2018,
        y: 5,
      },
      {
        x: 2019,
        y: 6,
      },
      {
        x: 2020,
        y: 8,
      },
      {
        x: 2021,
        y: 6,
      },
      {
        x: 2022,
        y: null,
      },
    ],
  },
  {
    id: "Phoenix",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: null,
      },
      {
        x: 2016,
        y: null,
      },
      {
        x: 2017,
        y: null,
      },
      {
        x: 2018,
        y: null,
      },
      {
        x: 2019,
        y: null,
      },
      {
        x: 2020,
        y: null,
      },
      {
        x: 2021,
        y: 7,
      },
      {
        x: 2022,
        y: 1,
      },
    ],
  },
  {
    id: "Ecto",
    data: [
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: null,
      },
      {
        x: 2016,
        y: null,
      },
      {
        x: 2017,
        y: null,
      },
      {
        x: 2018,
        y: null,
      },
      {
        x: 2019,
        y: null,
      },
      {
        x: 2020,
        y: null,
      },
      {
        x: 2021,
        y: 8,
      },
      {
        x: 2022,
        y: 2,
      },
    ],
  },
];

const FrameworksByYear = () => <Bump data={data} />;

export default FrameworksByYear;
