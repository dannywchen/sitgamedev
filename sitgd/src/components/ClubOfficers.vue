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
              src="https://cdn.discordapp.com/attachments/1059117689286692885/1190511469201211483/9a3e9bc7288f5da24d96617ea8c5452a.png?ex=65a21134&is=658f9c34&hm=22252e1ed582c70f77660bd01c9c8de9e5fa73df12fe58780425c311ef771498"
            />
          </div>
          <h3>Leo Yang</h3>
          <p>President</p>
        </div>
        <div class="profile">
          <div class="img">
            <img
              src="https://cdn.discordapp.com/attachments/1059117689286692885/1190511510691258388/f5a3dd4dc8d76eb4fc257b380df51e76.png?ex=65a2113e&is=658f9c3e&hm=fc5db08e54f6cb7081c1f3130c0ebc4ef459b241347c7966c6577a13bdc5d623"
            />
          </div>
          <h3>Evan Gao</h3>
          <p>Co-President</p>
        </div>
        <div class="profile">
          <div class="img">
            <img
              src="https://cdn.discordapp.com/attachments/1059117689286692885/1190511525677506590/OIP.png?ex=65a21142&is=658f9c42&hm=fb9880d9c3200c1ff70b843dea5ad52f0c87536b3af5aacc377ab10d8f106286"
            />
          </div>
          <h3>Jack Shen</h3>
          <p>Co-President</p>
        </div>
        <div class="profile">
          <div class="img"><img src="" /></div>
          <h3>Danny Chen</h3>
          <p>Vice President</p>
        </div>
        <div class="profile">
          <div class="img"><img src="" /></div>
          <h3>Jason Shi</h3>
          <p>Event Coordinator</p>
        </div>
        <div class="profile">
          <div class="img"><img src="" /></div>
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
  border: 1px solid var(--vt-c-red);
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
