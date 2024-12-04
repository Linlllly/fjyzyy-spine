<template>
  <!-- <div>导航页</div> -->
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
        <SystemItem
          v-for="(training, index) in trainingItems"
          :key="index"
          :label="training.label"
          :imageSrc="training.imageSrc"
          @click.native="goTraining(training.id)"
        />
      </div>

      <div v-else class="box">
        <div class="more">请填写病历</div>
      </div>
    </div>
  </div>
</template>

<script>
import SystemItem from "../../component/SystemItem/index.vue";

export default {
  name: "lookIndex",
  components: {
    SystemItem,
  },
  data() {
    return {
      menuItems: ["实训系统", "病例"],
      selectedIndex: 0,
      trainingItems: [
        { id: 1, label: "上交叉", imageSrc: require("@/assets/testlogo.png") },
        { id: 2, label: "下交叉", imageSrc: require("@/assets/testlogo.png") },
        {
          id: 3,
          label: "脊柱侧弯",
          imageSrc: require("@/assets/testlogo.png"),
        },
        { id: 4, label: "下肢", imageSrc: require("@/assets/testlogo.png") },
      ],
    };
  },
  methods: {
    goTraining(index) {
      // this.$store.dispatch("setTrainingIndex", index);
      // this.$router.push({ path: "/training" });
      this.$router.push({ path: `/main/${index}` });
    },
    selectItem(index) {
      this.selectedIndex = index;
    },
  },
};
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
}
.more {
  margin: 20px auto;
  font-size: 24px;
}
</style>
