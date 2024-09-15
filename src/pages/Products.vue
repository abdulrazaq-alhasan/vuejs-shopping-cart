<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

// Product Store
import { useProductsStore } from "../store/products";
const productsStore = useProductsStore();

const products = computed(() => productsStore.productsList);

// Cart Store
import { useCartStore } from "../store/Cart";
const cartStore = useCartStore()

const router = useRouter();
</script>

<template>
    <div class="row">
        <div class="col" v-for="product in products" :key="product.id">
            <div class="card mt-3" style="width: 16rem">
                <img :src="product.image" class="card-img-top" alt="product.title" style="height: 200px" />
                <div class="card-body">
                    <h5 class="card-title">{{ product.title.slice(0, 17) }}...</h5>
                    <p class="card-text my-0">{{ product.category }}</p>
                    <p class="card-text">Price: {{ product.price }} $</p>
                    <div class="d-flex justify-content-between">
                        <button @click="router.push(`/details/${product.id}`)" class="btn btn-primary btn-sm">
                            Details
                        </button>
                        <button @click="cartStore.addToCart(product.id, product.price)"
                            class="btn btn-success btn-sm">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped></style>
