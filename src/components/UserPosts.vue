<script setup lang="ts">
import { getPostsByUserId } from '../composables/jsonplaceholder';
import type { Post } from '../../types'
import { onMounted, ref } from 'vue';

// userId from the url param
const props = defineProps<{ userId: string }>()
const posts = ref<Post[]>([])
const isLoading = ref(false)
// get user posts on page load
onMounted(async () => {
  isLoading.value = true
  try {
    const { data: postsData } = await getPostsByUserId(props.userId)
    posts.value = postsData
  } catch (e) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section class="user-posts">
    <h2 class="heading">Posts</h2>
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id" class="post">
        <div class="post-title">{{ post.title }}</div>
        <div class="post-body">{{ post.body }}</div>
        <div class="post-metadata">
          <span class="author">Author Id: {{ post.userId }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="isLoading" class="loading">
      loading...
    </div>
  </section>
</template>

<style lang="scss" scoped>
.post {
  border: 1px solid #777;
  border-radius: 0.5rem;
  margin: 1rem 0;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  // Post title
  .post-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  // Post body
  .post-body {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  // Post metadata
  .post-metadata {
    font-size: 14px;
    color: #aaa;

    // Author
    .author {
      font-weight: bold;
      margin-right: 1.2rem;
    }
  }
}
</style>