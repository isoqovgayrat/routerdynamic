<template>
  <div class="flex space-x-6 justify-center flex-wrap ">
    <router-link :to="{ name: 'post', params: {id: post.id} } " v-for="post in posts"
                 class="flex  space-x-3 items-center border w-max hover:bg-gray-100">
      <img class="w-36 h-36 object-cover" :src="post.img_url" alt="">
      <h2 class="text-xl font-bold w-72 p-3">{{ post.title }}</h2>
    </router-link>
  </div>
</template>

<script>
import data from '@/assets/data.json'

export default {
  name: "News",
  data() {
    return {
      posts: data
    }
  }
}
</script>

<style scoped>

</style>