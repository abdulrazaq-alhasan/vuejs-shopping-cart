<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = route.params.id

const product = ref({})

const getProduct = async () => {
    await axios(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            console.log(response.data)
            product.value = response.data
        }).catch(err => console.log(err))
}

onMounted(() => getProduct())
</script>

<template>
    <div class="row mt-5">
        <div class="col-md-6">
            <img width="350" :src="product.image" alt="">

        </div>
        <div class="col-md-6">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <h6>Price: {{ product.price }} $</h6>
            <div class="d-flex">
                <div class="btn-group me-auto">
                    <button type="button" class="btn btn-primary">-</button>
                    <button type="button" class="btn btn-outline-primary">0</button>
                    <button type="button" class="btn btn-primary">+</button>

                </div>
                <button class="btn btn-primary btn-sm">Add To Cart</button>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>

</style>