<template>
  <v-app>
    <v-app-bar app
      color="primary"
      dark
    >
    <v-btn
    v-if="this.$route.name !== 'home'"
        @click="goBack"
        text
      >
        <span class="mr-2">Назад</span>
      </v-btn>

      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="d-lg-none d-xl-flex"
      ></v-app-bar-nav-icon>
      <v-btn
        v-if='!getLoggedIn'
        @click="regNewUser"
        text
        class="d-none d-lg-flex"
      >
        <span class="mr-2">Регистрация</span>
      </v-btn>
      <v-btn
        @click="loggIn"
        text
        class="d-none d-lg-flex"
      >
        <span class="mr-2">{{!getLoggedIn ? 'Войти' : 'Выйти'}}</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld/> -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
     <v-footer app>
    <!-- -->
  </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  // components: {
  //   HelloWorld,
  // },

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('user', [
      'getLoggedIn'
    ])
  },
  methods: {
    ...mapActions('user', [
      'setUserLogOut'
    ]),
    regNewUser: function() {
      this.$router.push('/registration')
    },
    loggIn: function() {
      if (this.getLoggedIn) {
        // выйти
        this.setUserLogOut({
          data: true
        })
      } else {
        // войти
        this.$router.push('/userLogIn')
      }
    },
    goBack: function () {
      this.$router.push('/')
    }
  },
};
</script>
<style lang="scss" scoped>
html {
  overflow-y: hidden;
}
.v-toolbar__title {
  min-width: 75%;
  padding-left: 25%;
  text-align: center;
  &-with_back {
    padding-left: 10%;
  }
}
</style>
