import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
  state: {
    currentQuestion: 0,
    movieLength: 0,
    movieList: [],
    getFlag: true, // determine whether to get Movie list, if it's false , the getMoiveList function should not be executed.
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
      state.currentQuestion++;
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
  }
})
