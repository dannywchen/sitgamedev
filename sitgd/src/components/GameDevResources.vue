<script></script>

<template>
  <div class="container">
    <h2>Game Dev Resources</h2>
    <p>
      Explore our latest resources and stay tuned for exciting updates in game
      development!
    </p>
    <br />
    <div class="list">
      <a
        href="https://www.unrealengine.com/en-US/unreal-engine-5"
        target="_blank"
        >Unreal Engine 5</a
      >
      <a href="https://docs.unrealengine.com/5.0/en-US/" target="_blank"
        >Unreal Documentation</a
      >
      <a
        href="https://www.unrealengine.com/marketplace/en-US/free"
        target="_blank"
        >Unreal Engine 5 Free Marketplace</a
      >
      <a href="https://www.youtube.com/watch?v=k-zMkzmduqI" target="_blank"
        >Unreal Sensei 5 Hour</a
      >
      <a
        href="https://www.youtube.com/watch?v=1cfPiofNy-U&t=328s&pp=ygUqaG93IHRvIG1ha2Ugb3BlbiB3b3JsZCBnYW1lIHVucmVhbCBuZ2luZSA1"
        target="_blank"
        >Open World Game Tutorial</a
      >
      <a href="https://www.youtube.com/watch?v=whHWEObyIbQ" target="_blank"
        >FPS Game Tutorial</a
      >
      <a
        href="https://www.youtube.com/watch?v=tVH0VTY-c8o&pp=ygUhaG93IHRvIG1ha2UgMmQgZ2FtZSB1bnJlYWwgZW5naW5l" target="_blank"
        >2D Game Tutorial</a
      >
      <a href="https://discord.gg/hcj7bh6qdV" target="_blank">SITHS Game Dev Discord Server</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 1.5rem;
  border-radius: 10px;
  width: fit-content;
  min-height: 30rem;
  backdrop-filter: blur(27px);
  border: 1px solid var(--c-red);
  transition-duration: 0.3s;
}
.container:hover {
  transform: scale(1.01);
}
h2 {
  color: white;
}
p {
  color: white;
}
.list {
  display: flex;
  flex-direction: column;
}
a {
  width: fit-content;
}
</style>
