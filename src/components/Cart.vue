<template>
  <div class="row my-4">
    <div v-if="data.cartItems.length > 0" class="col-md-12">
      <div class="card">
        <div class="card-body">
          <div v-for="item in data.cartItems" :key="item.id" class="cart-item mb-3">
            <div class="cart-item-left">
              <img :src="item.image" width="60" height="60" alt="" class="img-fluid rounded cart-item-image">
            </div>
            <div class="cart-item-right w-100">
              <div class="d-flex align-items-center justify-content-between">
                <div class="item-name">
                  <h5 class="card-title mb-0">{{ item.name }}</h5>
                </div>
                <div class="d-flex align-items-center ml-auto">
                  <span class="quantity-controls me-3">
                    <i class="bi bi-caret-up" @click="data.incrementQ(item)"></i>
                    <span class="quantity">{{ item.quantity }}</span>
                    <i class="bi bi-caret-down" @click="data.decrementQ(item)"></i>
                  </span>
                  <span class="badge bg-danger rounded-pill price-badge me-3">
                    ${{ item.price }}
                  </span>
                  <span class="subtotal-badge me-3">
                    Subtotal: ${{ item.subtotal }}
                  </span>
                  <i @click="data.removeFromCart(item)" class="bi bi-cart-x text-danger fw-bold remove-icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div v-if="data.cartItems.length > 0" class="text-end total-text mt-4">
            <discount></discount>
            <h5>Total: ${{ data.total }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="card text-center p-5 empty-cart-card">
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
    background-color: #383838;
    color: white;
  }

  .cart-item {
    display: flex;
    align-items: center;
    border: 1px solid #707070;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    background-color: #383838;
    color: white;
  }

  .cart-item:hover {
    border-color: #d0d0d0;
    transform: scale(1.007);
    background-color: #484848 !important; /* Slightly brighter color on hover */
  }

  .cart-item:focus {
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
    background-color: #BB86FC; /* Purple color for price badge */
    color: #383838; /* Text color on price badge */
    margin-right: 10px; /* Adjust spacing as needed */
  }

  .subtotal-badge {
    color: #BB86FC; /* Purple color for subtotal */
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

  .empty-cart-card img {
    max-width: 200px;
    margin-top: 20px;
  }

  .total-text{
    color: #BB86FC
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
</style>
