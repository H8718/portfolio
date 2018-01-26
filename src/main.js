import Vue from "vue";
import App from "./App";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

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
