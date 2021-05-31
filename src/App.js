import React, { useState } from 'react';
import './styles.css'
import LanguagesByYear from './Components/LanguagesByYear'
import LanguagesInTotal from './Components/LanguagesInTotal'
import FrameworksByYear from './Components/FrameworksByYear'
import FrameworksInTotal from './Components/FrameworksInTotal'
import Header from './Components/Header'
import Fade from 'react-reveal/Fade'

export default function App() {

  const [languagesSetting, setLanguagesSetting] = useState('year');
  const [frameworksSetting, setFrameworksSetting] = useState('year');

  const toggleLanguages = (setting) => {
    setLanguagesSetting(setting)
  }

  const toggleFrameworks = (setting) => {
    setFrameworksSetting(setting)
  }

  const renderLanguages = () => {
    switch (languagesSetting) {
      case 'year': return (<LanguagesByYear />);
      case 'total': return (<LanguagesInTotal />);
    }
  }

  const renderFrameworks = () => {
    switch (frameworksSetting) {
      case 'year': return (<FrameworksByYear />);
      case 'total': return (<FrameworksInTotal />);
    }
  }

  return (
      <div className="App">
          <Header />
          <Fade bottom>
            <div className="top-padding-large" >
              <div className="heading">
                <h1>Language Usage</h1>
                <div className="flex-container">
                  <button onClick={() => toggleLanguages('year')} className={languagesSetting === 'year' ? "active" : ""}>by year</button>
                  <button onClick={() => toggleLanguages('total')} className={languagesSetting === 'total' ? "active" : ""}>in total</button>
                  <p className="meta-blue"><i className="meta-blue">*</i> HTML/CSS and SQL are included as languages. Don't hate.</p>
                </div>
              </div>
              <div class="top-padding-small">
                { renderLanguages() }
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="container top-padding-small">
              <p className="meta">Languages that I have experience with, but have not yet used in production</p>
              <div className="flex-container">
                <ul className="column-container large-list">
                  <li><p><i>*</i> Elixir (this might be my love language)</p></li>
                  <li><p><i>*</i> F#</p></li>
                  <li><p><i>*</i> TypeScript</p></li>
                  <li><p><i>*</i> GraphQL</p></li>
                </ul>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="top-padding-large" >
              <div className="heading">
                <h1>Framework Usage</h1>
                <div className="flex-container">
                  <button onClick={() => toggleFrameworks('year')} className={frameworksSetting === 'year' ? "active" : ""}>by year</button>
                  <button onClick={() => toggleFrameworks('total')} className={frameworksSetting === 'total' ? "active" : ""}>in total</button>
                  <p className="meta-blue"><i className="meta-blue">*</i> Some of these are considered libraries, not frameworks. Don't hate.</p>
                </div>
              </div>
              <div class="top-padding-small">
                { renderFrameworks() }
              </div>
            </div>
          </Fade>
          
      </div>
  )
}
