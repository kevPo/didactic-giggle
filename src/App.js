import React, { useState } from 'react';
import './styles.css'
import MyResponsiveBump from './Components/Bump'
import MyResponsiveBar from './Components/Bar'
import Header from './Components/Header'
import Fade from 'react-reveal/Fade'

export default function App() {

  const [languagesByYear, setLanguagesByYear] = useState(true);

  const toggleLanguages = (byYear) => {
    setLanguagesByYear(byYear)
  }

  return (
      <div className="App">
          <Header />
          <Fade bottom>
            <div className="top-padding" >
              <div className="heading">
                <h1>Language Usage</h1>
                <div className="flex-container">
                  <button onClick={() => toggleLanguages(true)} className={languagesByYear ? "active" : ""}>by year</button>
                  <button onClick={() => toggleLanguages(false)} className={languagesByYear ? "" : "active"}>in total</button>
                </div>
              </div>
              {languagesByYear
                ? <MyResponsiveBump />
                : <MyResponsiveBar />
              }
            </div>
          </Fade>

          <Fade bottom>
            <div className="top-padding" >
              <div className="heading">
                <h1>Framework Usage</h1>
              </div>
              <MyResponsiveBar />
            </div>
          </Fade>
          
      </div>
  )
}
