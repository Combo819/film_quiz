<template>
  <div id="quiz_page">
    <v-app>
      <v-toolbar app>
        <v-btn color="blue lighten-2" dark depressed round>
          <v-icon dark>arrow_back_ios</v-icon>上一题
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue lighten-2" dark depressed round v-show="nextShow">
          下一题 <v-icon dark>arrow_forward_ios</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12>
              <p class="text-xs-center display-1 cyan--text">1/50</p>
            </v-flex>
            <v-flex xs12>
              <v-img src='https://i.pinimg.com/474x/84/59/2a/84592ac8793f46ed53d89ebb747a8fad--kevin-spacey-seven-david-fincher.jpg'></v-img>
            </v-flex>
            <v-flex xs12>
              <v-container fluid grid-list-lg>
                <v-layout align-center justify-space-around column fill-height>
                  <transition name="fade">
                    <v-flex xs6 v-show="tipShow">
                      <p class="headline blue-grey--text font-weight-medium">开头2个字为：{{tipMessage}}</p>
                    </v-flex>
                  </transition>
                  <transition name="fade">
                    <v-flex xs6 v-show="answerShow">
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
                        outline>对了！</v-alert>
                    </v-flex>
                  </transition>
                  <transition name="fade">
                    <v-flex xs6>
                      <v-alert :value="redWrong" color="red darken-1" type="success" transition="scale-transition"
                        outline icon='error'>错误！</v-alert>
                    </v-flex>
                  </transition>
                  <v-flex xs6>
                    <v-text-field v-model="keyIn" v-show="inputShow"></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <transition name="fade">
                      <v-btn depressed round dark color="blue lighten-2" large v-show="verifyShow" @click="verifyClick">verify</v-btn>
                    </transition>
                  </v-flex>
                  <transition name="fade">
                    <v-flex xs6>
                      <v-btn depressed round dark color="orange lighten-2" large v-show="peepShow" @click="peepClick">peep</v-btn>
                    </v-flex>
                  </transition>
                  <v-flex xs6>
                    <transition name="fade">
                      <v-btn depressed round dark color="red lighten-2" large @click="surrenderClick" v-show="surrenderShow">surrender</v-btn>
                    </transition>
                  </v-flex>
                  <transition name="fade">
                    <v-flex xs12>
                      <v-card color="grey lighten-4" class="gray--text pa-2" width="300px" v-show="doubanShow">
                        <v-layout>
                          <v-flex xs5>
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></v-img>
                          </v-flex>
                          <v-flex xs7>
                            <v-card-title primary-title class="py0">
                              <div>
                                <div class="headline">大冒险家</div>
                                <div>导演：刘德华</div>
                                <div>年份：1996</div>
                              </div>
                            </v-card-title>
                          </v-flex>
                        </v-layout>
                        <v-divider light></v-divider>
                        <v-card-actions class="pa-3">
                          <v-spacer></v-spacer>
                          <v-btn depressed round dark color="teal lighten-3">转到豆瓣</v-btn>
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
      redWrong: false,   //是否显示错误提示框
      doubanShow: false, //是否显示豆瓣卡
      keyIn: "", //输入内容绑定
      standardAnswer: "标准答案",  //标准答案
      tipMessage: '提示信息',
      timer: null,  //验证答案错误，错误提示框出现的延时器
      nextShow: false, //是否显示右上角下一题按钮
      peeped: false  //是否偷看了
    };
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
        } else {
          this.yellowCorrect = false;
          this.greenCorrect = true;
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

#quiz_page {
}
</style>
