<script setup lang="ts">
import type { ProductInterface } from '@/interfaces'
import ShopProduct from './ShopProduct.vue'

defineProps<{
  products: ProductInterface[]
}>()

const emit = defineEmits<{
  (e: 'addProductToCard', productId: number): void
}>()
</script>

<template>
  <div class="grid p-20">
    <ShopProduct
      v-for="product of products"
      :key="product.id"
      :product="product"
      @add-product-to-card="emit('addProductToCard', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 500px;
  gap: 20px;
}
</style>
