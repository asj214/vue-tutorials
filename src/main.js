import Vue from 'vue'
import router from './router'
import VueRouter from 'vue-router'
import moment from 'moment'
import VueMoment from 'vue-moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ko'
import './common/axios'
import mixin from './common/mixin'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(ElementUI, { locale })

moment.updateLocale('ko_kr', {
  weekdays: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  weekdaysShort: ['일', '월', '화', '수', '목', '금', '토']
})

Vue.use(VueMoment, { moment })
Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
