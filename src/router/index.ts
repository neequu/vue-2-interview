import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const Posts = () => import('../views/Posts.vue')
const Albums = () => import('../views/Albums.vue')
const User = () => import('../views/User.vue')
const NewPost = () => import('../views/NewPost.vue')

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: "Home"
  },
  {
    path: "/new",
    component: NewPost,
    name: "NewPost"
  },
  {
    path: "/users/:id",
    component: User,
    name: "User"
  },
  {
    path: "/users/:id/posts",
    component: Posts,
    name: "Posts",
  },
  {
    path: "/users/:id/albums",
    component: Albums,
    name: "Albums",
  },
  { 
    path: "*", 
    redirect:  '/'
}
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;