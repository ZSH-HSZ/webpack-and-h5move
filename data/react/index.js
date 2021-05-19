import React, { useState, useEffect } from 'react';
import store from './store/index';
import { countAddAction } from './action/counter';
import { loadPosts } from './action/post';
store.dispatch(countAddAction);
store.dispatch(loadPosts);
const App = (props) => {
  return <></>;
};
export default App;
