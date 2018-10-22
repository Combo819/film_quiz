<template>
  <div id="scoreboard">
    <v-app>
      <v-toolbar app fixed>
        <v-btn color="blue lighten-2" dark depressed round :to="{name:'WelcomePage'}">
          <v-icon dark>arrow_back_ios</v-icon>返回主页
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
          </v-layout>
          <v-flex xs12>
            <v-layout align-center justify-center row fill-height wrap>
              <v-flex xs2 v-for="(item,index) in $store.state.movieList" :key=index>
                <v-card  color="sucess">
                   <v-card-text v-if="item.status >= 0">
                    {{index + 1}}:{{item.movieName}}
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
    data(){
      return{

      }
    },
    mounted(){
    if(this.$store.state.getFlag){
      this.getMovieList();
    }
    console.log(this.$store.state.movieList);
  },
  methods:{
     /**
     * 读取本地的json，并且把值赋给vuex
     */
    getMovieList(){
      this.$axios({
        method:'get',
        url:'../static/movieList.json'
      }).then(Response => {
        function Moive(id,movieName){
          this.id = id;
          this.fileName = movieName;
          this.movieName = movieName.substr(0,movieName.indexOf('.'));
          this.status = -2
        };
        for(let i in Response.data){
          let movieComponent = new Moive(Response.data[i],i);
          this.$store.commit('addObject',movieComponent)
        };
        this.$store.commit('setGetFlag');
      }).catch(err => console.log(err));
    }
  },
  scoreColor(){
    if(this.$store.state.movieList.status < 0){
      return null
    }
    else if(this.$store.state.movieList.status == 0){
      return 'success'
    }
    else if(this.$store.state.movieList.status == 1){
      return 'orange'
    }
    else if(this.$store.state.movieList.status == 2){
      return 'green'
    }
  }
  };

</script>

<style scoped>

</style>
