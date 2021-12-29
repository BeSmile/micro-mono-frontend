/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-12-28 14:41:52
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-12-29 14:36:25
 */
import React from 'react';
import logo from './logo.svg';
import T from 'mo-components';
import './App.css';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    }
  }
  click1() {
    console.log(1, this.state.count)
  }
  click = () => {
    console.log(2, this.state.count)
  }
  render() {
    return (
      <div>
        <button onClick={this.click}>你-{this.state.count}</button>
      </div>
    )
  };
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Component/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <T/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
