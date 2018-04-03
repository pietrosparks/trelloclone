<template>

  <div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div v-if="!boardIsOpen">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="board initial" @click="openBoard()">
                    <span class="heading-create">Create a new board...</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div v-else>
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="board">
                    <div class="upper">

                      <span class="heading-create">Creating a board</span>
                      <p @click="openBoard()" class="pull-right">
                        <icon name="times-circle"></icon>
                      </p>

                    </div>
                    <div class="separtor-line"></div>

                    <div class="lower">
                      <p>What shall we call this board</p>
                      <div>
                        <input type="text" placeholder="Enter text" v-model="newListName">
                      </div>

                      <div class="button-holders">
                        <button class="btn btn-danger">Cancel</button>
                        <button class="btn btn-default" @click="createList()">Create</button>
                      </div>

                    </div>
                  </div>
                </div>



              </div>
            </div>


          </div>

        </div>

        <div class="col-md-4" v-if='hasTodos' v-for="todos in returnTodos">
          <div class="board unclicked" @click="openTodo(todos)">
            <span class="heading-create">{{todos.name}}</span>
          </div>
        </div>

      </div>
    </div>




  </div>
</template>

<script>



  export default {

    name: 'Board',
    data() {
      return {
        boardIsOpen: false,
        newListName: '',
        todosArray: this.$store.state.todoLists

      }
    },

    methods: {
      openBoard() {
        this.boardIsOpen = !this.boardIsOpen
      },

      createList() {
        let newList = {
          name: this.newListName,
          id: this.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
          todoLists: []
        }

        var getStorage = JSON.parse(localStorage.getItem('storage'));
        var parsedStorage = getStorage.lists;

        parsedStorage.push(newList);
        localStorage.setItem('storage', JSON.stringify(getStorage))
        console.log(parsedStorage, "hery")
        this.$store.commit('assignTodoState', parsedStorage)

        this.newListName = "";

      },

      randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
      },

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
      openTodo(todo){

        this.$store.commit('selectedTodo', todo);
        this.$router.push({
            path: `/${todo.id}`,
        })
      }

    },
    computed: {

      hasTodos() {

        var getStorage = localStorage.getItem('storage');
        var parsedStorage = JSON.parse(getStorage).lists;
        if (parsedStorage.length > 0) return true
        else return false;
      },
      returnTodos() {
        return this.$store.state.todoLists
      }




    },

    created() {

      this.grabInfo();


    },
    components:{
<<<<<<< HEAD
     
=======
        
>>>>>>> c97b33d598976dbcc2a7f901ac4396b6324125b1
    }

    




  }

</script>

<style scoped>
  .board {
    background-color: teal;
    padding: 20px;
    border-radius: 10px;
    color: white
  }

  .board.unclicked {
    height: 150px;
    margin: 10px;

  }

  .board.initial{
   
    height: 150px;
    margin: 10px 20px 10px -5px;
    line-height: 100px;
 
  }
 

  .board.unclicked {
    line-height: 100px;

  }


  .board .heading-create {
    font-size: 24px;

  }

  .button-holders {
    padding: 10px;
  }

  .button-holders button {
    margin: 15px;
  }

  .lower input {
    height: 40px;
    border-radius: 5px;
    width: 70%;
    padding: 10px;
    margin: 10px;
    color: teal;

  }

  .lower p {
    margin: 10px;
  }

  .upper p {
    display: inline;
  }

</style>
