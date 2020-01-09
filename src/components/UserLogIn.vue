<template>
<v-form 
  v-model="valid"
  ref="form"
>
      <v-container>
        <v-row
          class="justify-center mt-9"
        >
        <v-col
            cols="12"
            md="8"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="8"
          >
        </v-col>
          <v-col
            cols="12"
            md="8"
          >
            <v-text-field
              v-model="password"
              type="password"
              :rules="passwordRules"
              label="Пароль"
              required
            ></v-text-field>
          </v-col>  


         <v-col
          cols="12"
          md="6"
          class="d-flex justify-center"
            >
         <!-- </v-col> -->
       
          <v-btn
            color="primary"
            class="mr-4"
            :disabled="!valid"
            @click="logIn"
          >
          Войти
          </v-btn>
         </v-col>
        </v-row>
      </v-container>
    </v-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UserLogIn',
    data: () => ({
    valid: false,
    password: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail обязательно',
      v => /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(v) || 'Это не E-mail',
    ],
    passwordRules: [
      v => !!v || 'Пароль обязательно',
    ],
  }),
  methods: {
    ...mapActions('user', [
      'setUserLogIn'
    ]),
    logIn: function () {
      this.setUserLogIn({
        data: {
          email: this.email,
          password: this.password,
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>