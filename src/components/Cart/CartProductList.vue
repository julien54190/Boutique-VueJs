<script setup lang="ts">
    import type { ProductInterface } from '@/interfaces/productinterface';
import CartProduct from './CartProduct.vue';


    defineProps<{
        cart: ProductInterface[]
    }>();

    const emit = defineEmits<{
    (e: 'removeProductFromCart', productId: number): void;
}>();
</script>

<template>
    <div class="d-flex flex-column">
        <CartProduct
          v-for="product of cart" :product="product" :key="product.id"
          @remove-Product-From-Cart="emit('removeProductFromCart', $event)"
          />

    </div>
</template>

<style lang="scss" scoped>

</style>
