import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import axios from 'axios';
import './App.css'

class App extends Component {

  constructor(props){
    super(props)
    this.handlePan = this.handlePan.bind(this);
  }

  handlePan(direction){
    console.log(`pan direction: ${direction}`);
    console.log(`${process.env.IP}/test`);
    axios({
      method: 'post',
      url: '/test',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });
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
              <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                onClick={() => this.handlePan('left')}>
                  Pan Left
                </button>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                onClick={() => this.handlePan('right')}>
                  Pan Right
                </button>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                onClick={() => this.handlePan('up')}>
                  Pan Up
                </button>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                onClick={() => this.handlePan('down')}>
                  Pan Down
                </button>
              </div>
            </div>
          </div>
        </main>
        </div>
      </div>
    );
  }
}

export default App;
