<template>
  <div :class="['app-container', data.isDarkMode ? 'app-container-black' : '']">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import { useCartStore } from './stores/useCartStore';

const data = useCartStore();
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  overflow: hidden;
}


.app-container-black {
  overflow-y: hidden;
  background-color: #121212;
  color: white;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
