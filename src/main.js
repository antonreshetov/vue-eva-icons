import Vue from 'vue'
import App from './App.vue'
import EvaIcon from './components'

Vue.config.productionTip = false

Vue.use(EvaIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
