import Vue from 'vue'
import moment from 'moment'

Vue.filter(
  'date', function (val) {
    if (!moment(val).isValid()) {
      return 'not valid'
    } else {
      return moment(val).format('YYYY-MM-DD')
    }
  })
