<template>
  <v-row>
    <v-col>
      <div>Предмет: <strong>{{getSelectedSubject.subject}}</strong>
      <br/>
      Класс: <strong>{{selectedClass}}</strong>
      <br/>
      Тема: <strong>{{getSelectedCategory.title}}</strong>
      <br/>
      Описание: <strong>{{getSelectedCategory.description}}</strong>
      Решено: <strong>{{getSolutionTasks.length}}</strong> задач
      Подсмотренно решений: <strong>{{getReceivedAnswers.length}}</strong>
        <div v-if="getAllTaskCategory.length">
          <div>Решите задачу и впишите свой ответ в поле ниже, затем нажмите кнопку "Решил",
            Если Вы не можете решить задачу, нажимайте кнопку "Посмотреть ответ", и вы получите развернутое решение задачи,
            при этом данная задача не будет зачтена в решенные 
          </div>
          <div>
          <strong>Условие:</strong>
          <p>

          </p>
          </div>
         
        </div>
        <div v-else>
          К сожалению, для этого раздела пока нет задач. Но в ближайщее время они появятся. Мы обязательно сообщим Вам
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import { CLASS } from '../const/const'

export default {
  name: 'UserSelectTask',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters('user', [
      'getSelectedSubject',
      'getSelectedCategory',
      'getAllTaskCategory',
      'getSolutionTasks'
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
      console.log(item)
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