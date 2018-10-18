<template>
  <div id="welcome_page">
    <v-app>
      <v-content>
        <v-container fluid fill-height grid-list-sx>
          <v-layout align-center justify-center row fill-height wrap>
            <v-flex xs11 sm10 md9 lg4>
              <v-card>
                <v-img  src='https://i.pinimg.com/564x/3e/bb/36/3ebb364a8ac339d06145d71a7f7090a4.jpg  '></v-img>
              </v-card>
            </v-flex>
             <v-flex xs12 sm12 md12 lg12 xl12>
            </v-flex>
            <v-flex xs12 sm9 md8 lg7 xl7>
              <v-card ><v-btn dark block large color="red darken-1">enter</v-btn></v-card>
            </v-flex>
             <v-flex xs12 sm9 md8 lg7 xl7>
              <v-card ><v-btn dark block large color="red darken-1">enter</v-btn></v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "welcomePage"
};
</script>

<style scoped>
#welcome_page {
}
</style>
