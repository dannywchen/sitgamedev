<script>
import { ref } from "vue";

export default {
  data() {
    return {
      group1Vis: ref(true),
      group2Vis: ref(false),
      group3Vis: ref(false),
    };
  },
  methods: {
    btn1() {
      this.group1Vis = true;
      this.group2Vis = false;
      this.group3Vis = false;
    },
    btn2() {
      this.group1Vis = false;
      this.group2Vis = true;
      this.group3Vis = false;
    },
    btn3() {
      this.group1Vis = false;
      this.group2Vis = false;
      this.group3Vis = true;
    },
  },
};
</script>

<template>
  <div class="container">
    <h2>Game Dev Leaderboard</h2>

    <div class="buttons">
      <button @click="btn1">Rank 1-5</button
      ><button @click="btn2">Rank 6-10</button
      ><button @click="btn3">Rank 11-15</button>
    </div>

    <div v-if="group1Vis" class="rank-group">
      <div class="rank">
        <div class="circle">⭐</div>
        <p>1. Danny Chen</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill progress-fill-1"></div>
          </div>
          <div class="progress-value">999 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>2. Leo Yang</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill progress-fill-2"></div>
          </div>
          <div class="progress-value">99 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>3. Evan Gao</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill progress-fill-3"></div>
          </div>
          <div class="progress-value">95 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>4. Jack Shen</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill progress-fill-4"></div>
          </div>
          <div class="progress-value">50 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>5. Johnathon Liu</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill progress-fill-5"></div>
          </div>
          <div class="progress-value">50 points</div>
        </div>
      </div>
    </div>
    <div v-if="group2Vis" class="rank-group">
      <div class="rank">
        <div class="circle">⭐</div>
        <p>6. Jason Shi</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill2 progress-fill-6"></div>
          </div>
          <div class="progress-value">47 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>7. Johnny The S*x Slave</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill2 progress-fill-7"></div>
          </div>
          <div class="progress-value">-333 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>8. Abdul T</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill2 progress-fill-8"></div>
          </div>
          <div class="progress-value">0 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>9. Andrew Chen</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill2 progress-fill-9"></div>
          </div>
          <div class="progress-value">0 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>10. Ben F</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill2 progress-fill-10"></div>
          </div>
          <div class="progress-value">0 points</div>
        </div>
      </div>
    </div>
    <div v-if="group3Vis" class="rank-group">
      <div class="rank">
        <div class="circle">⭐</div>
        <p>11. Patrick Lian</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill3 progress-fill-11"></div>
          </div>
          <div class="progress-value">0 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>12. Jake</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill3 progress-fill-12"></div>
          </div>
          <div class="progress-value">0 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>13. Max</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill3 progress-fill-13"></div>
          </div>
          <div class="progress-value">0 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>14. Ethan De Jesus</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill3 progress-fill-14"></div>
          </div>
          <div class="progress-value">0 points</div>
        </div>
      </div>
      <div class="rank">
        <div class="circle">⭐</div>
        <p>15. Firdavs M</p>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill3 progress-fill-15"></div>
          </div>
          <div class="progress-value">0 points</div>
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
  padding: 1rem;
  border-radius: 10px;
  width: 50rem;
  backdrop-filter: blur(3px);
  border: 1px solid var(--c-red);
}
h2 {
  font-size: 40px;
}

.buttons {
  display: flex;
  flex-direction: row;
  padding: 1rem;
}
button {
  display: inline-block;
  margin: 5px;
  padding: 0.75rem 1rem;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: var(--c-red);
  color: white;
  font-weight: 400;
  font-size: 15px;
}
button:hover {
  background-color: white;
  color: var(--c-red);
}
button::after {
  background-color: white;
  color: var(--c-red);
}

.rank-group {
  border-radius: 10px;
  background: var(--c-red);
}
.rank {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 1rem;
  min-width: 30rem;
}
.circle {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  color: white;
  font-weight: bold;
  font-size: 20px;
}

