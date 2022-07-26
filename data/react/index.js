import React, { useState, useEffect } from 'react';
import {message} from 'antd'
const App = (props) => {
  const showMessage = () => {
    message.error(null)
    message.error('null')
  }
  const showMessage2 = () => {
    message.error('null')
  }
  return <>
    <div onClick={showMessage}>发苏打粉</div>
    <div onClick={showMessage2}>发苏打粉</div>
  </>;
};
export default App;
