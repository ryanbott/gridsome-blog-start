import NotFound from "gridsome/app/pages/404.vue"

export const routes = [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "~/pages/Index.vue"),
    meta: { data: true }
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import(/* webpackChunkName: "component--contact" */ "~/pages/Contact.vue")
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "~/pages/About.vue")
  },
  {
    name: "blogPost",
    path: "/:slug",
    component: () => import(/* webpackChunkName: "component--blog-post" */ "~/templates/BlogPost.vue"),
    meta: { data: true }
  }
]

export { NotFound }

