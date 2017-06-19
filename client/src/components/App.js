import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import axios from 'axios';
import './App.css'

class App extends Component {

  constructor(props){
    super(props)

  }
  componentDidMount() {
    console.log('App did mount');
  }

  render() {
    return (
      <div className="App">
        {/* Always shows a header, even in smaller screens */}
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            {/* Title */}
            <span className="mdl-layout-title">Pi Camera</span>
            {/* Add spacer, to align navigation to the right */}
            <div className="mdl-layout-spacer"></div>
            {/* Navigation. We hide it in small screens. */}
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="">Link</a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Pi Camera</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="mdl-grid">

            </div>
          </div>
        </main>
        </div>
      </div>
    );
  }
}

export default App;