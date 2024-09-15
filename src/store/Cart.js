import { defineStore } from 'pinia';
import { ref } from 'vue';

// Sweet Alert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const useCartStore = defineStore('cart', () => {
    const cart = ref([])

    const addToCart = (id, price, quantity = 1) => {
        const newProduct = { id, price, quantity }

        const foundProduct = cart.value.find(product => product.id === newProduct.id)

        if (foundProduct) {
            foundProduct.quantity += 1
            errorAlert()
        } else {
            cart.value.push(newProduct)
            saveToLocalStorage()
            successAlert()
        }

        console.log(cart.value)

    }

    function successAlert() {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product Added To Cart",
            showConfirmButton: false,
            timer: 1500
        });
    }

    function errorAlert() {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Product Aleady in The Cart",
            showConfirmButton: false,
            timer: 1500
        });
    }

    function saveToLocalStorage() {
        localStorage.cart = JSON.stringify(cart.value)
    }

    function loadFromLocalStorage() {
        if (localStorage.cart) {
            cart.value = JSON.parse(localStorage.cart)
        }
    }

    return {
        cart,
        addToCart,
        successAlert,
        errorAlert,
        loadFromLocalStorage
    }
});
