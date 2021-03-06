import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Privacy from "@/views/Privacy.vue"
import Contact from "@/views/Contact.vue"
import Random from "@/views/Random.vue"
import Submit from "@/views/Submit.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/random",
    name: "Random",
    component: Random,
  },
  {
    path: "/submit",
    name: "Submit",
    component: Submit,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router