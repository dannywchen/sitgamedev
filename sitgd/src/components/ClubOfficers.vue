<script></script>

<template>
  <div class="container">
    <div class="profile">
      <div class="img"><img src="" alt="Mr. Buro" /></div>
      Mr. Buro
      <p>Advisor</p>
    </div>
    <div class="profile">
      <div class="img">
        <img
          src="https://cdn.discordapp.com/attachments/1059117689286692885/1190511469201211483/9a3e9bc7288f5da24d96617ea8c5452a.png?ex=65a21134&is=658f9c34&hm=22252e1ed582c70f77660bd01c9c8de9e5fa73df12fe58780425c311ef771498"
          alt="Leo Yang"
        />
      </div>
      Leo Yang
      <p>President</p>
    </div>
    <div class="profile">
      <div class="img">
        <img
          src="https://cdn.discordapp.com/attachments/1059117689286692885/1190511510691258388/f5a3dd4dc8d76eb4fc257b380df51e76.png?ex=65a2113e&is=658f9c3e&hm=fc5db08e54f6cb7081c1f3130c0ebc4ef459b241347c7966c6577a13bdc5d623"
          alt="Evan Gao"
        />
      </div>
      Evan Gao
      <p>Vice President</p>
    </div>
    <div class="profile">
      <div class="img">
        <img
          src="https://cdn.discordapp.com/attachments/1059117689286692885/1190511525677506590/OIP.png?ex=65a21142&is=658f9c42&hm=fb9880d9c3200c1ff70b843dea5ad52f0c87536b3af5aacc377ab10d8f106286"
          alt="Jack Shen"
        />
      </div>

      Jack Shen
      <p>Vice President</p>
    </div>
    <div class="profile">
      <div class="img"><img src="" alt="Danny Chen" /></div>
      Danny Chen
      <p>Vice President</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  backdrop-filter: blur(16px);
}

.img {
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
}
img {
  width: 10rem;
}
</style>
