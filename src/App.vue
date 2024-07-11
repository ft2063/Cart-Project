
<template>
<div class="app-container">
<Header />
  <div class="container">
    
    <router-view></router-view>
  </div>
</div>
  
</template>

<script setup>
  import Header from './components/Header.vue';
</script>


<style scoped>
.app-container {
  background-color: #121212;
  color: white; /* Ensure text is visible */
  min-height: 100vh; /* Ensure it covers the full viewport height */
  width: 100vw; /* Full width of the viewport */
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

</style>
