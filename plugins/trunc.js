import Vue from 'vue'

Vue.filter('trunc', function (text, length, clamp) {
  return String(text).length > length ? text.substring(0, length) + clamp : text
})
