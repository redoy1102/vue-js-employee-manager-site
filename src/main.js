// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from "firebase";
import firebaseinit from "./components/firebaseinit";

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  //handling reload problem
  if (!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})


/* eslint-disable no-new */

