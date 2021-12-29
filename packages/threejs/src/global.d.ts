/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-11-08 15:21:14
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-11-08 16:17:06
 */
declare global {
  interface Window {
    singleSpaNavigate: any;
  }
}

// declare module "*.scss";
declare module '*.css';

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
export {}