<template>
  <div id="movie">
    <v-app>
        <v-toolbar app fixed>
          <v-btn color="blue lighten-2" dark depressed round >
          <v-icon dark>arrow_back_ios</v-icon>返回答题
        </v-btn>
        </v-toolbar>
        <v-content>
          <v-container  grid-list-md>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-img :src=this.data.images.small></v-img>
              </v-flex>
              <v-flex xs12 md6>
                <v-card class="pl-3">
                  <v-card-text class="display-1">
                    {{data.title}}
                  </v-card-text>
                  <v-card-text>
                    导演: <span v-for="item in data.directors" :key="item">{{item.name}} </span>
                  </v-card-text>
                  <v-card-text>
                    豆瓣评分: {{data.rating.average}}/10
                  </v-card-text>
                  <v-card-text>
                    类型: <span v-for="item in data.genres" :key="item">{{item}} </span>
                  </v-card-text>
                  <v-card-text>
                    制片国家/地区： <span v-for="item in data.countries" :key="item">{{item}} </span>
                  </v-card-text>
                   <v-card-text>
                    年份： {{data.year}}
                  </v-card-text>
                </v-card>
                <v-card xs12 md6 class="mt-3">
                  <v-card-text class="display-1">
                    剧情简介:
                  </v-card-text>
                  <v-card-text>
                    {{data.summary}}
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm12 md12 lg12 xl12>
                <v-layout row wrap>
                  <v-flex xs12 sm6 md6 lg4 xl3 v-for="(item, index) in data.casts" :key="index">
                    <v-card>
                      <v-img :src=item.avatars.small></v-img>
                      <v-card-text>{{item.name}}</v-card-text>
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

export default {
  name: "movie",
  data() {
    return {
      data:{},
    };
  },
  mounted(){
    this.getMovie();
  },
  methods: {
    getMovie(){
      let _this = this;
      this.$axios({
        methods:'GET',
        url:'/apis/v2/movie/subject/1292220',
      }).then((response) =>{_this.data = response.data}).catch(err => console.log(err));
    },
    
  },
  
};
</script>

<style scoped>
</style>
