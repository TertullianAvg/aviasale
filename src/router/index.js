import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/company',
		name: 'Company',
		component: () => import(/* webpackChunkName: "about" */ '../views/Company.vue'),
	},
	{
		path: '/airports',
		name: 'Airports',
		component: () => import(/* webpackChunkName: "about" */ '../views/Airports.vue'),
	},
	{
		path: '/flights',
		name: 'Flights',
		component: () => import(/* webpackChunkName: "about" */ '../views/Flights.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
