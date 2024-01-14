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
      <a class="link" href="https://discord.gg/hcj7bh6qdV" target="_blank"
        >Join Discord!</a
      ><a class="link" href="#features-section">Features</a>
    </div>
  </section>
  <section id="features-section">
    <svg
      width="200vw"
      height="300px"
      viewbox="0 0 500 250"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,96 L40,112 C100,128,200,160,290,144 C405,128,475,64,595,48 C676,32,705,90,855,100 C1135,100,1115,53,1295,58.7 C1375,64,1455,96,1635,120 C1735,120,1795,64,1864,48 L1964,32 L1964,0 L1964,0 L0,0 "
        fill="var(--color-background-soft)"
        fill-opacity="1"
      />
    </svg>
    <h2>Features</h2>
    <div class="cards">
      <div class="card">
        <div class="logo"></div>
        <h3 class="title">Purpose</h3>
        <img
      src="https://cdn.discordapp.com/attachments/1103178036809043968/1195961508232966174/R.png?ex=65b5e4f3&is=65a36ff3&hm=d83a53a466acf4a44dc6e9cb9771536d3a7654d5d4dff31266feba23be7cd895&"
      alt="icon"
          />
        <p class="description">
          This is the public release - full fledged website for SITH Game Dev!
          Enjoy and embrace the rich features. More components will be added.
          Please answer this google form for any additional features you would
          like to see being added:
          <a href="https://forms.gle/nAT2tGQ69Db7i9KYA" target="_blank">Form</a>
        </p>
      </div>
      <div class="card">
        <div class="logo"></div>
        <h3 class="title">Trusted</h3>
        <img
      src="https://cdn.discordapp.com/attachments/1103178036809043968/1195962083251064832/lock.jpg?ex=65b5e57c&is=65a3707c&hm=78ca2f4a14b4608c92641f78bca8653f953ec6148d5298310f7674858d50171a&"
      alt="icon"
    />
        <p class="description">Created by Danny, trusted vice president!</p>
      </div>
      <div class="card">
        <div class="logo"></div>
        <h3 class="title">Blog/Leaderboard</h3>
        <img
      src="https://cdn.discordapp.com/attachments/1103178036809043968/1195961822570889356/joy.jpg?ex=65b5e53e&is=65a3703e&hm=2a6859524d501fc5273a61c3cb96d21fda4f36f1aaeb97dc0de4c0c4311e9533&"
      alt="icon"
    />
        <p class="description">
          The blog will be updated from time to time, which provides deep
          insight on unreal engine 5 or ame dev news. There is also a
          leaderboard updated weekly to see who dominates in the competitive
          scene.
        </p>
      </div>
    </div>
  </section>
  <section class="a">
    <h2>Update Schedule</h2>
    <p>Leaderboard gets updated weekly while website gets updated once 2 days.</p>
    </div>
  </div>
 </section>
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
  text-align: center;
}
.l {
  display: flex;
  flex-direction: row;
  padding: 1rem;
}
.link {
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
  margin-bottom: 2rem;
}

#features-section {
  height: 50vw;
  background-color: var(--color-background-mute);
}
.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 2rem 0;
}
.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25%;
  background: var(--color-background);
  border-radius: 10px;
  padding: 2rem;
}
.card h3 {
  margin-bottom: 1rem;
}
</style>
