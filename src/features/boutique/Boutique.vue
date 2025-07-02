<script setup lang="ts">
import Shop from './components/Shop/ShopView.vue'
import Cart from './components/Cart/CartView.vue'
import data from '../../data/product.ts'
import { computed, reactive } from 'vue'
import type {
  FiltersInterface,
  FilterUpdate,
  ProductCartInterface,
  ProductInterface,
} from '../../interfaces'
import { DEFAULT_FILTERS } from '../../data/filters.ts'

const state = reactive<{
  products: ProductInterface[]
  cart: ProductCartInterface[]
  filters: FiltersInterface
}>({
  products: data,
  cart: [],
  filters: { ...DEFAULT_FILTERS },
})

function addProductToCard(productId: number): void {
  const product = state.products.find((product) => product.id === productId)
  if (product) {
    const productInCart = state.cart.find((item) => item.id === productId)
    if (productInCart) {
      productInCart.quantity++
    } else {
      state.cart.push({ ...product, quantity: 1 })
    }
  }
}

function removeProductFromCart(productId: number): void {
  const productIndex = state.cart.findIndex((item) => item.id === productId)
  if (productIndex !== -1) {
    const productInCart = state.cart[productIndex]
    if (productInCart.quantity > 1) {
      productInCart.quantity--
    } else {
      state.cart.splice(productIndex, 1)
    }
  }
}

function updateFilter(filterUpdate: FilterUpdate) {
  if (filterUpdate.search !== undefined) {
    state.filters.search = filterUpdate.search;
  } else if (filterUpdate.priceRange) {
    state.filters.priceRange = filterUpdate.priceRange;
  } else if (filterUpdate.category) {
    state.filters.category = filterUpdate.category;
  } else {
    state.filters = { ...DEFAULT_FILTERS };
  }
}

const cartEmpty = computed(() => state.cart.length === 0)

const filteredProducts = computed(() => {
  return state.products.filter((product) => {
    if (
      product.title
        .toLocaleLowerCase()
        .startsWith(state.filters.search.toLocaleLowerCase()) &&
      product.price >= state.filters.priceRange[0] &&
      product.price <= state.filters.priceRange[1] &&
      (product.category === state.filters.category ||
        state.filters.category === 'all')
    ) {
      return true;
    } else {
      return false;
    }
  })
})

const nbrOfProducts = computed(() => filteredProducts.value.length);




</script>

<template>
  <div class="boutique-container" :class="{ 'grid-empty': cartEmpty}">
    <Shop
      @update-filter="updateFilter"
      :products="filteredProducts"
      :filters="state.filters"
      :nbrOfProducts="nbrOfProducts"
      @add-product-to-card="addProductToCard"
      class="shop"
    />
    <Cart
      v-if="!cartEmpty"
      :cart="state.cart"
      @remove-product-from-cart="removeProductFromCart"
      class="cart"
    />
  </div>

</template>

<style lang="scss" scoped>
  .boutique-container{
    display: grid;
    grid-template-columns: 75% 25%;
  }

  .grid-empty {
    grid-template-columns: 100%;
  }

  .cart {
    background-color: white;
    border-left: var(--border);
  }
</style>
