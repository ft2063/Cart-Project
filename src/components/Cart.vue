<template>
  <div class="row my-4">
    <div v-if="data.cartItems.length > 0" class="col-md-12">
      <div :class="['card', data.isDarkMode ? 'card-black' : '']">
        <div class="card-body">
          <div v-for="item in data.cartItems" :key="item.id" :class="['cart-item', data.isDarkMode ? 'cart-item-black' : '']">
            <div :class="['cart-item-left', data.isDarkMode ? 'cart-item-left-black' : '']">
              <img :src="item.image" width="60" height="60" alt="" class="img-fluid rounded cart-item-image">
            </div>
            <div :class="['cart-item-right w-100', data.isDarkMode ? 'cart-item-right-black' : '']">
              <div class="d-flex align-items-center justify-content-between">
                <div :class="['item-name', data.isDarkMode ? 'item-name-black' : '']">
                  <h5 :class="['card-title mb-0', data.isDarkMode ? 'card-title-black' : '']">{{ item.name }}</h5>
                </div>
                <div class="d-flex align-items-center ml-auto">
                  <span :class="['quantity-controls me-3', data.isDarkMode ? 'quantity-controls-black' : '']">
                    <i class="bi bi-caret-up" @click="data.incrementQ(item)"></i>
                    <span class="quantity">{{ item.quantity }}</span>
                    <i class="bi bi-caret-down" @click="data.decrementQ(item)"></i>
                  </span>
                  <!-- Show price and price badge on all screens -->
                  <span :class="['badge rounded-pill price-badge me-3', data.isDarkMode ? 'price-badge-black' : '']">
                    ${{ item.price }}
                  </span>
                  <span :class="['subtotal-badge me-3', data.isDarkMode ? 'subtotal-badge-black' : '', isMobile ? 'd-none' : '']">
                    Subtotal: ${{ item.subtotal }}
                  </span>
                  <i @click="data.removeFromCart(item)" :class="['bi bi-cart-x text-danger fw-bold remove-icon', data.isDarkMode ? 'remove-icon-black' : '']"></i>
                </div>
              </div>
            </div>
          </div>
          <div v-if="data.cartItems.length > 0" :class="['text-end total-text mt-4', data.isDarkMode ? 'total-text-black' : '']">
            <discount></discount>
            <h5>Total: ${{ data.total }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div v-else :class="['card text-center p-5 empty-cart-card', data.isDarkMode ? 'empty-cart-card-black' : '']">
      <div class="card-body">
        <h5 class="card-title">Your Cart is Empty!</h5>
        <p class="card-text mb-4">
          Looks like there's nothing here. Why not <router-link to="/">go back to the homepage</router-link> and add some items?
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useCartStore } from '../stores/useCartStore';
  import Discount from './Discount.vue';

  const data = useCartStore();
</script>

