<template>
  <div id="egg">
    <v-app>
      <v-toolbar app>
        <v-btn color="blue lighten-2" dark depressed round :to="{name:'scoreboard'}">
          <v-icon dark>arrow_back_ios</v-icon>积分榜
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue lighten-2" dark depressed round :to="{name:'WelcomePage'}">
          主页 <v-icon dark>arrow_forward_ios</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid grid-list-md>
          <v-layout row wrap align-center justify-space-around>
            <v-flex xs12>
              <p class="text-xs-center display-1 cyan--text">彩蛋（二选一）</p>
            </v-flex>
            <v-flex xs12 sm12 md6 lg6 xl6>
              <v-flex xs12 sm12 md6 lg4>
                <v-img src='./static/cover/eggImg.png'> </v-img>
              </v-flex>
              <v-flex xs12>
                <p class="text-xs-left headline grey--text">请输入这本书的英文名</p>
              </v-flex>
              <v-flex xs12 sm12 md6 lg8>
                <v-container fluid grid-list-lg>
                  <v-layout align-center justify-space-around column fill-height>
                    <transition name="fade">
                      <v-flex xs6>
                        <v-alert color="green lighten-2" type="success" transition="scale-transition" :value='prize1'
                          outline>对了！</v-alert>
                      </v-flex>
                    </transition>
                    <transition name="fade">
                      <v-flex xs6>
                        <v-alert color="red darken-1" type="success" transition="scale-transition" :value="redWrong1"
                          outline icon='error'>错误！</v-alert>
                      </v-flex>
                    </transition>
                    <v-flex xs6 v-if='typeinBar1'>
                      <v-text-field v-model="keyIn1"></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <transition name="fade">
                        <v-btn depressed round dark color="blue lighten-2" large @click="verifyClick1" v-if='verifyShow1' class="title">验证</v-btn>
                      </transition>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-flex>
            <v-flex xs12 sm12 md6 lg6 xl6>
              <v-layout align-center justify-space-around column fill-height></v-layout>
              <v-flex xs12 sm12 md6 lg4>
                <v-img src='./static/cover/xixi.png'> </v-img>
              </v-flex>
              <v-flex xs12>
                <p class="text-xs-left headline grey--text">这个男人来自新疆，请问他的外号</p>
              </v-flex>
              <v-flex xs12 sm12 md6 lg8>
                <v-container fluid grid-list-lg>
                  <v-layout align-center justify-space-around column fill-height>
                    <transition name="fade">
                      <v-flex xs6>
                        <v-alert color="green lighten-2" type="success" transition="scale-transition" :value='prize2'
                          outline>对了！</v-alert>
                      </v-flex>
                    </transition>
                    <transition name="fade">
                      <v-flex xs6>
                        <v-alert color="red darken-1" type="success" transition="scale-transition" :value="redWrong2"
                          outline icon='error'>错误！</v-alert>
                      </v-flex>
                    </transition>
                    <v-flex xs6 v-if='typeinBar2'>
                      <v-text-field v-model="keyIn2"></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <transition name="fade">
                        <v-btn depressed round dark color="blue lighten-2" large @click="verifyClick2" v-if='verifyShow2' class="title">验证</v-btn>
                      </transition>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: "egg",
    data() {
      return {
        redWrong1: false,
        prize1: false,
        typeinBar1: true,
        verifyShow1: true,
        keyIn1: '',
        redWrong2: false,
        prize2: false,
        typeinBar2: true,
        verifyShow2: true,
        keyIn2: '',
      };
    },
    mounted() {

    },
    methods: {
      verifyClick1() {
        if (this.keyIn1.toLowerCase() === 'the man who changed china') {
          this.prize1 = true;
          this.typeinBar1 = false;
          this.verifyShow1 = false;
        } else {
          clearTimeout(this.timer);
          this.redWrong1 = true
          this.timer = setTimeout(() => {
            this.redWrong1 = false;
            clearTimeout(this.timer);
          }, 1500);
        }
      },
      verifyClick2() {
        if (this.keyIn2.toLowerCase() === '高佬') {
          this.prize2 = true;
          this.typeinBar2 = false;
          this.verifyShow2 = false;
        } else {
          clearTimeout(this.timer);
          this.redWrong2 = true
          this.timer = setTimeout(() => {
            this.redWrong2 = false;
            clearTimeout(this.timer);
          }, 1500);
        }
      }
    }
  }

</script>

<style scoped>

</style>
