<template>
  <div class="mb-3">
    <label for="discountCode" class="discount-text form-label">Discount Code</label>
    <div class="input-group">
      <input type="text" class="form-control" id="discountCode" v-model="discountCode">
      <button class="btn btn-outline-primary" type="button" @click="applyDiscount">Apply</button>
    </div>
    
  </div>
</template>
<style>
.discount-text{
  color: black;
}

</style>

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
      data.applyDiscount(validCode.discount); // Trigger the applyDiscount action in useCartStore
      invalidCode.value = false;
    } else {
      toast.error('Invalid code!', { timeout: 2000 });
      invalidCode.value = true;
    }
  };
</script>

<style>
.text-discount {
  color: white;
}

.custom-input {
  background-color: #383838 !important;
  color: white !important;
  border: 1px solid #707070 !important;
}



.custom-input::placeholder {
  color: #bbb;
}

.btn {
  color: #BB86FC !important; /* Primary color */
  border: 1px solid #BB86FC !important;
}

.btn:hover {
  color: white !important;
  background-color: #BB86FC !important; /* Adjusted for AA-level contrast */
}


</style>