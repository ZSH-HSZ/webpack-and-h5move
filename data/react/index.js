import React, { useState, useEffect } from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const countReducer = (state = { count: 1 }, action) => {
  switch (action.type) {
    case 'COUNT_ADD':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const postReducer = (state = { list: [{ title: 'test' }] }, action) => {
  console.log(action);
  switch (action.type) {
    case 'POST_ADD':
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  count: countReducer,
  post: postReducer,
});

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk]),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

console.log(store);
console.log(store.getState());

store.dispatch({
  type: 'COUNT_ADD',
  payload: {},
});
console.log(store.getState());

function getData() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );
}

store.dispatch(async function(dispatch) {
  const res = await getData();
  console.log('res---', res);
  dispatch({
    type: 'POST_ADD',
    payload: res,
  });
});

const App = (props) => {
  return <></>;
};
export default App;
