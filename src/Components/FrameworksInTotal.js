import React from "react";
import Bar from "./Charts/Bar";

const data = [
  {
    language: "Django",
    years: 1,
  },
  {
    language: "Wicket",
    years: 2,
  },
  {
    language: "Rails",
    years: 2,
  },
  {
    language: "Vue",
    years: 2,
  },
  {
    language: "Entity Framework",
    years: 3,
  },
  {
    language: ".NET (WPF | SignalR)",
    years: 3,
  },
  {
    language: "React",
    years: 3,
  },
  {
    language: "Ecto",
    years: 3,
  },
  {
    language: "Phoenix",
    years: 3,
  },
  {
    language: ".NET (WebAPI)",
    years: 5,
  },
  {
    language: "Angular",
    years: 7,
  },
  {
    language: ".Net (MVC)",
    years: 7,
  },
  {
    language: "NodeJS",
    years: 7,
  },
  {
    language: ".NET (WebForms)",
    years: 8,
  },
];

const FrameworksInTotal = () => <Bar data={data} />;

export default FrameworksInTotal;
