import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import PostsPage from './pages/PostsPage.vue';
import SinglePostPage from './pages/SinglePostPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/blog',
            name: 'blog',
            component: PostsPage
        },
        {
            path: '/blog/:slug',
            name: 'blog-post',
            component: SinglePostPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});

export { router };