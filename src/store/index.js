import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form_tasks: {
      title: '',
      nb_hours_forecast: '',
      nb_hours_real: '',
      task_developers: '',
      task_type: ''
    },
    tasks: 0,
    developers: 0,
    taskStatus: 0,
    taskType: 0
  },
  mutations: {
    SET_DEVELOPERS(state, posts) {
      state.developers = posts
    },
    SET_TASKSTATUS(state, posts) {
      state.taskStatus = posts
    },
    SET_TASKS(state, posts) {
      state.tasks = posts
    },
    SET_TASKSTYPE(state, posts) {
      state.taskType = posts
    }
  },
  actions: {
    getDevelopers({ commit }) {
      axios.get('http://localhost:8080/developers')
        .then(response => {
          commit('SET_DEVELOPERS', response.data)
        })
    },
    getTaskStatus({ commit }) {
      axios.get('http://localhost:8080/task_status')
        .then(response => {
          commit('SET_TASKSTATUS', response.data)
        })
    },
    getTasks({ commit }) {
      axios.get('http://localhost:8080/tasks')
        .then(response => {
          commit('SET_TASKS', response.data)
        })
    },
    getTaskType({ commit }) {
      axios.get('http://localhost:8080/task_types')
        .then(response => {
          commit('SET_TASKSTYPE', response.data)
        })
    },
    submitUser() {
      axios.post('http://localhost:8080/tasks',this.form_tasks)
    },

  },
  modules: {
  }
})
