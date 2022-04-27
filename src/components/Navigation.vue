<template>
<div>
  <nav class="bg-blue-900 p-4 space-x-3">

    <router-link to="/">Bosh sahifa</router-link>
    <router-link to="/posts">Maqolalar</router-link>
  </nav>

</div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>
nav a {
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  border-radius:5px;
}

nav a.we-pro-active {
  background-color: white;
  color: black;
  padding: 12px;

}

</style>