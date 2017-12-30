// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./styles/master.scss";

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
    container: "body",
    duration: 600,
    easing: "ease",
    offset: 0,
    cancelable: true,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    template: "<App/>",
    components: { App }
});
