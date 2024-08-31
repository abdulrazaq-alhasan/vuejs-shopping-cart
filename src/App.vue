<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import { useProductsStore } from './store/products';
import { onMounted } from 'vue';

const productsStore = useProductsStore()

onMounted(() => productsStore.getProducts())

</script>

<template>
  <Navbar />
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped></style>
