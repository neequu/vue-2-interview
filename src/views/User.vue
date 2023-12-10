<script setup lang="ts">
import { useRoute } from '../utils/constants'
import UserPosts from '../components/UserPosts.vue';
import UserAlbums from '../components/UserAlbums.vue';

const route = useRoute()
const userId = route.params.id
// limit photo review on each album
const PHOTOS_TO_SHOW = 5
</script>

<template>
  <div>
    <UserPosts :user-id="userId" />
    <UserAlbums :user-id="userId" :limit="PHOTOS_TO_SHOW" />
  </div>
</template>

