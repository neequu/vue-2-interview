<script setup lang="ts">
import { useRoute } from '../utils/constants'
import UserPosts from '../components/UserPosts.vue';

const route = useRoute()
const userId = route.params.id
</script>

<template>
  <UserPosts :user-id="userId" />
</template>

<style lang="scss" scoped></style>