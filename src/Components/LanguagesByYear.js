import React from "react";
import Bump from "./Charts/Bump";

const data = [
  {
    id: "Java",
    data: [
      {
        x: 2011,
        y: 1,
      },
      {
        x: 2012,
        y: 5,
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
    id: "C#",
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
        y: 5,
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
    id: "JavaScript",
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
        y: 2,
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
        y: 1,
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
        y: 3,
      },
      {
        x: 2023,
        y: 3,
      },
    ],
  },
  {
    id: "Python",
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
        y: 5,
      },
      {
        x: 2021,
        y: null,
      },
    ],
  },
  {
    id: "Ruby",
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
        y: 6,
      },
      {
        x: 2021,
        y: null,
      },
    ],
  },
  {
    id: "SQL",
    data: [
      {
        x: 2011,
        y: 2,
      },
      {
        x: 2012,
        y: 4,
      },
      {
        x: 2013,
        y: 4,
      },
      {
        x: 2014,
        y: 4,
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
        y: 4,
      },
      {
        x: 2018,
        y: 4,
      },
      {
        x: 2019,
        y: 6,
      },
      {
        x: 2020,
        y: 4,
      },
      {
        x: 2021,
        y: 5,
      },
      {
        x: 2022,
        y: 2,
      },
      {
        x: 2023,
        y: 2,
      },
    ],
  },
  {
    id: "HTML/CSS",
    data: [
      {
        x: 2011,
        y: 3,
      },
      {
        x: 2012,
        y: 3,
      },
      {
        x: 2013,
        y: 3,
      },
      {
        x: 2014,
        y: 3,
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
        y: 3,
      },
      {
        x: 2018,
        y: 3,
      },
      {
        x: 2019,
        y: 4,
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
        y: 4,
      },
      {
        x: 2023,
        y: 4,
      },
    ],
  },
  {
    id: "Elixir",
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
        y: 4,
      },
      {
        x: 2022,
        y: 1,
      },
      {
        x: 2023,
        y: 1,
      },
    ],
  },
  {
    id: "Powershell",
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
        y: 6,
      },
      {
        x: 2022,
        y: null,
      },
    ],
  },
];

const LanguagesByYear = () => <Bump data={data} />;

export default LanguagesByYear;
