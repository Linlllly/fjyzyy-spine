<template>
  <div class="app">
    <!-- 菜单 -->
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#108384"
      text-color="#fff"
      active-text-color="#fff"
      @select="handleSelect"
    >
      <el-menu-item index="1">病例呈现</el-menu-item>
      <el-menu-item index="2">实训前测</el-menu-item>
      <el-menu-item index="3">实训目的</el-menu-item>
      <el-menu-item index="4">实训内容</el-menu-item>
      <el-menu-item index="5">矫正方案</el-menu-item>
      <el-menu-item index="6">互助诊疗</el-menu-item>
      <el-menu-item index="7">考核反馈</el-menu-item>
    </el-menu>
    <div class="title">
      <el-button type="primary" size="mini" plain @click="goBack"
        >返回</el-button
      >
      <span style="margin: 0 0.5333rem">{{ getNowName }}</span>
    </div>
    <div class="father">
      <!-- 内容 -->
      <div class="components">
        <CasePresentation
          v-if="activeIndex === '1'"
          :caseData="getNowPresent"
        ></CasePresentation>
        <PreTraining v-if="activeIndex === '2'"></PreTraining>
        <Practical v-if="activeIndex === '3'"></Practical>
        <Content v-if="activeIndex === '4'" :demand="getNowDemand"></Content>
        <SetRight v-if="activeIndex === '5'"></SetRight>
        <MutualAid v-if="activeIndex === '6'"></MutualAid>
        <Feedback v-if="activeIndex === '7'"></Feedback>
      </div>
    </div>
  </div>
</template>
<script>
import CasePresentation from "../casePresentation/casePresentation.vue";
import PreTraining from "../preTraining/preTraining.vue";
import Practical from "../practical/practical.vue";
import Content from "../content/content.vue";
import SetRight from "../setRight/setRight.vue";
import MutualAid from "../mutualAid/mutualAid.vue";
import Feedback from "../feedback/feedback.vue";

export default {
  data() {
    return {
      trainingIndex: null,
      activeIndex: "1",
    };
  },
  components: {
    CasePresentation,
    PreTraining,
    Practical,
    Content,
    SetRight,
    MutualAid,
    Feedback,
  },
  created() {
    this.trainingIndex = this.$route.params.index;
  },
  computed: {
    getNowName() {
      if (this.trainingIndex == 1) {
        return "上交叉";
      } else if (this.trainingIndex == 2) {
        return "下交叉";
      } else if (this.trainingIndex == 3) {
        return "脊柱侧弯";
      } else if (this.trainingIndex == 4) {
        return "下肢";
      }
    },
    getNowPresent() {
      if (this.trainingIndex == 1) {
        return {
          info: "明明，男，21岁。",
          persent: "上交叉综合征",
          assessment:
            "耳垂超过肩峰一指的距离；在自然放松状态下，找到肩胛骨内侧缘与脊柱之间能够放进5指；在自然放松状态下，低头找到颈椎上凸起的一块骨头和第七胸椎棘突之间放一块夹板，角度在18°；在自然放松的状态下，将一根直杆放在骶骨上方，贴在胸椎脊柱上，杆往后倾斜的。",
          like: "喜欢玩电脑游戏。",
          need: "明明上班的时候老是觉得肩膀和脖子酸痛，很影响工作，希望可以缓解疼痛。",
          img: require("@/assets/上交叉/上交叉.png"),
        };
      } else if (this.trainingIndex == 2) {
        return {
          info: "明明，男，22岁。",
          persent: "上交叉综合征",
          assessment:
            "耳垂超过肩峰一指的距离；在自然放松状态下，找到肩胛骨内侧缘与脊柱之间能够放进5指；在自然放松状态下，低头找到颈椎上凸起的一块骨头和第七胸椎棘突之间放一块夹板，角度在18°；在自然放松的状态下，将一根直杆放在骶骨上方，贴在胸椎脊柱上，杆往后倾斜的。",
          like: "喜欢玩电脑游戏。",
          need: "明明上班的时候老是觉得肩膀和脖子酸痛，很影响工作，希望可以缓解疼痛。",
          img: require("@/assets/上交叉/上交叉.png"),
        };
      } else if (this.trainingIndex == 3) {
        return {
          info: "明明，男，23岁。",
          persent: "上交叉综合征",
          assessment:
            "耳垂超过肩峰一指的距离；在自然放松状态下，找到肩胛骨内侧缘与脊柱之间能够放进5指；在自然放松状态下，低头找到颈椎上凸起的一块骨头和第七胸椎棘突之间放一块夹板，角度在18°；在自然放松的状态下，将一根直杆放在骶骨上方，贴在胸椎脊柱上，杆往后倾斜的。",
          like: "喜欢玩电脑游戏。",
          need: "明明上班的时候老是觉得肩膀和脖子酸痛，很影响工作，希望可以缓解疼痛。",
          img: require("@/assets/上交叉/上交叉.png"),
        };
      } else if (this.trainingIndex == 4) {
        return {
          info: "明明，男，24岁。",
          persent: "上交叉综合征",
          assessment:
            "耳垂超过肩峰一指的距离；在自然放松状态下，找到肩胛骨内侧缘与脊柱之间能够放进5指；在自然放松状态下，低头找到颈椎上凸起的一块骨头和第七胸椎棘突之间放一块夹板，角度在18°；在自然放松的状态下，将一根直杆放在骶骨上方，贴在胸椎脊柱上，杆往后倾斜的。",
          like: "喜欢玩电脑游戏。",
          need: "明明上班的时候老是觉得肩膀和脖子酸痛，很影响工作，希望可以缓解疼痛。",
          img: require("@/assets/上交叉/上交叉.png"),
        };
      }
    },
    getNowDemand() {
      if (this.trainingIndex == 1) {
        return [
          "上交叉",
          "脊柱侧弯静态评估",
          "脊柱侧弯动态评估（前屈试验）",
          "脊柱侧弯的训练与矫正",
        ];
      } else if (this.trainingIndex == 2) {
        return [
          "下交叉",
          "下交叉静态评估",
          "下交叉动态评估（前屈试验）",
          "下交叉的训练与矫正",
        ];
      } else if (this.trainingIndex == 3) {
        return [
          "认识理想姿势",
          "脊柱侧弯静态评估",
          "脊柱侧弯动态评估（前屈试验）",
          "脊柱侧弯的训练与矫正",
        ];
      } else if (this.trainingIndex == 4) {
        return [
          "下肢",
          "下肢静态评估",
          "下肢动态评估（前屈试验）",
          "下肢的训练与矫正",
        ];
      }
    },
  },
  methods: {
    goBack() {
      this.$router.replace("/lookIndex");
    },
    handleSelect(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-menu {
  width: 100%;
  display: flex;
  justify-content: center;
}
::v-deep .el-menu-item {
  flex: 1;
  text-align: center;
  &.is-active {
    background-color: #0d696a !important;
    border-bottom-color: transparent !important;
    font-weight: 700;
  }
}

.title {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 22px;
  margin: 20px 0;
}

.father {
  display: flex;
  justify-content: center;
  margin: 15px;
  margin-top: 0px;
  border-radius: 20px;
  padding: 15px;
  .components {
    width: 1200px;
    min-height: calc(100vh - 56px - 45px - 15px - 30px);
    padding: 0 20px;
  }
}
</style>
