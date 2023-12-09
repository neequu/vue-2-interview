<script setup lang="ts">
import { useRoute } from '../utils/constants'
import UserPosts from '../components/UserPosts.vue';
import UserAlbums from '../components/UserAlbums.vue';

const route = useRoute()
const userId = route.params.id
</script>

<template>
  <div>
    <UserPosts :user-id="userId" />
    <UserAlbums :user-id="userId" />
  </div>
</template>

