<script setup lang="ts">
import { useRoute } from '../utils/constants'
import UserAlbums from '../components/UserAlbums.vue';

const route = useRoute()
const userId = route.params.id
</script>

<template>
  <UserAlbums :user-id="userId" />
</template>

<style lang="scss" scoped></style>