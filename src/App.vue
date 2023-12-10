<script lang="ts" setup>
import TheHeader from './components/TheHeader.vue';
import { useRoute } from './utils/constants';
const route = useRoute()
</script>

<template>
  <div class="page">
    <TheHeader />
    <main class="main">
      <transition name="slide-fade" mode="out-in">
        <router-view :key="route.path" />
      </transition>
    </main>
  </div>
</template>  

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 300ms ease-out;
}

.slide-fade-leave-active {
  transition: all 300ms cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.main {
  padding-bottom: 1rem;
}
</style>
