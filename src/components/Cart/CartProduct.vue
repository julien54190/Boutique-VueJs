<script setup lang="ts"></script>

<template>
    <div class="mb-10 p-10 d-flex flex-row align-items-center product">
        <Strong class="flex-fill mr-10">MacBook pro</Strong>
        <span class="mr-10">x 1</span>
        <span class="mr-10">Prix : 1500€</span>
        <button class="btn btn-danger">Supprimer</button>
    </div>
</template>

<style lang="scss" scoped>
    .product {
        background-color: var(--gray-1);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        border: var(--border);
    }
</style>
