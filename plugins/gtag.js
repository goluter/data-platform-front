import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: {
      id: 'G-2N589MW1EY'
    }
  }, app.router)
}
