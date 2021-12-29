/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-12-28 14:46:41
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-12-28 16:19:39
 */
import React from 'react';
import styles from './style.css';
console.log(styles);
const Button = () => {
  return (
    <button className="button">click me</button>
  )
}
export const helloPrint = () => {
  console.log('打印hello信息');
}

export default Button;