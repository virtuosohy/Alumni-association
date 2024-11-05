import { createRouter, createWebHistory } from 'vue-router';
import GoList from './components/GoList.vue'; // 假设要跳转到的页面组件
import GoShare from './components/GoShare.vue';
import GoIn from './components/GoIn.vue';
import MyHome from './components/MyHome.vue';

const routes = [
    { path: '/', component: MyHome },
    { path: '/list', component: GoList },
    { path: '/Share', component: GoShare },
    { path: '/In', component: GoIn },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
