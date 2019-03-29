/**
 * Created by aresn on 19/2/22.
 */
import 'babel-polyfill';
import VueRouter from 'vue-router';
import App from './app.vue';

import './styles/index.less';

Vue.use(VueRouter);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    esModule: false,
    mode: 'history',
    routes: [
        {
            path: '/button',
            component: (resolve) => require(['./routers/button.vue'], resolve)
        },
        {
            path: '/input',
            component: (resolve) => require(['./routers/input.vue'], resolve)
        },
        {
            path: '/dropdown',
            component: (resolve) => require(['./routers/dropdown.vue'], resolve)
        },
        {
            path: '/select',
            component: (resolve) => require(['./routers/select.vue'], resolve)
        },
        {
            path: '/radio',
            component: (resolve) => require(['./routers/radio.vue'], resolve)
        },
        {
            path: '/checkbox',
            component: (resolve) => require(['./routers/checkbox.vue'], resolve)
        },
        {
            path: '/menu',
            component: (resolve) => require(['./routers/menu.vue'], resolve)
        },
        {
            path: '/form',
            component: (resolve) => require(['./routers/form.vue'], resolve)
        },
        {
            path: '/switch',
            component: (resolve) => require(['./routers/switch.vue'], resolve)
        },
        {
            path: '/tabs',
            component: (resolve) => require(['./routers/tabs.vue'], resolve)
        },
        {
            path: '/tag',
            component: (resolve) => require(['./routers/tag.vue'], resolve)
        },
        {
            path: '/modal',
            component: (resolve) => require(['./routers/modal.vue'], resolve)
        },
        {
            path: '/steps',
            component: (resolve) => require(['./routers/steps.vue'], resolve)
        },
        {
            path: '/transfer',
            component: (resolve) => require(['./routers/transfer.vue'], resolve)
        },
        {
            path: '/upload',
            component: (resolve) => require(['./routers/upload.vue'], resolve)
        },
        {
            path: '/alert',
            component: (resolve) => require(['./routers/alert.vue'], resolve)
        },
        {
            path: '/message',
            component: (resolve) => require(['./routers/message.vue'], resolve)
        },
        {
            path: '/notice',
            component: (resolve) => require(['./routers/notice.vue'], resolve)
        },
        {
            path: '/poptip',
            component: (resolve) => require(['./routers/poptip.vue'], resolve)
        },
        {
            path: '/tooltip',
            component: (resolve) => require(['./routers/tooltip.vue'], resolve)
        },
        {
            path: '/page',
            component: (resolve) => require(['./routers/page.vue'], resolve)
        },
        {
            path: '/slider',
            component: (resolve) => require(['./routers/slider.vue'], resolve)
        },
        {
            path: '/progress',
            component: (resolve) => require(['./routers/progress.vue'], resolve)
        },
        {
            path: '/table',
            component: (resolve) => require(['./routers/table.vue'], resolve)
        },
    ]
});

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
