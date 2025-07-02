<script setup lang="ts">
import type { ProductCartInterface } from '@/interfaces'
import CartProductList from './CartProductList.vue'
import { computed } from 'vue';

const props = defineProps<{
  cart: ProductCartInterface[]
}>()

const totalPrice = computed(() => props.cart.reduce((total, product) => {
  return total + (product.prix * product.quantity);
}, 0));



const emit = defineEmits<{
  (e: 'removeProductFromCart', productId: number): void
}>()
</script>

<template>
  <div class="p-20 d-flex flex-column">
    <h2 class="mb-20">Panier</h2>
    <CartProductList
      class="flex-fill"
      :cart="cart"
      @remove-product-from-cart="emit('removeProductFromCart', $event)"
    />
    <button class="btn btn-success">Commande ({{ totalPrice }}€)</button>
  </div>
</template>

<style lang="scss" scoped></style>
