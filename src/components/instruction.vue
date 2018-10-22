<template>
  <div id="instruction">
    <v-app>
      <v-toolbar app fixed>
        <v-btn color="blue lighten-2" dark depressed round :to="{name:'WelcomePage'}">
          <v-icon dark>arrow_back_ios</v-icon>返回主页
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex>
              <v-card class="px-2">
                <v-card-title primary-title class="headline">
                  游戏说明
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  请在答题页面的输入框内输入电影的中文名，仅输入正题，切勿输入代数以及副标题。比如《王的男人2：秘密服务》只需要填写王的男人。<br>点击偷看按钮可偷看部分答案，但是最终得分会减半。<br>再想不出点击投降查看完整答案。
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card class="px-2">
                <v-card-title primary-title class="headline">
                  图片说明
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  本网页中的大部分图片来自网络搜索。少部分来自B站影视区UP主电影最TOP的淘宝店（有水印）。极少部分GV画质的原图被我手动照着重画了。<br>图片只作交流学习，不涉及商用。若有侵权请联系删除。
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card class="px-2">
                <v-card-title primary-title class="headline">
                  此网页与作者
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  因为新学了vue框架，平时也喜欢看电影，所以弄个网页来练练手。此网页用框架vuetify作为UI美化，外加vue-router,vuex和axios等全家桶。查看源码请点击下面github。其他社交网站也求一波关注。
                </v-card-text>
                <v-divider></v-divider>
                <v-card-action>
                  <v-layout align-center justify-space-around row class="pt-3">
                    <v-btn color="blue lighten-3" dark depressed href='https://github.com/Combo819?tab=repositories' target="_blank">github</v-btn>
                    <v-btn color="blue lighten-3" dark depressed href='http://baidu.com' target="_blank">weibo</v-btn>
                    <v-btn color="blue lighten-3" dark depressed href='http://baidu.com' target="_blank">微信</v-btn>
                  </v-layout>
                </v-card-action>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card href='https://combo819.github.io/myPhotoBlog/index.html' target="_blank">
                <v-card-title primary-title class="headline">
                  早前作品
                </v-card-title>
                <v-img aspect-ratio='1' src='https://i.pinimg.com/564x/3e/bb/36/3ebb364a8ac339d06145d71a7f7090a4.jpg '></v-img>
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
    name: "instruction"
  };

</script>

<style scoped>

</style>
