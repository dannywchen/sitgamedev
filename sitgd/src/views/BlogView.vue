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
  background: url("https://cdn.discordapp.com/attachments/1164387540850188348/1201770593087922186/DALLE_2024-01-30_01.07.08_-_Create_a_4K_resolution_background_image_for_a_game_development_website._The_scene_should_be_a_beautiful_grand_and_heavenly_anime-style_landscape._Th.png?ex=65cb0715&is=65b89215&hm=bb5757f170e0b2cee6ff03eaa01092e6c1fd14f0460892a4eae072eee9b3d5f6&");
  background-size: cover;
  background-position: center;
}
</style>
