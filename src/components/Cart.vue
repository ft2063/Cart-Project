<!-- Cart.vue -->
<template>
  <div class="row my-4">
    <div v-if="data.cartItems.length > 0" class="col-md-12">
      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data.cartItems" :key="item.id">
                <td>{{ item.id }}</td>
                <td>
                  <img :src="item.image" width="60" height="60" alt="" class="img-fluid rounded">
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <i class="bi bi-caret-up" @click="data.incrementQ(item)"></i>
                  {{ item.quantity }}
                  <i class="bi bi-caret-down" @click="data.decrementQ(item)"></i>
                </td>
                <td>{{ item.price }}</td>
                <td>{{ item.subtotal }}</td>
                <td>
                  <i @click="data.removeFromCart(item)" class="bi bi-cart-x text-danger fw-bo"></i>
                </td>
              </tr>
              <tr>
                <td colspan="7" class="text-end">
                  <discount></discount>
                </td>
              </tr>
              <tr>
                <th class="text-center" colspan="3">Total</th>
                <td class="text-center" colspan="3">
                  <span class="badge bg-danger rounded-pill">
                    ${{ data.total }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
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
  console.log('Current subtotal:', data.subtotal);

</script>

<style>
  i {
    cursor: pointer;
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
</style>
