<script></script>

<template>
  <div class="container">
    <div class="advisor">
      <h2>Club Advisor</h2>
      <div class="profile">
        <div class="img">
          <img
            src="https://www.sitechcad.com/uploads/1/3/2/8/132889395/published/buro-joseph.jpg?1595296031"
          />
        </div>
        <h3>Mr. Buro</h3>
        <p>Advisor</p>
      </div>
    </div>

    <div class="b">
      <h2>Officers</h2>
      <div class="officers">
        <div class="profile">
          <div class="img">
            <img
              src="https://cdn.discordapp.com/attachments/773982732837584898/1194667754012282951/IMG_6549.jpg?ex=65b1300c&is=659ebb0c&hm=1062bf3d8e47858312b05f2e3c6f4d4fa7d60a2a06dc56a2805215ba6a89a4e3&"
            />
          </div>
          <h3>Leo Yang</h3>
          <p>President</p>
        </div>
        <div class="profile">
          <div class="img">
            <img
              src="https://cdn.discordapp.com/attachments/773982732837584898/1194667580280016986/IMG_5603.JPG?ex=65b12fe2&is=659ebae2&hm=4c806d25922041cd9dc0a52e01a36d76db1f4b368e96ea04b164515bf780000a&"
            />
          </div>
          <h3>Evan Gao</h3>
          <p>Co-President</p>
        </div>
        <div class="profile">
          <div class="img">
            <img
              src="https://cdn.discordapp.com/attachments/917589799299321897/1201760248734691358/DALLE_2024-01-30_00.25.54_-_A_professional_logo_for_a_game_development_company._The_logo_should_be_modern_sleek_and_convey_a_sense_of_creativity_and_technological_innovation._I.png?ex=65cafd72&is=65b88872&hm=02c61c0f389d8887587c44dc54b6a15531253701de55ef0605502740f12de0e3&"
            />
          </div>
          <h3>Jack Shen</h3>
          <p>Co-President</p>
        </div>
        <div class="profile">
          <div class="img">
            <img
              src="https://cdn.discordapp.com/attachments/773982732837584898/1194668711802576896/IMG_6550.png?ex=65b130f0&is=659ebbf0&hm=1f2eaf34ec85eda689cfcdbf32281a7129df17517b226408b6bd612dcbe44739&"
            />
          </div>
          <h3>Danny Chen</h3>
          <p>Vice President</p>
        </div>
        <div class="profile">
          <div class="img"><img src="https://cdn.discordapp.com/attachments/917589799299321897/1201760248734691358/DALLE_2024-01-30_00.25.54_-_A_professional_logo_for_a_game_development_company._The_logo_should_be_modern_sleek_and_convey_a_sense_of_creativity_and_technological_innovation._I.png?ex=65cafd72&is=65b88872&hm=02c61c0f389d8887587c44dc54b6a15531253701de55ef0605502740f12de0e3&" /></div>
          <h3>Jason Shi</h3>
          <p>Event Coordinator</p>
        </div>
        <div class="profile">
          <div class="img">
            <img
              src="https://cdn.discordapp.com/attachments/917589799299321897/1194667073926877204/image.png?ex=65b12f6a&is=659eba6a&hm=db6566d5f4589051d54a49a55691f790b49b803c5643bd4a4cb31d09de37d035&"
            />
          </div>
          <h3>Jonathan Liu</h3>
          <p>Secretary</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.officers {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 2.5rem 8rem 2.5rem 8rem;
  min-width: 11rem;
  border-radius: 10px;
  border: 1px solid var(--c-red);
  backdrop-filter: blur(50px);
}

.img {
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 2rem;
}
img {
  width: 10rem;
}
h3 {
  font-size: 150%;
}
p {
  color: white;
}
</style>
