import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



const state = {
  todoLists: null,
  
}
const getters = {
  getTodoState: state => {
    return state.todoLists
  },
}
const mutations = {
  assignTodoState(state, resp) {
    state.todoLists = resp
  },
  selectedTodo(state, resp){
      state.openedTodoList = resp
  }
}
const actions = {

}



export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,

})
