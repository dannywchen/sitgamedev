<script setup></script>

<template>
  <div class="a">
    <img
      src="https://3.files.edl.io/989c/20/03/19/114812-30708864-cc30-4eeb-8975-6e7ff636fbd4.jpg"
      alt="icon"
    />
    <h2>SITHS | Game Dev</h2>
    <p>SITHS Game Dev introduces you to the newly released website.</p>
    <div class="l">
      <a href="https://discord.gg/hcj7bh6qdV" target="_blank">Join Discord!</a
      ><a>Features</a>
    </div>
  </div>
</template>

<style scoped>
.a {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
}
img {
  height: 10rem;
  aspect-ratio: 1/1;
  justify-content: center;
  border-radius: 10px;
  margin: 0 0 1rem 0;
}
h2 {
  font-size: 40px;
  margin-bottom: 0;
  color: white;
}
p {
  color: white;
}
.l {
  display: flex;
  flex-direction: row;
  padding: 1rem;
}
a {
  display: inline-block;
  margin: 5px;
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: var(--vt-c-red);
  color: white;
  font-weight: 400;
}
</style>
