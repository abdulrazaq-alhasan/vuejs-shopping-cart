<script setup>

</script>

<template>
    <div class="row">
        <div class="col" v-for="index in 20">
            <div class="card mt-3" style="width: 16rem;">
                <img src="../assets/img-1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build </p>
                    <p class="card-text">Price: 18 $</p>
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
