<script setup lang="ts">
import { ref } from 'vue';
import { createPost } from '../composables/jsonplaceholder'
// form element
const form = ref<HTMLFormElement | null>(null)
// states for ui
const isLoading = ref(false)
const errorMsg = ref('')
const success = ref(false)
// submit
async function handleSubmit(e: Event) {
  isLoading.value = true
  errorMsg.value = ''
  success.value = false
  try {
    const formTarget = e.target as HTMLFormElement;
    const formElements = formTarget.elements as any;
    const userId = formElements.userId?.value
    const title = formElements.title?.value
    const body = formElements.body?.value

    if (!userId || !title || !body) {
      throw new Error('Fields are missing')
    }
    const res = await createPost({ userId, title, body })
    if (res.status === 201) {
      success.value = true
    }
    form.value?.reset()
  } catch (e: any) {
    errorMsg.value = e.message || 'An error has occured'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section>
    <form ref="form" @submit.prevent="handleSubmit" class="form-container">
      <h2 class="heading">Add new Post</h2>
      <input :disabled="isLoading" name="userId" type="text" placeholder="Enter id">
      <input :disabled="isLoading" name="title" type="text" placeholder="Enter title">
      <input :disabled="isLoading" name="body" type="text" placeholder="Enter body">
      <button :disabled="isLoading" type="submit">Submit</button>
    </form>
    <div v-if="isLoading" class="loading">
      loading...
    </div>
    <div v-else-if="success" class="success">
      Post Added
    </div>
    <div v-else-if="errorMsg" class="error">
      {{ errorMsg }}
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../style.scss';

.form-container {
  width: min(450px, 100%);
  margin: 2rem auto 0;
  padding: 0.75rem;
  background-color: #252525;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  // form inputs
  input {
    width: 100%;
    padding: 0.65rem;
    margin-bottom: 1rem;
    background-color: #303030;
    color: white;
    border-radius: 4px;
    border: transparent;
    outline: none;
    transition: border-color 240ms ease;

    &:is(:focus, :focus-visible) {
      border-color: $secondary-color;
    }

    &::placeholder {
      color: white;
    }

    &:disabled {
      background-color: #323232;
      cursor: not-allowed;
    }
  }

  // submit button
  button {
    width: 100%;
    padding: 0.75rem;
    background-color: $secondary-color;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 240ms ease;

    &:hover {
      background-color: #334;
    }

    &:disabled {
      background-color: #323232;
      cursor: not-allowed;
    }
  }

  @media (min-width: 768px) {
    padding: 1.5rem;

    input {
      padding: 1rem;
    }
  }
}

.error {
  font-size: 1.2rem;
  color: rgb(235, 74, 46);
  text-align: center;
  margin-top: 1rem;
}

.success {
  font-size: 1.2rem;
  color: rgb(46, 145, 33);
  text-align: center;
  margin-top: 1rem;
}
</style>