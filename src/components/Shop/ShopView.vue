<script setup lang="ts">
import type { FiltersInterface, FilterUpdate, ProductInterface } from '@/interfaces'
import ShopProductList from './ShopProductList.vue'
import ShopFilters from './ShopFilters.vue'

defineProps<{
  products: ProductInterface[]
  filters: FiltersInterface
}>()

const emit = defineEmits<{
  (e: 'addProductToCard', productId: number): void
  (e: 'updateFilters', updateFilter: FilterUpdate): void
}>()
</script>

<template>
  <div class="d-flex flex-row">
    <ShopFilters
      :filters="filters"
      @updateFilters="emit('updateFilters', $event)"
      class="shop-filter"
    />
    <ShopProductList
      class="flex-fill"
      @add-product-to-card="emit('addProductToCard', $event)"
      :products="products"
    />
  </div>
</template>

<style lang="scss" scoped>
.shop-filter {
  flex: 0 0 200px;
}
</style>
