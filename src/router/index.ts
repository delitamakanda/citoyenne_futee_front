import { createRouter, createWebHistory } from 'vue-router'
import GuestLayout from "@/layouts/GuestLayout.vue";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout.vue";
import {type Role, useAuthStore} from "@/store/auth";

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/auth/Login.vue'),
        meta: {
            layout: GuestLayout,
        }
    },
    {
        path: '/register',
        name:'register',
        component: () => import('@/pages/auth/Register.vue'),
        meta: {
            layout: GuestLayout,
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('@/pages/auth/ForgotPassword.vue'),
        meta: {
            layout: GuestLayout,
        }
    }, {
        path: '/',
        name: 'dashboard',
        component: () => import('@/pages/dashboard/Dashboard.vue'),
        meta: {
            requiresAuth: true,
            layout: AuthenticatedLayout,
            allowedRoles: ['student', 'teacher', 'parent']
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/pages/dashboard/Profile.vue'),
        meta: {
            requiresAuth: true,
            layout: AuthenticatedLayout,
            allowedRoles: ['student', 'teacher', 'parent']
        }
    },
    {
        path: '/lessons',
        name:'lessons',
        component: () => import('@/pages/Lessons.vue'),
        meta: {
            requiresAuth: true,
            layout: AuthenticatedLayout,
            allowedRoles: ['student', 'teacher']
        }
    },
    {
        path: '/unauthorized',
        name: 'unauthorized',
        component: () => import('@/pages/Unauthorized.vue'),
        meta: {
            layout: AuthenticatedLayout
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: () => import('@/pages/NotFound.vue'),
        meta: {
            layout: GuestLayout
        }
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (from.path === '/login') {
        console.log('Navigating to: ', to.fullPath);
    }
    
    const authStore = useAuthStore();
    if (!authStore.user) {
        authStore.restore();
    }
    const requiresAuth = to.meta.requiresAuth;
    const allowedRoles = to.meta.allowedRoles as Role[];

    if (requiresAuth && !authStore.isLoggedIn) {
        next('/login');
    } else if (allowedRoles && authStore.user?.role && !allowedRoles.includes(authStore?.user?.role)) {
        next('/unauthorized');
    } else {
        next();
    }
})