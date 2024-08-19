import { createRouter, createWebHistory } from 'vue-router';
import _get from 'lodash/get';
import { useAuthStore } from '@/store/auth';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/game/swr',
    name: 'SWR',
    component: () => import('../components/tasks/taskSWR.vue'),
    props: { taskId: 'swr', language: 'en' },
    meta: { pageTitle: 'SWR' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;
    if (to.meta.smoothScroll) scroll.behavior = 'smooth';
    return scroll;
  },
});

router.beforeEach(async (to, from, next) => {
  const isLevante = import.meta.env.MODE === 'LEVANTE';
  // Don't allow routing to LEVANTE pages if not in LEVANTE instance
  if (!isLevante && to.meta?.project === 'LEVANTE') {
    next({ name: 'Home' });
    // next function can only be called once per route
    return;
  }

  const store = useAuthStore();

  const allowedUnauthenticatedRoutes = [
    'SignIn',
    'Maintenance',
    'AuthClever',
    'AuthClassLink',
    'AuthEmailLink',
    'AuthEmailSent',
    'Register',
  ];

  const inMaintenanceMode = false;

//   if (inMaintenanceMode && to.name !== 'Maintenance') {
//     next({ name: 'Maintenance' });
//     return;
//   } else if (!inMaintenanceMode && to.name === 'Maintenance') {
//     next({ name: 'Home' });
//     return false;
//   }
  // Check if user is signed in. If not, go to signin
//   if (
//     !to.path.includes('__/auth/handler') &&
//     !store.isAuthenticated &&
//     !allowedUnauthenticatedRoutes.includes(to.name)
//   ) {
//     next({ name: 'SignIn' });
//     return;
//   }

  // Check if the route requires admin rights and the user is an admin.
  const requiresAdmin = _get(to, 'meta.requireAdmin', false);
  const requiresSuperAdmin = _get(to, 'meta.requireSuperAdmin', false);

  // Check user roles
  const isUserAdmin = store.isUserAdmin;
  const isUserSuperAdmin = store.isUserSuperAdmin;

  // All current conditions:
  // 1. Super Admin: true, Admin: true
  // 2. Super Admin: false, Admin: true (Only exits because requiresSuperAdmin is not defined on every route)
  // 3. Super Admin: false, Admin: false (Allowed routes for all users)
  // (Also exists because requiresAdmin/requiresSuperAdmin is not defined on every route)

  if (isUserSuperAdmin) {
    next();
    return;
  } else if (isUserAdmin) {
    // LEVANTE dashboard has opened some pages to administrators before the ROAR dashboard
    // So if isLevante, then allow regular admins to access any route with requireAdmin = true.
    // and if ROAR, then prohibit regular admins from accessing any route with requireSuperAdmin = true.
    if (isLevante && requiresAdmin) {
      next();
      return;
    } else if (requiresSuperAdmin) {
      next({ name: 'Home' });
      return;
    }
    next();
    return;
  }

  // If we get here, the user is a regular user
  if (requiresSuperAdmin || requiresAdmin) {
    next({ name: 'Home' });
    return;
  }

  next();
  return;
});

export default router;
