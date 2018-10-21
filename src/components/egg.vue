<template>
    <div id="egg">
      <v-app>
        <v-toolbar app>
          <v-btn color="blue lighten-2" dark depressed round @click="$store.commit('lastQuiz');resetPanel();" :to="{name:'scoreboard'}">
            <v-icon dark>arrow_back_ios</v-icon>积分榜
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue lighten-2" dark depressed round v-show="nextShow" @click="$store.commit('nextQuiz');resetPanel();">
            主页 <v-icon dark>arrow_forward_ios</v-icon>
          </v-btn>
        </v-toolbar>
        <v-content>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex xs12>
                <p class="text-xs-center display-1 cyan--text">彩蛋（二选一）</p>
              </v-flex>
              <v-flex xs12 sm12 md6 lg4>
                <v-img  src='./static/cover/eggImg.png'> </v-img>
              </v-flex>
              <v-flex xs12 sm12 md6 lg8>
                <v-container fluid grid-list-lg>
                  <v-layout align-center justify-space-around column fill-height>
                    <transition name="fade">
                      <v-flex xs6 >
                        <v-alert color="green lighten-2" type="success" transition="scale-transition" :value='prize'
                          outline>对了！</v-alert>
                      </v-flex>
                    </transition>
                    <transition name="fade">
                      <v-flex xs6>
                        <v-alert color="red darken-1" type="success" transition="scale-transition" :value="redWrong"
                          outline icon='error'>错误！</v-alert>
                      </v-flex>
                    </transition>
                    <v-flex xs6 v-if = 'typeinBar'>
                      <v-text-field v-model="keyIn"></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <transition name="fade">
                        <v-btn depressed round dark color="blue lighten-2" large  @click="verifyClick" v-if = 'verifyShow'>verify</v-btn>
                      </transition>
                    </v-flex>
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
      name: "egg",
      data() {
        return {
            redWrong:false,
            prize:false,
            typeinBar:true,
            verifyShow:true
        };
      },
      mounted() {

      },
      methods: {
        verifyClick(){
        if (this.keyIn.toLowerCase() === 'the man who changed china') {
            this.prize = true;
            this.typeinBar = false;
            this.verifyShow = false;
        } else {
          clearTimeout(this.timer);
          this.redWrong = true
          this.timer = setTimeout(() => {
            this.redWrong = false;
            clearTimeout(this.timer);
          }, 1500);
        }
        }
      }
    }
  </script>
  
  <style scoped>

  </style>
  