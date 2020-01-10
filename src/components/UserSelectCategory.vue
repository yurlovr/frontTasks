<template>
  <v-row>
    <v-col>
      <div>Итак, выбранный предмет -  <strong>{{getSelectedSubject.subject}}</strong>
      <br/>
        <div v-if="getUserSelectCategory.length">
          Для этого предмета у нас доступны следующие темы:
          <ol>
            <li v-for="item in getUserSelectCategory" :key="item.id">
              <v-row>
                <v-col
                class="d-flex justify-space-around flex-wrap"
                  cols="12"
                  md="8"
                >
                  <strong>Тема: </strong> {{item.title}}
                  <strong>Описание: </strong>{{item.description}}
                  <v-btn
                    color="primary"
                    class="mr-4"
                    @click="nextStep(item)"
                  >
                  Выбрать
                  </v-btn>
                </v-col>
              </v-row>
            </li>
          </ol>
        </div>
        <div v-else>
          К сожалению, для этого предмета пока нет задач. Но в ближайщее время они появятся. Мы обязательно сообщим Вам
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import { CLASS } from '../const/const'

export default {
  name: 'UserSelectCategory',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters('user', [
      'getSelectedSubject',
      'getUserSelectCategory'
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
      'setSelectedCategory',
      'setAllTaskCategory'
    ]),
    nextStep: function (item) {

    this.setSelectedCategory({
      data: item
    })
    this.setAllTaskCategory({
      data: item.id
    })

    }
  }
}
</script>