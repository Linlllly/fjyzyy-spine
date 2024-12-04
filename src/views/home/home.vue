<template>
  <div class="container">
    <div class="right">
      <div class="title">
        <div><span style="color: #118f91">不良姿势</span>的</div>
        <div>评估与矫正虚拟仿真</div>
      </div>

      <div class="des">
        Virtual simulation of poor posture assessment and correction
      </div>
      <div class="ok" @click="goLookIndex">开始实验</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    goLookIndex() {
      this.$router.push("/lookIndex");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;

  background-image: url("../../assets/home.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .right {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 60%;
    justify-content: center;
    .title {
      font-size: 86px;
      font-weight: 600;
      color: #000;
      line-height: 120px;
    }
    .des {
      color: #118f91;
      margin-top: 40px;
    }
    .ok {
      width: 240px;
      height: 80px;
      margin-top: 80px;
      color: #fff;
      background-color: #118f91;
      border-radius: 10px;
      font-size: 24px;
      text-align: center;
      line-height: 80px;
      cursor: pointer;
    }
  }
}
</style>
