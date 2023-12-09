<script setup lang="ts">

</script>

<template>
  <div class="not-found">
    <h2 class="heading">Not Found</h2>
    <router-link to="/">Return Home</router-link>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  margin-top: 10rem;
  display: grid;
  place-content: center;
  text-align: center;
}

a {
  color: white;
  text-decoration: none;
  transition: opacity 240ms ease;
  font-size: 0.85rem;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width:768) {
    font-size: 1rem;
  }
}
</style>