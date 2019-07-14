import Vue from 'vue';
import VuePlyr from 'vue-plyr';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-plyr/dist/vue-plyr.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


import locale from 'element-ui/lib/locale/lang/en';


Vue.use(VuePlyr);
Vue.use(ElementUI);

Vue.use(ElementUI);
Vue.use(ElementUI, {
  locale,
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {},
  methods: {},

}).$mount('#app');
