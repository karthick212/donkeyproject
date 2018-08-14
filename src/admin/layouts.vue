<template>
    <div id="Admin"  >
         <Header></Header>
         <sidebar></sidebar>   
        
    </div>
</template>
<script>
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard";
export default {
  name: "AdminLayouts",
  components: {
    Sidebar,
    Header,
    Dashboard
  }
};
</script>
<style>
</style>

