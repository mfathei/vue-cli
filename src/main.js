import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})

// always use app-header(lowercase dash separated) to name your components