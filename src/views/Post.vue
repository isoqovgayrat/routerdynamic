<template>
  <div>
    <button class="bg-black text-white px-4 py-2 my-8 mx-5" @click="$router.back()">Orqaga</button>
    <div class="space-y-3 text-center my-8  ">
      <img class="mx-auto" :src="post.img_url" alt="">
      <h1 class="text-4xl fond-bold">{{ post.title }}</h1>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
import data from '@/assets/data.json'

export default {
  name: "Post",
  computed: {
    postId() {
      return parseInt(this.$route.params.id);
    },
    post() {
      return data.find(post => post.id === this.postId)
    }
  }
}
</script>

<style scoped>
button{
  border-radius: 5px;
}

</style>