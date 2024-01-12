<script setup>
import GameDevResources from "../components/GameDevResources.vue";
import Blog from "../components/BlogComponent.vue";
</script>

<template>
  <main>
    <GameDevResources />
    <Blog />
  </main>
</template>

<style scoped>
main {
  padding: 10rem 0 70px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: url("https://cdn2.unrealengine.com/darkworld-4k-3840x2160-2ed69bbba703.jpg?resize=1&w=1920");
  background-size: cover;
  background-position: center;
}
</style>