.progress-bar-container {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.progress-bar {
  height: 20px;
  background-color: #808080;
  border-radius: 10px;
  margin-bottom: 5px;
  width: 100%;
}
.progress-value {
  color: white;
  text-align: right;
  font-weight: bold;
}

.progress-fill {
  height: 100%;
  border-radius: 10px;
  background-color: #f54254;
  width: 0;
  animation: fillProgress 2.35s ease-in-out backwards;
}

.progress-fill2 {
  height: 100%;
  border-radius: 10px;
  background-color: #f54254;
  width: 0;
  animation: fillProgress 2.35s ease-in-out backwards;
}

.progress-fill3 {
  height: 100%;
  border-radius: 10px;
  background-color: #f54254;
  width: 0;
  animation: fillProgress 2.35s ease-in-out backwards;
}
.progress-fill-1 {
  background-color: #031b88;
  animation: fillProgress1 2.35s ease-in-out forwards;
}
.progress-fill-2 {
  background-color: #6096fd;
  animation: fillProgress2 2.35s ease-in-out forwards;
}
.progress-fill-3 {
  background-color: #aab6fb;
  animation: fillProgress3 2.35s ease-in-out forwards;
}
.progress-fill-4 {
  background-color: #fb7b8e;
  animation: fillProgress4 2.35s ease-in-out forwards;
}
.progress-fill-5 {
  background-color: #faa7b8;
  animation: fillProgress5 2.35s ease-in-out forwards;
}
.progress-fill-6 {
  background-color: #ac92eb;
  animation: fillProgress6 2.35s ease-in-out forwards;
}
.progress-fill-7 {
  background-color: #4fc1e8;
  animation: fillProgress7 2.35s ease-in-out forwards;
}
.progress-fill-8 {
  background-color: #a0d568;
  animation: fillProgress8 2.35s ease-in-out forwards;
}
.progress-fill-9 {
  background-color: #ffce54;
  animation: fillProgress9 2.35s ease-in-out forwards;
}
.progress-fill-10 {
  background-color: #ed5564;
  animation: fillProgress10 2.35s ease-in-out forwards;
}
.progress-fill-11 {
  background-color: #6aab9c;
  animation: fillProgress11 2.35s ease-in-out forwards;
}
.progress-fill-12 {
  background-color: #fa9284;
  animation: fillProgress12 2.35s ease-in-out forwards;
}
.progress-fill-13 {
  background-color: #e06c78;
  animation: fillProgress13 2.35s ease-in-out forwards;
}
.progress-fill-14 {
  background-color: #5874dc;
  animation: fillProgress14 2.35s ease-in-out forwards;
}
.progress-fill-15 {
  background-color: #384e78;
  animation: fillProgress15 2.35s ease-in-out forwards;
}

@keyframes fillProgress1 {
  to {
    width: 95%;
  }
}
@keyframes fillProgress2 {
  to {
    width: 90%;
  }
}
@keyframes fillProgress3 {
  to {
    width: 85%;
  }
}
@keyframes fillProgress4 {
  to {
    width: 80%;
  }
}
@keyframes fillProgress5 {
  to {
    width: 75%;
  }
}
@keyframes fillProgress6 {
  to {
    width: 70%;
  }
}
@keyframes fillProgress7 {
  to {
    width: 10%;
  }
}
@keyframes fillProgress8 {
  to {
    width: 0%;
  }
}
@keyframes fillProgress9 {
  to {
    width: 0%;
  }
}
@keyframes fillProgress10 {
  to {
    width: 0%;
  }
}
@keyframes fillProgress11 {
  to {
    width: 0%;
  }
}
@keyframes fillProgress12 {
  to {
    width: 0%;
  }
}
@keyframes fillProgress13 {
  to {
    width: 0%;
  }
}
@keyframes fillProgress14 {
  to {
    width: 0%;
  }
}
@keyframes fillProgress15 {
  to {
    width: 0%;
  }
}
</style>
