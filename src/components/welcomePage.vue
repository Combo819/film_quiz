<template>
  <div id="welcome_page">
    <v-app>
      <v-content>
        <v-container fluid fill-height grid-list-xl>
          <v-layout align-center justify-center row fill-height wrap>
            <v-flex xs11 sm10 md6 lg4>
              <v-card :to="{name:'QuizPage'}">
                <v-img aspect-ratio='1' src='https://i.pinimg.com/564x/3e/bb/36/3ebb364a8ac339d06145d71a7f7090a4.jpg  '></v-img>
                <v-card-text class="headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center">start</v-card-text>
              </v-card>
            </v-flex>
           
           <v-flex xs11 sm10 md6 lg4>
              <v-card :to="{name:'instrucion'}">
                <v-img aspect-ratio='1' src='https://i.pinimg.com/564x/3e/bb/36/3ebb364a8ac339d06145d71a7f7090a4.jpg  '></v-img>
                <v-card-text class="headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center">instrucion</v-card-text>
              </v-card>
            </v-flex>
             <v-flex xs11 sm10 md6 lg4>
              <v-card>
                <v-img aspect-ratio='1' src='./static/cover/egg.jpg' position='center bottom'></v-img>
                <v-card-text class="headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center">egg</v-card-text>
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
    console.log(this.$store.state);
    if(this.$store.state.getFlag){
      this.getMovieList();
    }
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
        console.log('1id:' + this.$store.state.movieList[0].status);
      }).catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
</style>
