<template>
<div class="navbar-owner">
    <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Sadaf8 Shop</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link active" aria-current="page" to="/">
                        <i class="b bi-house"></i> Home
                    </router-link>
                    <router-link class="nav-link" to="/cart">
                        <i class="b bi-cart-check"></i> Cart ({{data.countCartItems}})
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>

<script setup>
import { useCartStore } from '../stores/useCartStore';

const data = useCartStore();
</script>

<style scoped>
.custom-navbar {
    background-color: #383838;
}

.nav-link {
    color: white; /* Ensure the links are visible against the dark background */
}

.navbar-brand, .navbar-toggler-icon {
    color: white; /* Ensure the brand and toggler icon are visible */
}

/* Optional: Style the navbar-toggler button */
.navbar-toggler {
    border-color: white;
}

.navbar-toggler:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>
