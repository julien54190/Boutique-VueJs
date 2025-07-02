<script setup lang="ts">
import type { FiltersInterface, FilterUpdate } from '@/interfaces';


defineProps<{
  filters: FiltersInterface
}>()

const emit = defineEmits<{
  (e: 'updateFilters', filterUpdate: FilterUpdate): void
}>();
</script>

<template>
  <idv class="p-20">
    <section class="mb-20">
      <h3 class="mb-10">Rechercher</h3>
      <input
        :value="filters.search"
        @input="emit('updateFilters', { search: ($event.target as HTMLInputElement).value})"
        type="text" name="" id="" placeholder="Rechercher">
    </section>
  </idv>
</template>

<style lang="scss" scoped></style>
