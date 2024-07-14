<template> 
 <!-- product card component for a shopping cart. The card displays the product's image, name, price, and a button to add the product to the cart -->
  <div class="col-md-6 col-lg-3 mb-3"> <!-- Adjusted column width and margin -->
    <div :class="['card', 'text-center', data.isDarkMode ? 'custom-card-black' : 'custom-card']">
      <img :src="product.image" class="card-img-top custom-img" alt="" srcset="">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <div class="mb-2"> <!-- Increased margin bottom for spacing -->
          <span :class="data.isDarkMode ? 'custom-badge-black' : 'custom-badge'">
            ${{ product.price }}
          </span>
        </div>
        <button 
          @click="data.addToCart(product)"
          :class="data.isDarkMode ? 'btn btn-special-black' : 'btn btn-primary'">
          <i class="bi bi-cart-check"></i>
          Add to cart
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
  padding: 4px 9px; 
  font-size: 0.875rem;
  border-radius: 20px; 
}

.btn-primary {
  background-color: #007bff;
  border: none;
}
.btn-primary:hover {
  background-color: #0056b3;
}

.custom-card-black {
  background-color: #383838 !important;
  color: white !important;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background-color 0.2s;
  border: 1px solid #707070;
  margin-bottom: 15px;
  
}


  



.custom-card-black:hover {
  transform: scale(1.01);
  background-color: #484848 !important;
}

.custom-card-black:focus {
  outline: none;
  border-color: #d0d0d0;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
}

.custom-badge-black {
  background-color: #BB86FC;
  padding: 4px 9px; 
  font-size: 0.875rem;
  border-radius: 20px; 
  color: #383838;
}

.btn-special-black {
  border-color: #BB86FC !important;
  border: none;
  color: white !important;
}

.btn-special-black:hover {
  background-color: #BB86FC !important;
  color: white !important;

}

/* Disabled states */
.custom-card-black.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.custom-card-black.disabled .custom-badge-black {
  background-color: rgba(187, 134, 252, 0.5);
  color: #383838;
}

.btn-special-black.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 991px) {
  .custom-card-black {
    margin-bottom: 10px;
  }
}

@media (max-width: 767px) {
  .custom-card-black {
    margin-bottom: 15px;
  }
}
</style>
