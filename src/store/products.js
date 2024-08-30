import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
    const products = ref([])

    const getProducts = async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then(response => {
                products.data = response.data
                console.log(products.value)
            }).catch(err => {
                console.log(err)
            })
    }


    return { getProducts }
});
