import { createRouter,createWebHashHistory } from "vue-router"
const routes = [
   { path: '/', redirect: '/main' },
   {
    path:"/main",
    component:()=>import("../pages/main/index.vue")
   },
   {
    path:"/login",
    component:()=>import("../pages/login/index.vue")
   },
   { 
    path: '/:pathMatch(.*)*',
    component: ()=>import("../pages/404/index.vue")
   }
  ]
  

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

  export default router;