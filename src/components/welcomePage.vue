<template>
  <div id="welcome_page">
    <v-app>
      <v-content>
        <v-container fluid fill-height grid-list-xl>
          <v-layout align-center justify-center row fill-height wrap>
            <v-flex xs11 sm10 md6 lg4>
              <v-card :to="{name:'QuizPage'}">
                <v-img aspect-ratio='1' src='./static/cover/sunRise.jpg'></v-img>
                <v-card-text class="headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center">游戏</v-card-text>
              </v-card>
            </v-flex>
           
           <v-flex xs11 sm10 md6 lg4>
              <v-card :to="{name:'instrucion'}">
                <v-img aspect-ratio='1' src='./static/cover/牯岭街少年.jpg' ></v-img>
                <v-card-text class="headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center">指示</v-card-text>
              </v-card>
            </v-flex>
             <v-flex xs11 sm10 md6 lg4>
              <v-card :to="{name:'scoreboard'}">
                <v-img aspect-ratio='1' src='./static/cover/dunkirk.png' position='center bottom' ></v-img>
                <v-card-text class="headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center">积分榜</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "welcomePage",
  data(){
    return{
    }
  },
  mounted(){
    if(this.$store.state.getFlag){
      this.getMovieList();
    }
  },
  methods:{
    /**
     * 读取本地的json，并且把值赋给vuex
     */
    getMovieList(){
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
  }
};
</script>

<style scoped>
</style>
