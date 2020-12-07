import Vue from "vue";
import App from "./app.vue";

import drag from "./touch";

Vue.directive("move", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el, binding) {
    drag(el);
  },
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
