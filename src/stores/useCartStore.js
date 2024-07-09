import {defineStore} from "pinia";
import { useToast } from "vue-toastification";
import iphone14 from '../assets/images/iphone-14.png';
import samsungS20 from '../assets/images/samsung-s20.png';
import tvLg from '../assets/images/tv-lg.png';
import oppo14 from '../assets/images/oppo-14.png';

const toast = useToast();


export const useCartStore = defineStore ( 'cart', {
    state: () => ({
        products : [
            {
                id: 1,
                name: 'Iphone 14',
                price: 800,
                image: iphone14,

            },
            {
                id: 2,
                name: 'Samsung s20',
                price: 1200,
                image: samsungS20,

            },
            {
                id: 3,
                name: 'Tv LG',
                price: 300,
                image: tvLg,

            },
            {
                id: 4,
                name: 'Oppo 14',
                price: 500,
                image: oppo14,

            },

        ],
        cartItems: [],
       
    }),
    getters: {
        countCartItems(state){
            return state.cartItems.length
        },
       subtotal(state){
        this.cartItems.forEach(item => {
            item.subtotal = item.price * item.quantity 
          });
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
                this.cartItems.splice(index, 1, updatedItem); // Replace item at index
                toast.success("Item was updated!", {
                    timeout: 2000
                });
            } else {
                // If item does not exist, add to cart
                item.quantity = 1;
                this.cartItems.push(item);
                toast.success("Item was added to cart!", {
                    timeout: 2000
                });
            }
        },
        

        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1){
                this.cartItems[index].quantity +=1;
                toast.success("Item was updated!", {
                    timeout: 2000
                });
            }
            
        },

        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1){
                this.cartItems[index].quantity -=1;
                if(this.cartItems[index].quantity ===0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
                toast.success("Item was updated!", {
                    timeout: 2000
                });
            }
            

        },
        removeFromCart(item){
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            toast.success("Item was removed", {
                timeout: 2000
            });
        },
        applyDiscount(discountPercentage) {
            const discountFactor = 1 - discountPercentage / 100;
            this.cartItems.forEach(item => {
              item.subtotal = item.price * item.quantity * discountFactor;
              console.log(item.subtotal)
            });
          },
        


        
    },

});