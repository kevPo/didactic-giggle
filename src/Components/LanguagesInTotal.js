import React from "react";
import Bar from './Charts/Bar'

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
    language: "Ruby",
    "years": 2
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
    "years": 10
  }
];

const LanguagesInTotal = () => (
  <Bar data={data} />
);

export default LanguagesInTotal;
