<template>
  <div> Отлично, Вы выбрали <strong>{{selectedClass}}</strong>
  <br/>
    <div v-if="getUserSelectClass.length">
      Для этого класса у нас доступны следующие предметы:
      <ol>
        <li v-for="item in getUserSelectSubject" :key="item.id">
          {{item.subject}}
        </li>
      </ol>
    </div>
    <div v-else>
      К сожалению, для этого класса пока нет задач. Но в ближайщее время они появятся. Мы обязательно сообщим Вам
    </div>
  <br/>
  Сейчас выбери предмет из списка доступных и нажми кнопку "Продолжить"
  <br/>
  <br/>
  <br/>
  <v-form 
  v-model="valid"
  v-if="items.length"
>
    <v-row>

      <v-col
        cols="12"
        md="8"
      >

        <v-select
          v-model="subject"
          :items="items"
          :rules="subjectRules"
          label="Выбери Предмет"
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
  name: 'UserSelectSubject',
  data() {
    return {
      // items: CLASS.map( cl => cl.CLASS),
      subject: '',
      subjectRules: [
      v => !!v || 'Предмет обязателен'
    ],
    valid: false,
    }
  },
  computed: {
    ...mapGetters('user', [
      'getUserSelectClass',
      'getUserSelectSubject'
    ]),
    selectedClass: {
      get () {
        return  CLASS.find(cl => cl.CLASS_NUMBER === this.getUserSelectClass).CLASS
      }
    },
    items: {
      get () {
        let arr = []
        if (this.getUserSelectSubject.length) {
          this.getUserSelectSubject.forEach(item => {
            arr = arr.concat(item.subject)
          });
        }
        return arr
      }
    }
  },
  methods: {
    ...mapActions('user', [
      'setUserSelectClass',
      'setUserSelectCategory',
      'setSelectedSubject'
    ]),
    nextStep: function () {
      const subjectId = this.getUserSelectSubject.find(item => item.subject === this.subject).id
      this.setSelectedSubject({
        data: {
          subject: this.subject,
          subjectId
        }
      })
      this.setUserSelectCategory({
        data: {
          subjectId,
          classNumber: this.getUserSelectClass
        }
      })
    }
  }
}
</script>