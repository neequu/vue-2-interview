<script setup lang="ts">
import { Carousel, Slide } from 'vue-carousel';
import type { AlbumPhotos } from '../../types'

defineProps<{ albums: AlbumPhotos[][] }>()
</script>

<template>
  <div>
    <div v-for="(al, idx) in albums" :key="idx" class="album">
      <carousel :mouse-drag="true" autoplay :perPageCustom="[[320, 1], [640, 2], [1024, 3]]" class="album-carousel">
        <slide v-for="photo in al" :key="photo.id">
          <img :src="photo.url">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  aspect-ratio: 1;
}

.album {
  margin-bottom: 2rem;
}
</style>