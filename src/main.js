// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'


import 'vue-awesome/icons/times-circle'
import 'vue-awesome/icons/check-circle'
import Icon from 'vue-awesome/components/Icon'



Vue.component('icon', Icon)


Vue.config.productionTip = false

export const EventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

