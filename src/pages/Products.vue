<script setup>
import { computed } from 'vue';
import { useProductsStore } from '../store/products';

const productsStore = useProductsStore()

const products = computed(() => productsStore.productsList)
</script>

<template>
    <div class="row">
        <div class="col" v-for="product in products" :key="product.id">
            <div class="card mt-3" style="width: 16rem;">
                <img :src="product.image" class="card-img-top" alt="product.title" style="height: 200px;">
                <div class="card-body">
                    <h5 class="card-title">{{ product.title.slice(0, 17) }}...</h5>
                    <p class="card-text my-0">{{ product.category }}</p>
                    <p class="card-text">Price: {{ product.price }} $</p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-primary btn-sm">Details</button>
                        <button class="btn btn-success btn-sm">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="sass" scoped>

</style>
