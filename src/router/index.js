import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WelcomePage from '@/components/welcomePage'
import QuizPage from '@/components/QuizPage'
import moive from '@/components/movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'moive',
      component: moive
    }
  ]
})
