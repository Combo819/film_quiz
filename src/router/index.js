import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WelcomePage from '@/components/welcomePage'
import QuizPage from '@/components/QuizPage'
import moive from '@/components/movie'
import instruction from '@/components/instruction'
import scoreboard from '@/components/scoreboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/moive',
      name: 'moive',
      component: moive
    },
    {
      path: '/QuizPage',
      name: 'QuizPage',
      component: QuizPage
    },
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/instruction',
      name: 'instrucion',
      component: instruction
    },
    {
      path: '/scoreboard',
      name: 'scoreboard',
      component: scoreboard
    }
  ]
})
