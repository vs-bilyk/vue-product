import Vue from 'vue';
// import MainComponent from './modules/main/main.vue'
// import Main from './modules/Main/Main.vue';

class AppCore {
    private instance: Vue;

    private init() {
        this.instance = new Vue({
            el: '#app',
            // render: h => h(Main),
            render (h) {
                return h('div', 'text')
              }
        })
    }

    constructor() {
        this.init();
    }
}

new AppCore();