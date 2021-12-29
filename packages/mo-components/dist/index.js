"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.helloPrint=exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _style=_interopRequireDefault(require("./style.css"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-12-28 14:46:41
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-12-28 16:19:39
 */console.log(_style.default);var Button=function Button(){return/*#__PURE__*/_react.default.createElement("button",{className:"button"},"click me")};var helloPrint=function helloPrint(){console.log("\u6253\u5370hello\u4FE1\u606F")};exports.helloPrint=helloPrint;var _default=Button;exports.default=_default;