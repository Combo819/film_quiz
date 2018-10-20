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
          <v-layout align-center justify-center row fill-height>
            <v-flex xs12>
              <v-card>
                <v-card-text class="display-1">
                  积分榜
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout align-center justify-center row fill-height>
            <v-flex xs12>
                
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: "scoreboard"
  };

</script>

<style scoped>

</style>
