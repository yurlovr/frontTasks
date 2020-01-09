<template>
  <div> Привет, Вы зарегистрировались как {{getUser.displayName}}
  <br/>
  Ваш E-mail: {{getUser.email}}, на него вы будете получать уведомления о новых конкурсах, наши новости и многое другое.
  E-mail также является логином для входа.
  <br/>
  Твой Класс: {{ userClass }}. Ты можешь так же выбрать любой доступный класс, но помни, что чем выше класс, тем сложнее задачи.
  Мы рекомендуем начать с класса в котором ты учишься, так как в сташих классах возможно есть задачи на темы и предметы, которые ты еще не проходилю
  <br/>
  Итак, выбери класс из списка ниже и нажми "Продолжить"
  <br/>
  <br/>
  <br/>
  <v-form 
  v-model="valid"
>
    <v-row>

      <v-col
        cols="12"
        md="8"
      >

        <v-select
          v-model="classNumber"
          :items="items"
          :rules="classNumberRules"
          label="Выбери класс"
          required
        ></v-select>

      </v-col>

    <v-col
      cols="12"
      md="6"
      class="d-flex justify-center"
        >
      <v-btn
        :disabled="!valid"
        color="primary"
        class="mr-4"
        @click="nextStep"
      >
      Продолжить
      </v-btn>
    </v-col>

    </v-row>  
  </v-form>



  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { CLASS } from '../const/const'

export default {
  name: 'UserCreated',
  data() {
    return {
      items: CLASS.map( cl => cl.CLASS),
      classNumber: '',
      classNumberRules: [
      v => !!v || 'Класс обязателен'
    ],
    valid: false,
    }
  },
  computed: {
    ...mapGetters('user', [
      'getUser'
    ]),
    userClass: {
      get () {
        return  CLASS.find(cl => cl.CLASS_NUMBER === this.getUser.classNumber).CLASS
      }
    }
  },
  methods: {
    ...mapActions('user', [
      'setUserSelectClass'
    ]),
    nextStep: function () {
      this.setUserSelectClass({
        data:  CLASS.find(cl => cl.CLASS === this.classNumber).CLASS_NUMBER
      })
    }
  }
}
</script>