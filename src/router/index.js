import Vue from 'vue'
import Router from 'vue-router'
import ApiGroups from '../components/ApiGroups'
import ApiList from '../components/ApiList'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ApiGroups,
            name: 'home'
        },
        {
            path: '/api-list/:id',
            component: ApiList,
            name: 'api-list'
        }
    ]
});

export default router
