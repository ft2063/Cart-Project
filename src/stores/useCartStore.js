// stores/useCartStore.js
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { useToast } from "vue-toastification";
import { products } from './products.js'; 

const toast = useToast();

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: products,
    cartItems: useLocalStorage('cartItems', []), // Use local storage for cart items
    isDarkMode: useLocalStorage('isDarkMode', false), // Use local storage for theme
  }),
  getters: {
    countCartItems(state) {
      return state.cartItems.length;
    },
    subtotal(state) {
      return (itemId) => {
        const item = state.cartItems.find(product => product.id === itemId);
        return item ? item.price * item.quantity : 0;
      };
    },
    total(state) {
      return state.cartItems.reduce((acc, item) => acc + item.subtotal, 0);
    }
  },
  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        let updatedItem = { ...this.cartItems[index] }; // Create a copy
        updatedItem.quantity += 1;
        updatedItem.subtotal = updatedItem.price * updatedItem.quantity;
        this.cartItems.splice(index, 1, updatedItem); // Replace item at index
        toast.success("Item was updated!", {
          timeout: 2000
        });
      } else {
        // If item does not exist, add to cart
        item.quantity = 1;
        item.subtotal = item.price * item.quantity;
        this.cartItems.push(item);
        toast.success("Item was added to cart!", {
          timeout: 2000
        });
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        this.cartItems[index].subtotal = this.cartItems[index].price * this.cartItems[index].quantity;
        toast.success("Item was updated!", {
          timeout: 2000
        });
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex(product => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(product => product.id !== item.id);
        } else {
          this.cartItems[index].subtotal = this.cartItems[index].price * this.cartItems[index].quantity;
        }
        toast.success("Item was updated!", {
          timeout: 2000
        });
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(product => product.id !== item.id);
      toast.success("Item was removed", {
        timeout: 2000
      });
    },
    applyDiscount(discountPercentage) {
      const discountFactor = 1 - discountPercentage / 100;
      this.cartItems.forEach(item => {
        item.subtotal = item.price * item.quantity * discountFactor;
        console.log(item.subtotal);
      });
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    }
  },
});
