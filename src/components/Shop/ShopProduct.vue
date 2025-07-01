<script setup lang="ts"></script>

<template>
    <div class="product d-flex flex-column p-10">
        <div class="product-image"></div>
        <div class="p-10 d-flex flex-column">
            <h4>MacBook pro</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class="d-flex flex-row align-items-center">
            <span class="flex-fill">prix : 1500 €</span>
            <button class="btn btn-primary">Ajouter au panier</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .product{
        background-color: #fff;
        border-radius: var(--border-radius-bg);
        box-shadow: var(--box-shadow);
        border: var(--border);
        &-image {
            border-top-left-radius: var(--border-radius-bg);
            border-top-right-radius: var(--border-radius-bg);
            background-image: url(../../assets/img/macBookPro.jpeg);
            background-size: cover;
            background-position: center;
            height: 190px;
        }
    }
</style>
