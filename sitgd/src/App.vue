<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>SITH | Game Dev</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/leaderboard">Leaderboard</RouterLink>
        <RouterLink to="/aboutus">About Us</RouterLink>
        <a href="https://discord.gg/hcj7bh6qdV" target="_blank">Join</a>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <span class="copyright">SITHS Game Dev © 2024</span>
    <br />
    <span class="credits"
      >Website made by Danny Chen - MeritOfDragons#6339 <br />
      Ryan Chen - .xosos.
    </span>
  </footer>
</template>

<style scoped>
header {
  z-index: 1;
  position: fixed;
  background: var(--color-background);
  width: 100vw;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 1rem 0.35rem 1rem;
  border-top-color: #f54254;
  border-top-style: solid;
}

nav {
  font-size: 20px;
  text-align: center;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
span {
  color: var(--color-text);
}
</style>
