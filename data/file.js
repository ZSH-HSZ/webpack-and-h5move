// import Vue from "vue";
// import App from "./app.vue";

// import drag from "./touch";

// Vue.directive("move", {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function(el, binding) {
//     drag(el);
//   },
// });
// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
import * as React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './react/index';
ReactDOM.render(
  // 暂时移除严格模式
  // antd error
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />,

  document.getElementById('app')
);
