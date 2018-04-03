<template>
  
        <nav class="navbar navbar-default">
                <div class="container-fluid">
                  <!-- Brand and toggle get grouped for better mobile display -->
                 <div class="icon-holder ">
                    <router-link to="/"><img src="../assets/home_logo.svg" alt=""></router-link>
                 </div>
              
                  <!-- Collect the nav links, forms, and other content for toggling -->
               <!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
              </nav>
  
</template>

<script>
  export default {
    name: 'SharedNavbar',
    data() {
      return {

      }
    },

  }

</script>

<style>
.icon-holder{
     margin: 10px auto !important;

width: 50px; 
}

</style>
