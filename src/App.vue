<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import { onMounted } from 'vue';

// Product Store 
import { useProductsStore } from './store/products';
const productsStore = useProductsStore()

// Cart Store
import { useCartStore } from './store/Cart';
const cartStore = useCartStore()

onMounted(() => productsStore.getProducts())

onMounted(() => cartStore.loadFromLocalStorage())

</script>

<template>
  <Navbar />
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped></style>
