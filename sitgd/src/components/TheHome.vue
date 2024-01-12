<script setup></script>

<template>
  <section class="a">
    <img
      src="https://3.files.edl.io/989c/20/03/19/114812-30708864-cc30-4eeb-8975-6e7ff636fbd4.jpg"
      alt="icon"
    />
    <h2>SITHS | Game Dev</h2>
    <p>SITHS Game Dev introduces you to the newly released website.</p>
    <div class="l">
      <a href="https://discord.gg/hcj7bh6qdV" target="_blank">Join Discord!</a
      ><a href="#features-section">Features</a>
    </div>
  </section>
  <section id="features-section">
    <svg
      width="100vw"
      viewbox="0 0 1864 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,96 L40,112 C100,128,200,160,290,144 C405,128,475,64,595,48 C676,32,705,90,855,100 C1135,100,1115,53,1295,58.7 C1375,64,1455,96,1635,120 C1735,120,1795,64,1864,48 L1964,32 L1964,0 L1964,0 L0,0 "
        fill="var(--color-background-soft)"
        fill-opacity="1"
      />
    </svg>
    <h2>Features</h2>
  </section>
</template>

<style scoped>
.a {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  padding-bottom: 5rem;
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
  background-color: var(--c-red);
  color: white;
  font-weight: 400;
}
svg {
  background-color: var(--color-background-mute);
  width: 100%;
}

#features-section {
  height: 50vw;
  background-color: var(--color-background-mute);
}
</style>
