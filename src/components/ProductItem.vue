<template>
    <div class="col-md-4 mb-2">
        <div class="card custom-card text-center">
            <img :src="product.image" class="card-img-top custom-img" alt="" srcset="">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p>
                    <span class="badge custom-badge">
                        ${{product.price}}
                    </span>
                </p>
                <button 
                    @click="data.addToCart(product)"
                    class="btn btn-primary">
                    <i class="bi bi-cart-check">
                        Add to cart
                    </i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useCartStore } from '../stores/useCartStore';

    const data = useCartStore();

    const props = defineProps({
        product: { 
            type: Object,
            required: true
        }
    });
</script>

<style>
.custom-card {
    
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    transition: transform 0.2s;
}
.custom-card:hover {
    transform: scale(1.01);
}

.custom-badge {
    background-color: #28a745;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 50px;
}
.btn-primary {
    background-color: #007bff;
    border: none;
}
.btn-primary:hover {
    background-color: #0056b3;
}
</style>
