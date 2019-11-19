import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
Vue.use(firebase) 


// import VueCordova from 'vue-cordova'
// Vue.use(VueCordova)
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// let app
/*
fb.auth.onAuthStateChanged(user => {
  if (!app) {
      app = new Vue({
          el: '#app',
          router,
          store,
          render: h => h(App)
      })
  }
});
*/

// fb.auth.onAuthStateChanged(()=>{
//   if (!app) {
//     app = new Vue({
//         el: '#app',
//         router,
//         store,
//         render: h => h(App)
//     })
// }
// });