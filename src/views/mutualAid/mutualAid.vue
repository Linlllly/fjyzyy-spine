<template>
  <!-- <div>互助诊疗</div> -->
  <div class="section_1 flex-col">
    <SystemItem
      v-for="(training, index) in trainingItems"
      :key="index"
      :label="training.label"
      :imageSrc="training.imageSrc"
      @click.native="doSome(training.id)"
    />
  </div>
</template>

<script>
import SystemItem from "../../component/SystemItem/index.vue";
export default {
  name: "mutualAid",
  components: {
    SystemItem,
  },
  data() {
    return {
      trainingItems: [
        {
          id: 1,
          label: "个案基本病史",
          imageSrc: require("@/assets/testlogo.png"),
        },
        { id: 2, label: "问诊", imageSrc: require("@/assets/testlogo.png") },
        {
          id: 3,
          label: "体态静态评估",
          imageSrc: require("@/assets/testlogo.png"),
        },
        {
          id: 4,
          label: "体态动态评估",
          imageSrc: require("@/assets/testlogo.png"),
        },
        {
          id: 5,
          label: "治疗方法",
          imageSrc: require("@/assets/testlogo.png"),
        },
        {
          id: 6,
          label: "设计运动处方",
          imageSrc: require("@/assets/testlogo.png"),
        },
      ],
    };
  },
  methods: {
    doSome(index) {},
  },
};
</script>

<style lang="scss" scoped>
.section_1 {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(151, 151, 151, 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .system {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    font-size: 24px;
    width: calc(100% / 3); /* 让每个元素占据三分之一的宽度 */
    .img-b {
      width: 220px;
      height: 220px;
      background-image: url("../../assets/bg.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      img {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 15px;
        border-radius: 50%;
      }
    }
  }
}
</style>
