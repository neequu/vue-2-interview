<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getUsers } from '../composables/jsonplaceholder'
import type { User } from '../../types'

const users = ref<User[]>([])
const isLoading = ref(false)
// get user data on page load
onMounted(async () => {
  isLoading.value = true
  try {
    const { data: userData } = await getUsers()
    users.value = userData
  } catch (e) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div>
    <div v-if="users.length" class="user-page">
      <article v-for="user in users" :key="user.id" class="user-card">
        <div>
          <div class="user-details">
            <span class="label">Name:</span>
            <router-link :to="`/users/${user.id}`" class="user-link">
              <span class="value">
                {{ user.name }}
              </span>
            </router-link>
          </div>
          <div class="user-details">
            <span class="label">Username:</span>
            <span class="value">{{ user.username }}</span>
          </div>
          <div class="user-details">
            <span class="label">Email:</span>
            <span class="value">{{ user.email }}</span>
          </div>
        </div>
        <div class="user-footer">
          <router-link :to="`/users/${user.id}/posts`" class="view-btn">Posts</router-link>
          <router-link :to="`/users/${user.id}/albums`" class="view-btn">Albums</router-link>
        </div>
      </article>
    </div>
    <div v-else-if="isLoading" class="loading">
      loading...
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';

.user-page {
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
}

.user-card {
  background-color: $secondary-color;
  border: 1px solid #555;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .user-details {
    font-size: 1rem;
    margin-bottom: 0.75rem;

    // style labels
    span.label {
      font-weight: bold;
      margin-right: 0.45rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 30ch;
      display: inline-block;
      margin-bottom: 0.15rem;
    }

    // style values
    span.value {
      text-overflow: ellipsis;
      color: #8e9671;
      white-space: nowrap;
      overflow: hidden;
      width: 30ch;
      display: inline-block;
    }

    @media (min-width:600px) {

      span.value,
      span.label {
        width: 100%;
      }

      .user-details {
        font-size: 1.2rem;
      }
    }
  }

  .user-footer {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .user-link {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid #555;
    display: inline-flex;
    transition: border-color 250ms;

    &:hover {
      border-color: $text-color;
    }
  }

  // style view button
  .view-btn {
    background-color: #5a455a;
    color: $text-color;
    padding: 0.75rem 1rem;
    text-decoration: none;
    font-weight: 700;
    border: none;
    border-radius: 0.5rem;
    transition: background-color 300ms ease;

    &:hover {
      background-color: #5a455a88;
    }
  }
}
</style>