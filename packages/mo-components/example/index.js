/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-12-28 15:48:28
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-12-29 15:25:25
 */
import React from 'react';
import { render } from 'react-dom';
import { Button } from '../lib/Button';

const App = () => (
    <div style={{width: '375px'}}>
        <Button/>
    </div>
);
render(<App />, document.getElementById("root"));