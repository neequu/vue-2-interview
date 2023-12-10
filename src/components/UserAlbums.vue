<script setup lang="ts">
import { getAlbumsByUserId, getAlbumsPhotosById } from '../composables/jsonplaceholder';
import AlbumsCarousel from '../components/AlbumsCarousel.vue';
import { onMounted, ref } from 'vue';

const props = defineProps<{ userId: string, limit?: number }>()


const albums = ref<any[]>([])
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  try {
    // get albums of a user
    const { data: userAlbumsData } = await getAlbumsByUserId(props.userId)
    // get array of promises for retrieving album photos 
    const albumsPromises = userAlbumsData.map(async (al) => {
      const params = props.limit ? { _start: 0, _limit: props.limit } : {}
      const { data } = await getAlbumsPhotosById(al.id, params);
      return data
    })
    const albumsData = await Promise.all(albumsPromises)
    albums.value = albumsData
  } catch (e: any) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section>
    <h2 class="heading">Albums</h2>
    <AlbumsCarousel v-if="albums.length" :albums="albums" />
    <!-- if has limit - it's users page and no need to show loading since there's already a loading indicator -->
    <div v-else-if="isLoading && !limit" class="loading">
      loading...
    </div>
  </section>
</template>
