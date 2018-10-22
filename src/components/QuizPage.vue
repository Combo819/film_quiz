<template>
  <div id="quiz_page">
    <v-app>
      <v-toolbar app>
        <v-btn color="blue lighten-2" dark depressed round @click="$store.commit('lastQuiz');resetPanel();">
          <v-icon dark>arrow_back_ios</v-icon>上一题
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue lighten-2" dark depressed round v-show="nextShow" @click="$store.commit('nextQuiz');resetPanel();">
          下一题 <v-icon dark>arrow_forward_ios</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12>
              <p class="text-xs-center display-1 cyan--text">{{this.$store.state.currentQuestion +
                1}}/{{$store.state.movieList.length}}</p>
            </v-flex>
            <v-flex xs12 sm12 md6 lg4>
              <v-img v-if='($store.state.movieList[this.$store.state.currentQuestion].status == -2)||($store.state.movieList[this.$store.state.currentQuestion].status == -1)'
                :src='getImgSrc()'> </v-img>
              <v-img v-else :src='getOriginImg()'> </v-img>
            </v-flex>
            <v-flex xs12 sm12 md6 lg8>
              <v-container fluid grid-list-lg>
                <v-layout align-center justify-space-around column fill-height>
                  <transition name="fade">
                    <v-flex xs6 v-show="tipShow">
                      <p class="headline blue-grey--text font-weight-medium">开头{{tipLength}}个字为：{{tipMessage}}</p>
                    </v-flex>
                  </transition>
                  <transition name="fade">
                    <v-flex xs6 v-if="answerShow">
                      <p class="display-1 blue-grey--text font-weight-medium">{{standardAnswer}}</p>
                    </v-flex>
                  </transition>
                  <transition name="fade">
                    <v-flex xs6>
                      <v-alert :value="greenCorrect" color="green lighten-2" type="success" transition="scale-transition"
                        outline>对了！</v-alert>
                    </v-flex>
                  </transition>
                  <transition name="fade">
                    <v-flex xs6>
                      <v-alert :value="yellowCorrect" color="yellow darken-1" type="success" transition="scale-transition"
                        outline>（偷看后）对了！</v-alert>
                    </v-flex>
                  </transition>
                  <transition name="fade">
                    <v-flex xs6>
                      <v-alert :value="redWrong" color="red darken-1" type="success" transition="scale-transition"
                        outline icon='error'>错误！</v-alert>
                    </v-flex>
                  </transition>
                  <transition name="fade">
                    <v-flex xs6>
                      <v-alert :value='redAlert' color="red darken-1" type="success" transition="scale-transition"
                        outline icon='error'>你未能答出此题！</v-alert>
                    </v-flex>
                  </transition>
                  <v-flex xs6>
                    <v-text-field v-model="keyIn" v-show="inputShow"></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <transition name="fade">
                      <v-btn depressed round dark color="blue lighten-2" large v-show="verifyShow" @click="verifyClick"
                        class="title">验证</v-btn>
                    </transition>
                  </v-flex>
                  <transition name="fade">
                    <v-flex xs6>
                      <v-btn depressed round dark color="orange lighten-2" large v-show="peepShow" @click="peepClick"
                        class="title">偷看</v-btn>
                    </v-flex>
                  </transition>
                  <v-flex xs6>
                    <transition name="fade">
                      <v-btn depressed round dark color="red lighten-2" large @click="surrenderClick" v-show="surrenderShow"
                        class="title">投降</v-btn>
                    </transition>
                  </v-flex>
                  <transition name="fade">
                    <v-flex xs12>
                      <v-card color="grey lighten-4" class="gray--text pa-2" width="320px" v-show="doubanShow">
                        <v-layout>
                          <v-flex xs5>
                            <v-img :src="cardImgSrc" height="125px" contain></v-img>
                          </v-flex>
                          <v-flex xs7>
                            <v-card-title primary-title class="py0">
                              <div>
                                <div class="headline">{{cardTitle}}</div>
                                <div>导演：{{cardDirector}}</div>
                                <div>年份：{{cardYear}}</div>
                              </div>
                            </v-card-title>
                          </v-flex>
                        </v-layout>
                        <v-divider light></v-divider>
                        <v-card-actions class="pa-3">
                          <v-spacer></v-spacer>
                          <v-btn depressed round dark color="teal lighten-3" :to="{name:'moive'}">展开</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>
                  </transition>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer app>
        <v-btn color="blue lighten-3" dark depressed :to="{name:'WelcomePage'}">主页</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue lighten-3" dark depressed :to="{name:'scoreboard'}">积分榜</v-btn>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: "QuizPage",
    data() {
      return {
        peepShow: true, //是否显示偷看按钮
        verifyShow: true, //是否显示验证按钮
        surrenderShow: true, //是否显示投降按钮
        inputShow: true, //是否显示输入框
        tipShow: false, //是否显示答案提示
        answerShow: false, //是否显示答案
        greenCorrect: false, //是否显示完全正确提示框
        yellowCorrect: false, //是否显示偷看后正确提示框
        redWrong: false, //是否显示错误提示框
        doubanShow: false, //是否显示豆瓣卡
        keyIn: "", //输入内容绑定
        standardAnswer: "标准答案", //标准答案
        tipMessage: '提示信息',
        tipLength: 0, //提示字符的长度
        timer: null, //验证答案错误，错误提示框出现的延时器
        nextShow: false, //是否显示右上角下一题按钮
        peeped: false, //是否偷看了
        redAlert: false, //答不出后显示
        cardImgSrc: '',
        cardDirector: '',
        cardYear: '',
        cardTitle: '',
      };
    },
    mounted() {
      if (this.$store.state.getFlag) {
        this.getMovieList();
      }
      this.resetPanel();
      //this.getImgScr();
    },
    methods: {
      /**
       * 点击投降按钮
       */
      surrenderClick() {
        this.peepShow = false;
        this.verifyShow = false;
        this.surrenderShow = false;
        this.inputShow = false;
        this.tipShow = false;
        this.answerShow = true;
        this.greenCorrect = false;
        this.yellowCorrect = false;
        this.redWrong = false;
        this.doubanShow = true;
        this.nextShow = true;
        this.redAlert = true;
        this.$store.commit('surrenderStatus')
      },
      /**
       * 点击verify后验证答案
       */
      verifyClick() {
        if (this.keyIn === this.standardAnswer) {
          this.peepShow = false;
          this.verifyShow = false;
          this.surrenderShow = false;
          this.inputShow = false;
          this.tipShow = false;
          this.answerShow = true;
          this.greenCorrect = true;

          this.redWrong = false;
          this.doubanShow = true;
          this.nextShow = true;
          if (this.peeped) {
            this.yellowCorrect = true;
            this.greenCorrect = false;
            this.$store.commit('halfRight');
          } else {
            this.yellowCorrect = false;
            this.greenCorrect = true;
            this.$store.commit('allRight');

          }
        } else {
          this.verifyShow = true;
          this.surrenderShow = true;
          this.inputShow = true;
          this.answerShow = false;
          this.greenCorrect = false;
          this.yellowCorrect = false;
          this.redWrong = true;
          this.doubanShow = false;
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.redWrong = false;
            clearTimeout(this.timer);
          }, 1500);
        }
      },
      /**
       * 点击偷看按钮
       */
      peepClick() {
        this.peepShow = false;
        this.verifyShow = true;
        this.surrenderShow = true;
        this.inputShow = true;
        this.tipShow = true;
        this.answerShow = false;
        this.greenCorrect = false;
        this.yellowCorrect = false;
        this.redWrong = false;
        this.doubanShow = false;
        this.nextShow = false;
        this.peeped = true;
        this.redAlert = false; //答不出后显示
        this.$store.commit('peepStatus')
      },
      /**
       * 重设页面
       */
      resetPanel() {
        let n = this.$store.state.currentQuestion;
        this.standardAnswer = this.$store.state.movieList[n].movieName;
        this.keyIn = '';
        this.tipLength = Math.ceil(this.standardAnswer.length * 0.25);
        this.tipMessage = this.standardAnswer.substr(0, this.tipLength);
        this.getInformationCard();
        if (this.$store.state.movieList[n].status == -2) {
          this.peepShow = true, //是否显示偷看按钮
            this.verifyShow = true, //是否显示验证按钮
            this.surrenderShow = true, //是否显示投降按钮
            this.inputShow = true, //是否显示输入框
            this.tipShow = false, //是否显示答案提示
            this.answerShow = false, //是否显示答案
            this.greenCorrect = false, //是否显示完全正确提示框
            this.yellowCorrect = false, //是否显示偷看后正确提示框
            this.redWrong = false, //是否显示错误提示框
            this.doubanShow = false, //是否显示豆瓣卡
            this.nextShow = false, //是否显示右上角下一题按钮
            this.peeped = false, //是否偷看了
            this.redAlert = false //答不出后显示
        } else if (this.$store.state.movieList[n].status == -1) {
          this.peepShow = false;
          this.verifyShow = true;
          this.surrenderShow = true;
          this.inputShow = true;
          this.tipShow = true;
          this.answerShow = false;
          this.greenCorrect = false;
          this.yellowCorrect = false;
          this.redWrong = false;
          this.doubanShow = false;
          this.nextShow = false;
          this.peeped = true;
          this.redAlert = false //答不出后显示
        } else if (this.$store.state.movieList[n].status == 0) {
          this.peepShow = false;
          this.verifyShow = false;
          this.surrenderShow = false;
          this.inputShow = false;
          this.tipShow = false;
          this.answerShow = true;
          this.greenCorrect = false;
          this.yellowCorrect = false;
          this.redWrong = false;
          this.doubanShow = true;
          this.nextShow = true;
          this.redAlert = true
        } else if (this.$store.state.movieList[n].status == 1) {
          this.peepShow = false;
          this.verifyShow = false;
          this.surrenderShow = false;
          this.inputShow = false;
          this.tipShow = false;
          this.answerShow = true;
          this.yellowCorrect = true, //是否显示偷看后正确提示框
            this.greenCorrect = false;
          this.redWrong = false;
          this.doubanShow = true;
          this.nextShow = true;
          this.yellowCorrect = true;
          this.greenCorrect = false;
          this.redAlert = false //答不出后显示
        } else if (this.$store.state.movieList[n].status == 2) {
          this.peepShow = false;
          this.verifyShow = false;
          this.surrenderShow = false;
          this.inputShow = false;
          this.tipShow = false;
          this.answerShow = true;
          this.yellowCorrect = false, //是否显示偷看后正确提示框
            this.greenCorrect = true;
          this.redWrong = false;
          this.doubanShow = true;
          this.nextShow = true;
          this.yellowCorrect = false;
          this.greenCorrect = true;
        }
      },
      getMovieList() {
        function Moive(id, movieName) {
          this.id = id;
          this.fileName = movieName;
          this.movieName = movieName.substr(0, movieName.indexOf('.'));
          this.status = -2
        };
        for (let i in this.$store.state.movieJson) {
          let movieComponent = new Moive(this.$store.state.movieJson[i], i);
          this.$store.commit('addObject', movieComponent)
        };
        this.$store.commit('setGetFlag');
      },
      getImgSrc() {
        let suffix = this.$store.state.movieList[this.$store.state.currentQuestion].fileName;
        let imgSrc = '../static/noName/';
        return imgSrc + suffix
      },
      getOriginImg() {
        let suffix = this.$store.state.movieList[this.$store.state.currentQuestion].fileName;
        let imgSrc = '../static/original/';
        return imgSrc + suffix
      },
      getInformationCard() {
        let _this = this;
        this.$axios({
          methods: 'GET',
          url: '/apis/v2/movie/subject/' + this.$store.state.movieList[this.$store.state.currentQuestion].id,
        }).then((response) => {
          this.cardImgSrc = response.data.images.small;
          this.cardDirector = response.data.directors[0].name;
          this.cardYear = response.data.year;
          this.cardTitle = response.data.title;
        }).catch(err => console.log(err));
      }
    }
  };

</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.7s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }

</style>
