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
  background: url("https://cdn.discordapp.com/attachments/1164387540850188348/1201768653310402610/DALLE_2024-01-30_00.59.23_-_Create_a_4K_resolution_background_image_for_a_game_development_website_with_a_beautiful_anime-style_scenery_optimized_for_text_visibility._The_image_.png?ex=65cb0546&is=65b89046&hm=fffbb4ab6139bb181d933d8147021b59637b68b25967e8653b37f70eda45c685&");
  background-size: cover;
  background-position: center;
}
</style>
