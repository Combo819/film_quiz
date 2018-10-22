<template>
  <div id="scoreboard">
    <v-app>
      <v-toolbar app fixed>
        <v-btn color="blue lighten-2" dark depressed round :to="{name:'WelcomePage'}">
          <v-icon dark>arrow_back_ios</v-icon>返回主页
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue lighten-2" dark depressed round :to="{name:'QuizPage'}">返回答题
          <v-icon dark>arrow_forward_ios</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container grid-list-md text-xs-center>
          <v-layout align-center justify-center row fill-height wrap>
            <v-flex xs12>
              <v-card>
                <v-card-text class="display-1">
                  积分榜
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 >
              <v-card>
                <v-card-text class="display-1">
                  当前积分:{{allScoreSum}}
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 v-if = 'checkallAnswered'>
              <v-card :to="{name:'egg'}">
                <v-img aspect-ratio='1' src='./static/cover/egg.jpg' position='center bottom'></v-img>
                <v-card-text class="headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center">彩蛋</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-flex xs12>
            <v-layout align-center justify-center row fill-height wrap>
              <v-flex xs2 v-for="(item,index) in $store.state.movieList" :key=index>
                <v-card :color='scoreColor(index)'>
                  <v-card-text v-if="item.status >= 0">
                    {{index + 1}}<br>{{item.movieName}}
                  </v-card-text>
                  <v-card-text v-else>
                    {{index + 1}}
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: "scoreboard",
    data() {
      return {
        scoreColor: function (index) {
          if (this.$store.state.movieList[index].status < 0) {
            return null
          } else if (this.$store.state.movieList[index].status == 0) {
            return 'red'
          } else if (this.$store.state.movieList[index].status == 1) {
            return 'orange'
          } else if (this.$store.state.movieList[index].status == 2) {
            return 'green'
          }
        },
      }
    },
    mounted() {
      if (this.$store.state.getFlag) {
        this.getMovieList();
      }
    },
    methods: {
      /**
       * 读取本地的json，并且把值赋给vuex
       */
      getMovieList() {
      function Moive(id,movieName){
          this.id = id;
          this.fileName = movieName;
          this.movieName = movieName.substr(0,movieName.indexOf('.'));
          this.status = -2
        };
        for(let i in this.$store.state.movieJson){
          let movieComponent = new Moive(this.$store.state.movieJson[i],i);
          this.$store.commit('addObject',movieComponent)
        };
        this.$store.commit('setGetFlag');
      },
    },
    computed:{
      allScoreSum(){
        return this.$store.getters.scoreSum
      },
      checkallAnswered(){
        return this.$store.getters.checkallAnswer
      }
    }
  };

</script>

<style scoped>

</style>
