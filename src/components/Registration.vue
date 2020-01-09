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
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="Имя"
              required
            ></v-text-field>
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
            <v-select
            v-model="classNumber"
            :items="items"
            :rules="classNumberRules"
            label="Ваш класс"
            required
          ></v-select>
        </v-col>

         <v-col
          cols="12"
          md="6"
          class="d-flex justify-center"
            >
          <v-btn
            color="error"
            class="mr-4"
            @click="resetForm"
          >
          Очистить
          </v-btn>
         <!-- </v-col> -->
       
          <v-btn
            color="primary"
            class="mr-4"
            :disabled="!valid"
            @click="sendForm"
          >
          Регистрация
          </v-btn>
         </v-col>
        </v-row>
      </v-container>
    </v-form>
</template>

<script>
import { mapActions } from 'vuex'
import{ CLASS } from '../const/const'

export default {
  name: 'Registaration',
    data: () => ({
    items: CLASS.map( cl => cl.CLASS),
    classNumber: null,
    classNumberRules: [
      v => !!v || 'Класс обязателен'
    ],
    valid: false,
    firstname: '',
    password: '',
    nameRules: [
      v => !!v || 'Имя обязательно',
      v => v.length <= 10 || 'Имя не более 10 символов',
    ],
    passwordRules: [
      v => !!v || 'Пароль обязательно',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail обязательно',
      v =>/^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(v) || 'Это не E-mail',
    ],
  }),
  methods: {
    ...mapActions('user', [
      'setRegistration'
    ]),
    resetForm: function () {
      this.firstname = ''
      this.password = ''
      this.email = ''
      this.classNumber = null
      this.$refs.form.reset()
    },
    sendForm: function () {
      this.setRegistration({
        data: {
          displayName: this.firstname,
          email: this.email,
          password: this.password,
          classNumber: CLASS.find(i => i.CLASS === this.classNumber).CLASS_NUMBER
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>