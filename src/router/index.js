import {createRouter, createWebHistory} from 'vue-router'


const routes = [

    {
        path: '/',
        name: 'home',

        component: () => import('../views/Home')
    },
    {
        path: '/posts',
        name: 'posts',

        component: () => import('../views/Posts')
    },
    {
        path: '/news/posts/:id',
        name: 'post',

        component: () => import('../views/Post')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'we-pro-active'
})

export default router
