import homeCmp from './pages/home.cmp.js'
import surveyCmp from './pages/survey.cmp.js'

const { createApp } = Vue
const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: homeCmp,
        },
        {
            path: '/survey',
            component: surveyCmp,
        },
    ]
}

const options = {
    template: `
        <header>
            <h1>Dynamic Components</h1>
            <nav>
                <router-link to="/">Home</router-link>  |
                <router-link to="/survey">Survey</router-link>
            </nav>
        </header>
        <router-view />
    `,
}
const router = createRouter(routerOptions)
const app = createApp(options)

app.use(router)
app.mount('#app')
