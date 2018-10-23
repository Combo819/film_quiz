<template>
  <div id="movie">
    <v-app>
      <v-toolbar app fixed>
        <v-btn color="blue lighten-2" dark depressed round to="/QuizPage">
          <v-icon dark>arrow_back_ios</v-icon>返回答题
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue lighten-2" dark depressed round :href='movieData.alt' target="_blank">转到豆瓣
          <v-icon dark>arrow_forward_ios</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-img :src=this.postM></v-img>
            </v-flex>
            <v-flex xs12 md6 fill-height>
              <v-card class="pl-3">
                <v-card-text class="display-1">
                  {{movieData.title}}
                </v-card-text>
                <v-card-text>
                  导演: <span v-for="item in movieData.directors" :key="item">{{item.name}} </span>
                </v-card-text>
                <v-card-text>
                  豆瓣评分: {{movieData.rating.average}}/10
                </v-card-text>
                <v-card-text>
                  类型: <span v-for="item in movieData.genres" :key="item">{{item}} </span>
                </v-card-text>
                <v-card-text>
                  制片国家/地区： <span v-for="item in movieData.countries" :key="item">{{item}} </span>
                </v-card-text>
                <v-card-text>
                  年份： {{movieData.year}}
                </v-card-text>
              </v-card>
              <v-card xs12 md6 class="mt-3">
                <v-card-text class="display-1">
                  剧情简介:
                </v-card-text>
                <v-card-text class="subheading">
                  {{movieData.summary}}
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-layout row wrap>
                <v-flex xs12 sm6 md6 lg4 xl3 v-for="(item, index) in movieData.casts" :key="index">
                  <v-card>
                    <v-img :src=item.avatars.small></v-img>
                    <v-card-text class="headline text-xs-center text-sm-center text-md-center text-lg-center text-xl-center">{{item.name}}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import jq from "jquery";
  export default {
    name: "movie",
    data() {
      return {
        movieData: {},
        postM: '',
      };
    },
    mounted() {
      this.getMovie();
    },
    methods: {
     /*  getMovie() {
        let _this = this;
        this.$axios({
          methods: 'GET',
          url: '/apis/v2/movie/subject/' + this.$store.state.movieList[this.$store.state.currentQuestion].id,
        }).then((response) => {
          _this.movieData = response.data;
          _this.postM = response.data.images.small.replace(/s_ratio_poster/, "l_ratio_poster")
        }).catch(err => console.log(err));
      }, */
      getMovie() {
        let _this = this;
        jq.ajax({
          type: "get", //jquey是不支持post方式跨域的
          async: false,
          url: "https://api.douban.com/v2/movie/subject/" + this.$store.state.movieList[this.$store.state.currentQuestion]
            .id,
          dataType: "jsonp",
          jsonp: "callback",
          jsonpCallback: "success_jsonpCallback",
          success: function (response) {
            _this.movieData = response;
            _this.postM = response.images.small.replace(/s_ratio_poster/, "l_ratio_poster")
          },
          error: function (err) {
            console.log(err);
          }
        });
      }

    },

  };

</script>

<style scoped>
</style>
