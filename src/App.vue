<script lang="ts" setup>
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <div class="page">
    <TheHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>  

