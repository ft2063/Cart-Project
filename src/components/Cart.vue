<template>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card">
                <div class="table">
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
                                <img :src="item.image"
                                    width="60"
                                    height="60"
                                    alt=""
                                    class="img-fluid rounded"
                                    srcset=""
                                >
                            
                            </td>
                            <td>{{item.name}}</td>
                            <td>
                                <i class="bi bi-caret-up"
                                    @click="data.incrementQ(item)"></i>
                                {{item.quantity}}
                                <i class="bi bi-caret-down"
                                    @click="data.decrementQ(item)"></i>
                            </td>
                            <td>{{item.price}}</td>
                            <td>{{item.price * item.quantity}}</td>
                            <td> <i 
                            @click="data.removeFromCart(item)"
                            class="bi bi-cart-x text-danger fw-bo"> </i></td>
                        
                        </tr>
                        <th class="text-center" colspan="3"> Total </th>
                        <td class="text-center" colspan="3">
                            <span class="badge bg-danger tounded-pill">
                                ${{data.cartItems.reduce((acc, item) => acc+= item.price * item.quantity, 0)}}
                            </span>
                        
                        </td>
                    </tbody>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useCartStore } from '../stores/useCartStore';

    const data = useCartStore();

</script>

<style>
    i {
        cursor: pointer;
    }

</style>