<template>
  <div>
    <div class="container">
      <div class="board" v-if="">
        <h2>{{presentTodo.name}}</h2>
      </div>

      <div>
        <div class="conatainer">
          <div class="row">
            <div class="col-md-4" v-if="presentTodo.todoLists.length>0" v-for="list in presentTodo.todoLists">
              <div>
                <div class="item-added">
                  <div class="upper">

                    <span class="heading-created">
                      {{list.name}}
                    </span>


                  </div>
                  <div class="separtor-line"></div>

                  <div class="lower">



                    <p>Append Steps to complete</p>

                    <div>
                      <input type="text" placeholder="Enter text" v-model="newStepEntry" v-on:keypress.enter="findStep(list)">
                    </div>

                  </div>
                  <div v-if="list.steps.length>0" v-for="steps in list.steps">

                    <div class="straight-line"></div>

                    <div class="step" v-if="steps.archived===false">
                      <span class="step-name">
                        {{steps.name}}
                      </span>
                      <span @click="doneStep(steps)" class="pull-right close-btn">
                        <icon name="check-circle"></icon>
                      </span>
                    </div>

                    <div class='step-else' v-else>
                      <span class="step-name">
                        {{steps.name}}
                      </span>
                      <span @click="doneStep(steps)" class="pull-right close-btn">
                        <icon name="times-circle"></icon>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <span v-if="!addToList">
                <button class="btn addBtn" @click="toggleList()">Add List</button>
              </span>
              <span v-else>
                <div class="item-adder">
                  <div class="upper">

                    <span class="heading-create">
                      <p @click="toggleList()" class="pull-right close-btn">
                        <icon name="times-circle"></icon>
                      </p>
                    </span>

                  </div>
                  <div class="separator-line"></div>

                  <div class="lower">

                    <p>Append to the list</p>
                    <div>
                      <input type="text" placeholder="Enter text" v-model="newListEntry" v-on:keypress.enter="inputNewList()">
                    </div>

                    <!-- <div class="button-holders">
                                                <button class="btn btn-danger">Cancel</button>
                                                <button class="btn btn-default" @click="createList()">Create</button>
                                              </div> -->

                  </div>
                </div>
              </span>


            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Todos',
    data() {
      return {
        presentTodo: null,
        addToList: false,
        newListEntry: '',
        newStepEntry: ''
      }
    },

    methods: {
      grabInfo() {
        var storageInstance = {
          lists: []
        }
        var stringifiedVersion = JSON.stringify(storageInstance)
        if (localStorage.getItem('storage') === null) localStorage.setItem('storage', stringifiedVersion);
        else {

          var getStorage = localStorage.getItem('storage');

          var parsedStorage = JSON.parse(getStorage).lists;
          this.$store.commit('assignTodoState', parsedStorage)
        }
      },


      findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {


            this.$store.commit('selectedTodo', array[i]);
            this.presentTodo = this.$store.state.openedTodoList
            return array[i]
          }
        }
        return null;
      },
      toggleList() {
        this.addToList = !this.addToList;
      },
      randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
      },
      inputNewList() {
        let newList = {
          name: this.newListEntry,
          steps: [],
          list_id: this.randomString('4', '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')

        }

        var getStorage = localStorage.getItem('storage');
        var parsedStorage = JSON.parse(getStorage).lists;

        this.presentTodo.todoLists.push(newList)
        this.commiter()
        this.newListEntry = '';
      },
      findStep(list) {
        let newStep = {
          name: this.newStepEntry,
          archived: false,
          step_id: this.randomString('5', '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
        }

        list.steps.push(newStep);
        this.commiter()
        this.newStepEntry = '';

      },
      doneStep(step) {
        step.archived = !step.archived
        this.commiter();
      },
      commiter() {
        this.$store.commit('selectedTodo', this.presentTodo);

        let storageObj = {
          lists: this.$store.state.todoLists
        }
        localStorage.setItem('storage', JSON.stringify(storageObj));

      },
    },



    created() {
      this.grabInfo()
      this.findObjectByKey(this.$store.state.todoLists, 'id', this.$route.params.id)
    },
    computed: {

      listCheck() {
        return this.$store.state.openedTodoList
      }

      
    }
  }

</script>

<style scoped>
  .board {
    background-color: teal;
    padding: 10px;
    border-radius: 10px;
    color: white;
    margin: 10px;
    
  }

  .item-added {
    background-color: rgb(129, 148, 148);
    padding: 10px;
    border-radius: 10px;
    color: white;
    margin:20px;

  }

  .item-added .heading-created {
    font-size: 24px;
    text-transform: uppercase;
  }

  .straight-line {
    height: 1px;
    width: 75%;
    background-color: white;
    margin: 20px auto
  }

  .step {
    padding: 20px;
    background-color: teal;
    border-radius: 10px;
    width: 90%;
    margin: 10px auto;
  }

  .step-else {
    padding: 20px;
    background-color: gold;
    border-radius: 10px;
    width: 90%;
    margin: 10px auto;
  }

  .step-else .step-name {
    font-size: 18px;
    color: black
  }

  .step .step-name {
    font-size: 18px;
  

  }



  .item-adder {
    background-color: rgb(216, 216, 216);
    padding: 10px;
    border-radius: 10px;
    color: white;
    margin: 20px;

  }

  button.addBtn {
    padding: 20px;
    background-color: rgb(144, 199, 199);
    color: white;
    font-size: 24px;
    margin: 20px;
  }


  .lower input {
    height: 40px;
    border-radius: 5px;
    width: 70%;
    padding: 10px;
    margin: 10px;
    color: teal;
    outline: none;

  }

  .lower p {
    margin: 10px;
  }

  .upper p {
    display: inline;
  }

</style>
