/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-11-08 14:55:28
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-11-08 17:09:45
 */
import axios from "axios";
import urlJoin from "url-join";

export const getManifest = (url: string) =>
  new Promise(async (resolve) => {

    const u = urlJoin(url, "manifest.json");
    const { data } = await axios.get(u);
    const { entrypoints, publicPath } = data;
    const key = getFirstKey(entrypoints);
    if (!key) {
      return resolve([]);
    }
    const assets = (entrypoints[key].assets || []).filter((file: string) =>
      /(\.css|\.js)$/.test(file)
    );// 存放js

    const css = [
      // 'https://www.hnznit.com/szgw/umi.05633928.css'
    ],
      js = [];
    for (let i = 0; i < assets.length; i++) {
      const asset = assets[i];
      const assetPath = urlJoin(publicPath, asset);
      if (/\.css$/.test(asset)) {
        css.push(assetPath);
      } else if (/\.js$/.test(asset)) {
        js.push(assetPath);
      }
    }
    resolve({
      css, js
    });
  });

export const loadResources = async (url: string) => {
  let { css, js }: any = await getManifest(url);
  return Promise.all([loadStyles(css), loadScripts(js)]);
};

export const getFirstKey = (obj: any) => {
  if (!obj) return;
  return Object.keys(obj)[0];
};

export const loadStyles = async (res: any) => {
  res = (res || []).filter((href: string) => !Boolean(hasLoadedStyle(href)));
  return Promise.all(res.map(createStyle));
};
export const loadScripts = async (res: any) => {
  res = (res || []).filter((src: string) => !Boolean(hasLoadedScript(src)));
  for (let i = 0; i < res.length; i++) {
    await createScript(res[i]);
  }
};
export const createScript = (url: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    const firstScript: HTMLScriptElement = document.getElementsByTagName("script")[0];
    const html: any = firstScript.parentNode;
    if(html) {
      html.appendChild(script, firstScript);
    }
  });
};

export const hasLoadedStyle = function (link: string) {
  return (Array.prototype.slice.apply(document.styleSheets) || []).find(
    (e) => e.href === link
  );
};

export const hasLoadedScript = function (src: string) {
  return (Array.prototype.slice.apply(document.scripts) || []).find(
    (e) => e.src === src
  );
};

export const createStyle = async (url: string) => {
  return new Promise((resolve, reject) => {
    const styleLink: any = document.createElement("link");
    styleLink.link = url;
    styleLink.onload = resolve;
    styleLink.onerror = reject;
    document.head.appendChild(styleLink);
  });
};
