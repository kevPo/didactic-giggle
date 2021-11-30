import React, { useState } from "react";
import "./styles.css";
import LanguagesByYear from "./Components/LanguagesByYear";
import LanguagesInTotal from "./Components/LanguagesInTotal";
import FrameworksByYear from "./Components/FrameworksByYear";
import FrameworksInTotal from "./Components/FrameworksInTotal";
import Tools from "./Components/Tools";
import Header from "./Components/Header";
import Fade from "react-reveal/Fade";

export default function App() {
  const [languagesSetting, setLanguagesSetting] = useState("year");
  const [frameworksSetting, setFrameworksSetting] = useState("year");

  const toggleLanguages = (setting) => {
    setLanguagesSetting(setting);
  };

  const toggleFrameworks = (setting) => {
    setFrameworksSetting(setting);
  };

  const renderLanguages = () => {
    switch (languagesSetting) {
      case "year":
        return <LanguagesByYear />;
      case "total":
        return <LanguagesInTotal />;
    }
  };

  const renderFrameworks = () => {
    switch (frameworksSetting) {
      case "year":
        return <FrameworksByYear />;
      case "total":
        return <FrameworksInTotal />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Fade bottom>
        <div className="top-padding-large">
          <div className="heading">
            <h1>Languages</h1>
            <div className="flex-container">
              <button
                onClick={() => toggleLanguages("year")}
                className={languagesSetting === "year" ? "active" : ""}
              >
                by year
              </button>
              <button
                onClick={() => toggleLanguages("total")}
                className={languagesSetting === "total" ? "active" : ""}
              >
                in total
              </button>
              <p className="meta-blue">
                <i className="meta-blue">*</i> HTML/CSS and SQL are included as
                languages. Don't hate.
              </p>
            </div>
          </div>
          <div class="top-padding-small">{renderLanguages()}</div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="top-padding-large">
          <div className="heading">
            <h1>Frameworks</h1>
            <div className="flex-container">
              <button
                onClick={() => toggleFrameworks("year")}
                className={frameworksSetting === "year" ? "active" : ""}
              >
                by year
              </button>
              <button
                onClick={() => toggleFrameworks("total")}
                className={frameworksSetting === "total" ? "active" : ""}
              >
                in total
              </button>
              <p className="meta-blue">
                <i className="meta-blue">*</i> Some of these are considered
                libraries, not frameworks. Don't hate.
              </p>
            </div>
          </div>
          <div class="top-padding-small">{renderFrameworks()}</div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="top-padding-large">
          <div className="heading">
            <h1>Tools</h1>
          </div>
          <div class="top-padding-small">
            <Tools />
          </div>
        </div>
      </Fade>

      <div className="top-padding-large">
        <div className="heading">
          <h1>Companies</h1>
          <div className="top-padding-small">
            <ul className="company-list">
              <li>
                <div>
                  <div className="company-name-container">
                    <h2>Remote</h2>
                    <p className="meta">10/2021 - Present</p>
                  </div>
                  <div>
                    <p className="role">Senior Backend Engineer</p>
                    <ul className="bulleted-list">
                      <li>
                        <p>Coming soon...</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="company-name-container">
                    <h2>Qualtrax</h2>
                    <p className="meta">03/2019 - 10/2021</p>
                  </div>
                  <div>
                    <p className="role">
                      Team lead and full stack engineer responsible for web
                      application that enables customers to meet heavy
                      compliance burdens.
                    </p>
                    <ul className="bulleted-list">
                      <li>
                        <p>
                          Team transitioned from 4-5 yearly releases to
                          automated weekly releases via Azure Pipelines.
                        </p>
                      </li>
                      <li>
                        <p>
                          Team reduced user story lead-time from 73 days to 17
                          within 1 year using Agile and DevOps principles.
                        </p>
                      </li>
                      <li>
                        <p>
                          Owner of the collaboration between customer support
                          and product engineering. Responsible for facilitating
                          all escalations and critical failures.
                        </p>
                      </li>
                      <li>
                        <p>
                          Organized and implemented major initiative to remove
                          all XSS vulnerabilities from large WebForms product.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="company-name-container">
                    <h2>Excella</h2>
                    <p className="meta">03/2018 - 03/2019</p>
                  </div>
                  <div>
                    <p className="role">
                      Team lead and mentor at the Excella Extension Center (XC)
                      at Virginia Tech. The XC combines student resources from
                      Virginia Tech with consultants to provide high-quality,
                      low-cost support for Excella’s clients.
                    </p>
                    <ul className="bulleted-list">
                      <li>
                        <p>
                          <b>myUSCIS</b> - Responsible for the unauthenticated
                          experience of the myUSCIS website (United States
                          Citizenship and Immigration Services).
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Ampathy.io</b> - Designed and developed prototype
                          to help move customer interviews and marketing
                          workflows from spreadsheets to an online tool.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>eXplore</b> - Tech lead for internal staffing
                          application used by Excella.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="company-name-container">
                    <h2>Qualtrax</h2>
                    <p className="meta">02/2014 - 03/2018</p>
                  </div>
                  <div className="bulleted-list">
                    <p className="role">
                      Developed and maintained web application for organizations
                      needing to manage their compliance to various certifying
                      and accrediting bodies.
                    </p>
                    <ul className="bulleted-list">
                      <li>
                        <p>
                          Evangelized and implemented total refactor of CSS
                          architecture using SMACSS and SASS
                        </p>
                      </li>
                      <li>
                        <p>
                          Major contributor to open source tool, Huburn, that
                          allowed team to monitor agile metrics.
                        </p>
                      </li>
                      <li>
                        <p>
                          Implemented "Health Check Model" to measure things
                          about our team that agile metrics did not.
                        </p>
                      </li>
                      <li>
                        <p>
                          Keynote speaker at the 2017 Qualtrax User Conference
                          and the 2017 A2LA Tech Forum.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="company-name-container">
                    <h2>DaProSystems</h2>
                    <p className="meta">06/2012 - 02/2014</p>
                  </div>
                  <div className="bulleted-list">
                    <p className="role">
                      Designed and developed new application for police officers
                      to use in the field while also providing assistance
                      modernizing legacy products responsible for public safety
                      record management.
                    </p>
                    <ul className="bulleted-list">
                      <li>
                        <p>
                          Implemented real time collaboration for police
                          officers using .NET SignalR.
                        </p>
                      </li>
                      <li>
                        <p>
                          Responsible for recording training videos and leading
                          training sessions on how to use the software.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="company-name-container">
                    <h2>VTLS</h2>
                    <p className="meta">04/2011 - 06/2012</p>
                  </div>
                  <div className="bulleted-list">
                    <p className="role">
                      Built an Online Public Access Catalogue (OPAC) named
                      Chamo. This tool was used in many libraries all over the
                      world including the Hong Kong Public Library.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="top-padding-large">
        <div className="heading">
          <h1>Education</h1>
        </div>
        <div className="top-padding-small">
          <ul className="company-list">
            <li>
              <div>
                <div className="company-name-container">
                  <h2>Radford University</h2>
                  <p className="meta">2011</p>
                </div>
                <div>
                  <p className="role">
                    B.S, Computer Science, Radford University
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="top-padding-large">
        <div className="heading">
          <h1>Random Things</h1>
        </div>
        <div className="top-padding-small">
          <ul className="company-list">
            <li>
              <div>
                <div className="company-name-container">
                  <h2>
                    Published <a href="https://nrv.dev">NRV DEV</a>
                  </h2>
                  <p className="meta">2020</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="company-name-container">
                  <h2>Certified Scrum Master</h2>
                  <p className="meta">2019</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="company-name-container">
                  <h2>
                    Hosted{" "}
                    <a href="https://www.coderetreat.org/">
                      {" "}
                      Global Day of Code Retreat
                    </a>
                  </h2>
                  <p className="meta">2019</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="company-name-container">
                  <h2>
                    Participated in <a href="https://eos.io">EOSIO</a> Hackathon
                    in San Francisco
                  </h2>
                  <p className="meta">2019</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="company-name-container">
                  <h2>Guest Lecturer at Virginia Tech</h2>
                  <p className="meta">2018 - 2020</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="company-name-container">
                  <h2>Guest Lecturer at Radford University</h2>
                  <p className="meta">2016 - 2020</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
