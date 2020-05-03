// To config vue-router
// associate the base URL path / with statelist component
// set the HOME Page of the app

import Router from 'vue-router'

import StateList from '@/components/StateList'
import About from '@/components/About'
import StateDetail from '@/components/StateDetail'

//StateDetail uses :state parameter - to be used for each state

export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/detail/:state',
            name: 'detail',
            component: StateDetail
        }
    ]
})