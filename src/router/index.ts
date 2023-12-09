import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";

const Posts = () => import('../pages/Posts.vue')
const Albums = () => import('../pages/Albums.vue')
const User = () => import('../pages/User.vue')
const NewPost = () => import('../pages/NewPost.vue')

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;