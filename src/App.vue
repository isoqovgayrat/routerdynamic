<template>




 <Navigation/>
  <router-view v-slot="{Component}">
<transition name="fade" mode="out-in">
  <component :is="Component"></component>
</transition>
  </router-view>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  components:{
    Navigation
  }
}
</script>
<style>

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-active{
  opacity: 0;
}


</style>

