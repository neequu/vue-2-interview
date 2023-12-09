import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style.scss'

// Create Vue app
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')