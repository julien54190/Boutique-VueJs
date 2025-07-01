<script setup lang="ts">

import type { ProductInterface } from '@/interfaces/productinterface';




defineProps<{
    product: ProductInterface;
    }>();

const emit = defineEmits<{
    (e: 'removeProductFromCart', productId: number): void;
}>();
</script>

<template>
    <div class="mb-10 p-10 d-flex flex-row align-items-center product">
        <Strong class="flex-fill mr-10">{{ product.title }}</Strong>
        <!-- <span class="mr-10">x 1</span> -->
        <span class="mr-10">Prix : {{ product.prix }}€</span>
        <button class="btn btn-danger" @click="emit('removeProductFromCart', product.id)">Supprimer</button>
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
