/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-11-08 10:30:25
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-12-29 14:37:07
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerApplication, start } from "single-spa";
import { loadResources }  from './utils/request';
import { performanceMark } from './utils';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let  microApps: any = [];

// 配置子应用
const apps = [
  {
    name: "threejs",
    host: "http://localhost:3001",
    match: /^\/threejs/,
  },
  {
    name: "about",
    host: "http://localhost:3002",
    match: /^\/about/,
  },
];
const unregisteredApps = apps.filter((app) => !microApps.some((registeredApp: any) => registeredApp.name === app.name));
// 注册应用
unregisteredApps.forEach((appData: any) => {
  registerApplication({
    name: appData.name,
    app: async () => {
      const markName = `App ${appData.name} Loading`;
      console.log('process.env.NODE_ENV', process.env.NODE_ENV);
      if (process.env.NODE_ENV === 'development') {
        // console.log(markName, 'markName');
        performanceMark(markName);
      }
      // 这里会去加载远程资源，加载完毕后，子应用暴露出 single-spa 需要的生命周期函数
      await loadResources(appData.host);
      // console.log(css, '23');
      console.log(window[appData.name], "regist2er");
      const ps: any = window[appData.name];
      return ps;
    },
    activeWhen: `/${appData.name}`,
    // customProps: {
    //   authToken: "d83jD63UdZ6RS6f70D0"
    // }
  });
})
// 启动
start();
