<script setup lang="ts">
    import type { ProductInterface } from '@/interfaces/productinterface';
import ShopProductList from './ShopProductList.vue';


    defineProps<{
      products: ProductInterface[]
    }>()

    const emit = defineEmits<{
      (e: 'addProductToCard', productId: number): void
    }>();
</script>

<template>
    <div>
        <ShopProductList @add-product-to-card="emit('addProductToCard', $event)" :products="products"/>
    </div>
</template>

<style lang="scss" scoped>

</style>
