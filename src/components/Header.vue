<template>
  <nav :class="['navbar', 'navbar-expand-lg', data.isDarkMode ? 'custom-navba-black' : ' bg-body-tertiary']">
    <div class="container-fluid">
      <router-link :class="[data.isDarkMode ? 'navbar-brand-black' : '', 'navbar-brand']" to="/">JBR Electronics</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :class="['nav-link', { 'nav-link-black': data.isDarkMode }]" aria-current="page" to="/">
            <i class="bi bi-house"></i> Home
          </router-link>
          <router-link :class="['nav-link', { 'nav-link-black': data.isDarkMode }]" to="/cart">
            <i class="bi bi-cart-check"></i> Cart ({{ data.countCartItems }})
          </router-link>
        </div>
        <button @click="data.toggleTheme" class="btn btn-outline-secondary ms-auto" :class="{ 'navbar-toggler-black': data.isDarkMode }">
          <i class="bi bi-toggles"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from '../stores/useCartStore';

const data = useCartStore();
</script>

<style scoped>
.custom-navba-black {
  background-color: #383838;
}

.nav-link {
  color: black; /* Default color */
}

.nav-link-black {
  color: white; /* Color when in dark mode */
}

.navbar-brand-black {
  color: white; /* Color for navbar brand when in dark mode */
}

.navbar-toggler-black {
  border-color: white; /* Border color for toggler when in dark mode */
}

.navbar-toggler-black:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Background color on hover in dark mode */
}
</style>
