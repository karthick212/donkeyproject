<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  data: function() {
    return {
      checkLogin: false
    };
  }

  // created(){
  //   var currentUrl = window.location.pathname;
  //   if(currentUrl == "/login"){
  //     this.checkLogin = false;
  //   }else{
  //     this.checkLogin = true;
  //   }
  // }
};
</script>

<style >
@import './assets/css/adminlte.css';
@import './assets/css/adminlte.min.css';
@import './assets/font-awesome/css/font-awesome.min.css';
@import './assets/font-awesome/css/font-awesome.css';
@import './assets/select2/select2.min.css';
@import './assets/select2/select2.css';
@import 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css';
</style>
