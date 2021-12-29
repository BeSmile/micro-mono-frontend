/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-11-08 13:57:05
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-11-08 17:20:25
 */
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact, { ReactAppOrParcel } from 'single-spa-react';

import './index.css';
import styles from './index.module.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log(styles, 'styles');
const root = document.getElementById('root') as HTMLDivElement;
const container = document.getElementById('container') as HTMLDivElement;
let dom = root;
// 在spa应用中
if(window.singleSpaNavigate) {
  dom = container;
} else {
  ReactDOM.render(<App/>, dom);
}

const reactLifecycle = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter: () => dom,
  rootComponent: App,
}) as ReactAppOrParcel<any>;

export const bootstrap = reactLifecycle.bootstrap as any;
export const mount = reactLifecycle.mount  as any;
export const unmount = reactLifecycle.unmount  as any;