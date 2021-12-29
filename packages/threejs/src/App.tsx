/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-11-08 10:30:25
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-11-08 18:01:42
 */
// import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './index.module.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ThreeJs
        </a>
        <div className={styles.dm}>Scss loader</div>
      </header>
    </div>
  );
}
export default App;
