<script setup lang="ts">
import TheHeader from './components/Header.vue'
import TheFooter from './components/Footer.vue'
import Shop from './components/Shop/ShopView.vue'
import Cart from './components/Cart/CartView.vue'
import data from './data/product.ts'
import { computed, reactive } from 'vue'
import type {
  FiltersInterface,
  FilterUpdate,
  ProductCartInterface,
  ProductInterface,
} from './interfaces'
import { DEFAULT_FILTERS } from './data/filters.ts'

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

function updateFlter(filterUpdate: FilterUpdate) {
  if (filterUpdate.search !== undefined) {
    state.filters.search = filterUpdate.search
  } else if (filterUpdate.priceRange) {
    state.filters.priceRange = filterUpdate.priceRange
  } else if (filterUpdate.category) {
    state.filters.category = filterUpdate.category
  } else {
    state.filters = { ...DEFAULT_FILTERS }
  }
}

const cartEmpty = computed(() => state.cart.length === 0)

const filteredProducts = computed(() => {
  return state.products.filter((product) => {
    if (
      (product.title.toLowerCase().startsWith(state.filters.search.toLowerCase()) &&
        product.prix >= state.filters.priceRange[0] &&
        product.prix <= state.filters.priceRange[1] &&
        product.category === state.filters.category) ||
      state.filters.category === 'all'
    ) {
      return true
    } else {
      return false
    }
  })
})
</script>

<template>
  <div
    class="app-container"
    :class="{
      gridEmpty: cartEmpty,
    }"
  >
    <TheHeader class="header" />
    <Shop
      @update-filter="updateFlter"
      :products="filteredProducts"
      :filters="state.filters"
      @add-product-to-card="addProductToCard"
      class="shop"
    />
    <Cart
      v-if="!cartEmpty"
      :cart="state.cart"
      @remove-product-from-cart="removeProductFromCart"
      class="cart"
    />
    <TheFooter class="footer" />
  </div>
</template>

<style lang="scss">
@use './assets/base.scss' as *;
@use './assets/debug.scss' as *;

.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'header header'
    'shop cart'
    'footer footer ';
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
}

.gridEmpty {
  grid-template-areas:
    'header'
    'shop'
    'footer ';
  grid-template-columns: 100%;
}

.header {
  grid-area: header;
}

.shop {
  grid-area: shop;
}

.cart {
  grid-area: cart;
  background-color: #fff;
}

.footer {
  grid-area: footer;
}
</style>
