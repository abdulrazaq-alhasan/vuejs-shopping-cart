<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar />
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped></style>
