<template>
<div>
  <v-row>
    <v-col class="col-9 ml-auto mr-auto pb-0">
      <v-sheet
        class="d-flex justify-center text-capitalize mr-auto ml-auto pa-1"
        :width="'100%'"
        :height="'auto'"
        :color="'white'"
        :elevation="1"
        :tile="true"
        >
        <p class="mb-auto mt-auto mr-10">Предмет:&nbsp;<strong>{{getSelectedSubject.subject}}</strong></p>
        <p class="mb-auto mt-auto">Класс:&nbsp;<strong>{{selectedClass}}</strong></p>
      </v-sheet>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="col-9 ml-auto mr-auto">
      <v-expansion-panels 
        focusable
        class="mb-2">
        <v-expansion-panel>
          <v-expansion-panel-header disable-icon-rotate>
             <p class="mb-auto mt-auto mr-10 text-right">Тема:&nbsp;<strong>{{getSelectedCategory.title}}</strong></p>
             <p class="mb-auto mt-auto text-left">Описание:&nbsp;<strong>{{getSelectedCategory.description}}</strong></p>
            <template v-slot:actions>
              <v-icon color="teal">mdi-information</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="d-flex justify-center pa-4">
              <p class="mb-auto mt-auto mr-10">Решено:&nbsp;<strong>{{getSolutionTasks.length}}</strong> задач</p>
              <p class="mb-auto mt-auto"> Подсмотренно решений:&nbsp;<strong>{{getReceivedAnswers.length}}</strong></p>
            </div>
        <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header 
            class="font-weight-medium">
              Все задачи в этой теме
            <template v-slot:actions>
              <v-icon>$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul class="pt-2 pb-2">
              <v-hover v-slot:default="{ hover }">
              <li v-for="item in allTasks"
                  :class="{'font-weight-bold font-italic': hover}"
                  :key="item.taskId"
                  class="d-inline-block font-weight-medium task_number mr-2"
                  @click="selectTask(item.taskId)"
              >
                {{item.taskNumber}}
              </li>
              </v-hover>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-header
            class="font-weight-medium"
            disable-icon-rotate>
              Решенные задачи в этой теме
            <template v-slot:actions>
              <v-icon color="teal">mdi-check</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-header
            class="font-weight-medium"
            disable-icon-rotate>
            Подсмотренные решения задач
            <template v-slot:actions>
              <v-icon color="error">mdi-alert-circle</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
  <v-row class="instruction">
    <v-col class="col-9 ma-auto text-justify">
        <div v-if="getAllTaskCategory.length">
          <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header
              disable-icon-rotate
              class="font-weight-thin">
                Инструкция по решению задач
              <template v-slot:actions>
                <v-icon color="teal">mdi-help</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
             <p class="mb-0" v-html="INSTRUCTION"/>
            </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
        </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="d-flex flex-column align-center justify-center col-9 ma-auto">
        <p class="mb-2"><strong>Задача №1</strong></p>
        <p class="mb-2"><strong>Условие:</strong></p>
        <v-sheet
        :width="'80%'"
        :height="'200'"
        :color="'white'"
        :elevation="10"
        :tile="false"
        class="mb-2"
        >
          <p class="pa-4 text-justify mb-0">Ежик от страха пытается съе[-][-]ться.</p>
        </v-sheet>
    </v-col>
  </v-row>
  <v-row>
    <v-col
      class="col-9 ml-auto mr-auto">
      <v-sheet
        :width="'100%'"
        :height="'100%'"
        :color="'white'"
        :elevation="2"
        :tile="false"
        class="pl-9 pr-9 pt-3 pb-3"
        >
      <v-text-field
        v-model="answer"
        :rules="answerRules"
        label="Ваш ответ"
        required>
      </v-text-field>
      </v-sheet>
    </v-col>
  </v-row>
  <v-row>
    <v-col 
      class="d-flex justify-center col-9 ml-auto mr-auto">
      <v-btn
        color="primary"
        class="mr-4"
        @click="checkAnswer"
        :disabled="!answer"
      >
      Решил!!!
      </v-btn>
      <v-btn
        color="error"
        class="mr-4"
        @click="receiveanswer"
      >
      Посмотреть ответ
      </v-btn>
      <v-btn
        color="secondary"
        class="mr-4 ml-auto"
        @click="nextTask"
      >
      Следующая
      </v-btn>
    </v-col>
  </v-row>
    <v-col>    
        <div v-if="!getAllTaskCategory.length">
          К сожалению, для этого раздела пока нет задач. Но в ближайщее время они появятся. Мы обязательно сообщим Вам
        </div>
    </v-col>
</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import { CLASS, INSTRUCTION } from '../const/const'

export default {
  name: 'UserSelectTask',
  data() {
    return {
      INSTRUCTION,
      answer: null,
      answerRules: [
      v => !!v || 'Ответ не может быть пустым'
    ],
    }
  },
  computed: {
    ...mapGetters('user', [
      'getUserSelectClass',
      'getSelectedSubject',
      'getSelectedCategory',
      'getAllTaskCategory',
      'getSolutionTasks',
      'getReceivedAnswers'
    ]),
    selectedClass: {
      get () {
        return  CLASS.find(cl => cl.CLASS_NUMBER === this.getUserSelectClass).CLASS
      }
    },
    allTasks: {
      get () {
        return this.getAllTaskCategory.map(item => {
          const { task, taskId, taskNumber, title } = item
          return { task, taskId, taskNumber, title }
        })
      }
    }
  },
  methods: {
    ...mapActions('user', [
      'setSelectedCategory',
      'setAllTaskCategory'
    ]),
    nextTask: function () {
      console.log('NEXT_TASK')
    },
    checkAnswer: function () {
      console.log('CHECK_ANSWER')
    },
    receiveanswer: function () {
      console.log('RECIVE_ANSWER')
    },
    selectTask: function (id) {
      console.log(id)
    }
  }
}
</script>
<style lang="scss" scoped>
.instruction {
  margin-top: -20px;
}
.task_number {
  cursor: pointer;
  &:hover {
    text-decoration: underline;

  }
}
</style>