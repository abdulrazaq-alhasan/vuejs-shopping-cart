import axios from 'axios';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
    const products = ref([])

    const productsList = computed(() => products.value)
    const getProducts = async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
                products.value = response.data
            }).catch(err => {
                console.log(err)
            })
    }
    return {
        getProducts,
        productsList
    }
});
