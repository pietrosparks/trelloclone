<template>
  <div class="Main">
    <div class="container">
      
          <createBoard ></createBoard>
     
    </div>
  </div>
</template>

<script>

  import createBoard from '@/components/Board';
  import {EventBus} from '../main';

export default {
  
  name: 'Main',
  data () {
    return {
     
    }
  },
  methods:{
  
  },
  components:{
    createBoard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
