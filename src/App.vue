<template>
  <div id="app">
    <sharedNavbar></sharedNavbar>
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

    <router-view/>
    <sharedFooter></sharedFooter>
  </div>
</template>

<script>
  import sharedNavbar from '@/components/SharedNavbar'
  import sharedFooter from '@/components/sharedFooter'
  export default {
    name: 'App',
    components: {
      sharedNavbar,
      sharedFooter
    }
  }

</script>

<style>
  #app {

    font-family: 'Lato' !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

</style>
