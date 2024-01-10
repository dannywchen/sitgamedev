<script setup>
import GameDevResources from '../components/GameDevResources.vue'
import Blog from '../components/BlogComponent.vue'
</script>

<template>
  <main>
    <GameDevResources />
    <Blog />
  </main>
</template>

<style scoped>
main {
  padding: 10rem 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: url(https://cdn.discordapp.com/attachments/1059117689286692885/1190436426664382506/ca67da4c3766a5132a80cd71d6a726a1.jpg?ex=65a1cb51&is=658f5651&hm=1be5e31adf51336ae147eb725f855430301018d86c612aaa6c04bde381b6028a&);
  background-size: cover;
  background-position: center;
}
</style>
