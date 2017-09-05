import * as React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const logo = require('./logo.svg');

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <div>
          <BrowserRouter>
            <div>
              <ul className="Menu-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>

              <hr/>

              <Route exact={true} path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
