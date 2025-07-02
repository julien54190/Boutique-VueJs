<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/';



defineProps<{
    product: ProductInterface
}>();

const emit = defineEmits<{
    (e: 'addProductToCard', productId: number): void
}>();
</script>

<template>
    <div class="product d-flex flex-column p-10">
        <div class="product-image" :style="{ backgroundImage: `url(${ product.image})`}"></div>
        <div class="p-10 d-flex flex-column">
            <h4>{{ product.title }}</h4>
            <p>{{ product.description }}</p>
        </div>

        <div class="d-flex flex-row align-items-center">
            <span class="flex-fill">prix : {{ product.prix }}€</span>
            <button class="btn btn-primary" @click="emit('addProductToCard', product.id)">Ajouter au panier</button>
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
            background-size: cover;
            background-position: center;
            height: 300px;
        }
    }
</style>
