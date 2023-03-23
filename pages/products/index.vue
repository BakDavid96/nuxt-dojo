<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="pr in products">
        <NuxtLink :to="`/products/${pr.id}`">{{ pr.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
})

// fetch the prooducts
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped></style>