<style scoped>
  .card {
   
  }

  .cart-item {
    display: flex;
    border-radius: 15px;
    transition: transform 0.2s;
    align-items: center;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    
   
  }

  .cart-item:hover {
    
    transform: scale(1.007);
    
  }

  .cart-item:focus {
    border-radius: 8px;
    outline: none; /* Remove default focus outline */
    border-color: #d0d0d0; /* Lighter gray border for focus state */
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3); /* White border for focus state */
}

  .cart-item-left {
    flex: 0 0 60px; /* Fixed width for image */
  }

  .cart-item-right {
    flex-grow: 1;
    margin-left: 15px; /* Space between image and details */
  }

  .cart-item-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .card-title {
    margin-bottom: 0.5rem;
  }

  .item-name {
    width: 30%; /* Fixed width for item name */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 10px; /* Adjust spacing as needed */
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    margin-right: 10px; /* Adjust spacing as needed */
  }

  .quantity-controls i {
    cursor: pointer;
    margin: 0 5px;
  }

  .price-badge {
    border: 1px solid #007bff;
    color: #007bff;
    margin-right: 10px; /* Adjust spacing as needed */
  }

 
  .remove-icon {
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: 10px; /* Adjust spacing as needed */
  }

  .empty-cart-card {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background-color: #f8fafc;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .empty-cart-card:hover {
    
    transform: scale(1.007);
    
  }

  .empty-cart-card:focus {
    border-radius: 8px;
    outline: none; /* Remove default focus outline */
    border-color: #d0d0d0; /* Lighter gray border for focus state */
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3); /* White border for focus state */
}

  .empty-cart-card img {
    max-width: 200px;
    margin-top: 20px;
  }

  .total-text{
    color: #007bff;
  }

  /* Adjustments for mobile */
  @media (max-width: 768px) {
    .cart-item {
      flex-direction: column;
      align-items: flex-start;
    }

    .cart-item-image {
      margin-bottom: 10px;
    }

    .cart-item-right {
      margin-left: 0;
      margin-top: 10px; /* Space between details and controls */
    }

    .item-name {
      width: 100%; /* Full width for item name on mobile */
      margin-bottom: 5px; /* Adjust spacing as needed */
    }
  }




  .card-black{
    background-color: #383838;
    color: white;
  }

  .cart-item-black {
    display: flex;
    align-items: center;
    border: 1px solid #707070;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    background-color: #383838;
    color: white;
  }

  .cart-item-black:hover {
    border-color: #d0d0d0;
    transform: scale(1.007);
    background-color: #484848 !important; /* Slightly brighter color on hover */
  }

  .cart-item-black:focus {
    outline: none; /* Remove default focus outline */
    border-color: #d0d0d0; /* Lighter gray border for focus state */
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3); /* White border for focus state */
}

  .cart-item-left-black {
    flex: 0 0 60px; /* Fixed width for image */
  }

  .cart-item-right-black {
    flex-grow: 1;
    margin-left: 15px; /* Space between image and details */
  }

  .cart-item-image-black {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .card-title-black {
    margin-bottom: 0.5rem;
  }

  .item-name-black {
    width: 30%; /* Fixed width for item name */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 10px; /* Adjust spacing as needed */
  }

  .quantity-controls-black {
    display: flex;
    align-items: center;
    margin-right: 10px; /* Adjust spacing as needed */
  }

  .quantity-controls-black i {
    cursor: pointer;
    margin: 0 5px;
  }

  .price-badge-black {
    border: none;
    background-color: #BB86FC; /* Purple color for price badge */
    color: #383838; /* Text color on price badge */
    margin-right: 10px; /* Adjust spacing as needed */
  }

  .subtotal-badge-black {
    color: #BB86FC; /* Purple color for subtotal */
  }

  .remove-icon-black {
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: 10px; /* Adjust spacing as needed */
  }

  .empty-cart-card-black {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background-color: #383838;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    color: white;

  }
  .empty-cart-card-black:hover {
    border-color: #d0d0d0;
    transform: scale(1.007);
    background-color: #484848 !important; /* Slightly brighter color on hover */
  }

  .empty-cart-card-black img {
    max-width: 200px;
    margin-top: 20px;
  }
  .empty-cart-card-black a {
    color: #BB86FC;
  }

  .total-text-black{
    color: #BB86FC;
  }

  /* Adjustments for mobile */
  @media (max-width: 768px) {
    .cart-item-black {
      flex-direction: column;
      align-items: flex-start;
    }

    .cart-item-image-black {
      margin-bottom: 10px;
    }

    .cart-item-right-black {
      margin-left: 0;
      margin-top: 10px; /* Space between details and controls */
    }

    .item-name-black {
      width: 100%; 
      margin-bottom: 5px; 
    }

    @media (max-width: 768px) {
    .cart-item-right {
      margin-left: 0; /* Remove margin for better alignment */
    }

    
    .subtotal-badge {
      display: none; /* Hide price badge, subtotal badge, and remove icon on mobile */
    }
  }
  }


</style>
