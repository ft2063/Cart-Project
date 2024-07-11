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



.custom-card-black {
    background-color: #383838 !important; /* Surface color */
    color: white !important; /* Content on Surface color */
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, background-color 0.2s; /* Add transition for background-color */
    border: 1px solid #707070; /* Gray border slightly lighter than card color */
    margin-bottom: 15px; /* Adjusted margin for spacing between cards */
}

.custom-card-black:hover {
    transform: scale(1.01);
    background-color: #484848 !important; /* Slightly brighter color on hover */
}

.custom-card-black:focus {
    outline: none; /* Remove default focus outline */
    border-color: #d0d0d0; /* Lighter gray border for focus state */
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3); /* White border for focus state */
}

.custom-badge-black {
    background-color: #BB86FC; /* Primary color */
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 50px;
    color: #383838; /* Content on Primary color */
}

.btn-special-black {
    border-color: #BB86FC !important; /* Primary color */
    border: none;
    color:white ;
}

.btn-special-black:hover {
    background-color: ##BB86FC  ; /* Adjusted for AA-level contrast */
}

/* Disabled states */
.custom-card-black.disabled {
    opacity: 0.5; /* Example: Reducing opacity for disabled state */
    pointer-events: none; /* Example: Disable pointer events */
}

/* Additional styles for disabled state elements */
.custom-card-black.disabled .custom-badge-black {
    background-color: rgba(187, 134, 252, 0.5); /* Adjusted for disabled state */
    color: #383838; /* Adjusted content color for disabled state */
}

.btn-special-black.disabled {
    opacity: 0.5; /* Example: Reducing opacity for disabled state */
    pointer-events: none; /* Example: Disable pointer events */
}

@media (max-width: 991px) {
    .custom-card-black {
        margin-bottom: 10px; /* Adjusted margin for spacing on medium screens */
    }
}

@media (max-width: 767px) {
    .custom-card-black {
        margin-bottom: 15px; /* Adjusted margin for spacing on smaller screens */
    }
}
</style>

</style>
