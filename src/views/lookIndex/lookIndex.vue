<template>
  <!-- <div>导航</div> -->
  <div class="container">
    <div class="content">
      <div class="sider">
        <div
          v-for="(item, index) in menuItems"
          :key="index"
          :class="['menu-item', { selected: selectedIndex === index }]"
          @click="selectItem(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="box" v-if="selectedIndex === 0">
        <div class="system" @click="goTraining(1)">
          <div class="img-b"></div>
          <div>上交叉</div>
        </div>

        <div class="system" @click="goTraining(2)">
          <div class="img-b"></div>
          <div>下交叉</div>
        </div>

        <div class="system" @click="goTraining(3)">
          <div class="img-b"></div>
          <div>脊柱侧弯</div>
        </div>

        <div class="system" @click="goTraining(4)">
          <div class="img-b"></div>
          <div>下肢</div>
        </div>
      </div>
      <div v-else class="box">
        <div class="more">请填写病历</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lookIndex',

  data() {
    return {
      menuItems: ['实训系统', '病例'],
      selectedIndex: 0
    }
  },
  methods: {
    goTraining(index) {
      this.$store.dispatch('setTrainingIndex', index)
      this.$router.push({ path: '/training' })
    },
    selectItem(index) {
      this.selectedIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.colors {
  position: absolute;
  z-index: -10;
  width: 160px;
  height: 100vh;
  background-color: #118f91;
}
.sider {
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px;
  .menu-item {
    width: 280px;
    padding: 20px;
    text-align: left;
    font-size: 30px;
    color: black;
  }

  .menu-item.selected {
    color: white;
    background-color: #69a970;
    text-align: center;
    font-weight: 700;
  }
}
.box {
  display: flex;
  width: 1250px;
  height: 864px;
  background: #e7f6f6;
  justify-content: space-around;
  .system {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    font-size: 24px;
    .img-b {
      width: 220px;
      height: 220px;
      background-image: url('../../../public/static/normal/bg.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
.more {
  margin: 20px auto;
  font-size: 24px;
}
</style>
