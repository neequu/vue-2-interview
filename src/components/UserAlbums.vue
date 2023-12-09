<script setup lang="ts">
import { getAlbumsByUserId, getAlbumsPhotosById } from '../composables/jsonplaceholder';
import AlbumsCarousel from '../components/AlbumsCarousel.vue';
import { onMounted, ref } from 'vue';

const props = defineProps<{ userId: string }>()
// limit photo review on each album
const PHOTOS_TO_SHOW = 5

const albums = ref<any[]>([])

onMounted(async () => {
  // get albums of a user
  const { data: userAlbumsData } = await getAlbumsByUserId(props.userId)
  // get array of promises for retrieving album photos 
  const albumsPromises = userAlbumsData.map(async (al) => {
    const { data } = await getAlbumsPhotosById(al.id, { _start: 0, _limit: PHOTOS_TO_SHOW });
    return data
  })
  const albumsData = await Promise.all(albumsPromises)
  albums.value = albumsData
})
</script>

<template>
  <section>
    <h2 class="heading">Albums</h2>
    <AlbumsCarousel :albums="albums" />
  </section>
</template>
