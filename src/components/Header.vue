<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Sadaf8 Shop</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link class="nav-link active" aria-current="page" to="/">
                    <i class="b bi-house"></i> Home</router-link>
                <router-link class="nav-link" to="/cart"><i class="b bi-cart-check"></i> 
                Cart ({{data.countCartItems}})</router-link>
                
            </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import {useCartStore} from '../stores/useCartStore';

    const data = useCartStore();
</script>

<style>

</style>