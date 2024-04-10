import React from "react";
import Bar from "./Charts/Bar";

const data = [
  {
    language: "Powershell",
    years: 1,
  },
  {
    language: "Java",
    years: 2,
  },
  {
    language: "Python",
    years: 2,
  },
  {
    language: "Ruby",
    years: 2,
  },
  {
    language: "Elixir",
    years: 3,
  },
  {
    language: "C#",
    years: 9,
  },
  {
    language: "JavaScript",
    years: 11,
  },
  {
    language: "SQL",
    years: 12,
  },
  {
    language: "HTML/CSS",
    years: 12,
  },
];

const LanguagesInTotal = () => <Bar data={data} />;

export default LanguagesInTotal;
