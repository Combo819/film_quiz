import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
  state: {
    currentQuestion: 0,
    movieLength: 0,
    movieList: [],
    getFlag: true, // determine whether to get Movie list, if it's false , the getMoiveList function should not be executed.
    sum:0,
    allAnswered:null
  },
  mutations: {
    addObject(state, object) {
      state.movieList.push(object);
    },
    setGetFlag(state) {
      state.getFlag = false;
    },
    lastQuiz(state) {
      if(state.currentQuestion>0){
        state.currentQuestion--;
      }
      else{
        return false
      }
    },
    nextQuiz(state) {
      if(state.currentQuestion<state.movieList.length){
        state.currentQuestion++;
      }
      else{
        return false
      }
    },
    allRight(state){
      state.movieList[state.currentQuestion].status = 2;
    },
    halfRight(state){
      state.movieList[state.currentQuestion].status = 1;
    },
    peepStatus(state){
      state.movieList[state.currentQuestion].status = -1;
    },
    surrenderStatus(state){
      state.movieList[state.currentQuestion].status = 0;
    },
  },
  getters:{
    scoreSum(state){
      state.sum = 0
      for (let i=0;i<state.movieList.length;i++){
        if(state.movieList[i].status > 0){
          state.sum += state.movieList[i].status;
        }
      }
      return state.sum
    },
    checkallAnswer(state){
      for (let i=0;i<state.movieList.length;i++){
        if(state.movieList[i].status >= 0){
          state.allAnswered = true;
        }
        else{
          state.allAnswered = false;
        }
      }
      return state.allAnswered
    }
  }
})
