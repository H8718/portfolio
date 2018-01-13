// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import BootstrapVue from "bootstrap-vue";
import VModal from "vue-js-modal";

Vue.use(BootstrapVue);
Vue.use(VModal);

let VueScrollTo = require("vue-scrollto");
let Waypoints = require("./components/waypoints/lib/noframework.waypoints.min.js");

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./styles/master.scss";

Vue.use(VueScrollTo, {
    container: "body",
    duration: 600,
    easing: "ease",
    offset: -50,
    cancelable: true,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    template: "<App/>",
    components: { App }
});
