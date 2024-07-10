<!-- Discount.vue -->
<template>
  <div class="mb-3">
    <label for="discountCode" class="form-label">Discount Code</label>
    <div class="input-group">
      <input type="text" class="form-control" id="discountCode" v-model="discountCode">
      <button class="btn btn-outline-primary" type="button" @click="applyDiscount">Apply</button>
    </div>
    
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useToast } from 'vue-toastification';
  import { useCartStore } from '../stores/useCartStore';

  const data = useCartStore();
  const toast = useToast();
  const discountCode = ref('');
  const invalidCode = ref(false);

  const applyDiscount = () => {
    const discountCodes = [
      { code: 'SUMMER2024', discount: 10 },
      { code: 'SAVE25', discount: 25 }
      // Add more discount codes as needed
    ];

    const validCode = discountCodes.find(code => code.code === discountCode.value);

     if (validCode) {
      console.log('Discount code applied:', validCode);
      toast.success('Discount applied!', { timeout: 2000 });
      data.applyDiscount(validCode.discount);
      console.log(`Item ${item.id} subtotal after discount:`, item.subtotal);
      invalidCode.value = false;
    } else {
    toast.error('Invalid code!', { timeout: 2000 });
      invalidCode.value = true;
    }
  };
</script>
