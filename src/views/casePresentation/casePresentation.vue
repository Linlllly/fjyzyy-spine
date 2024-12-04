<template>
  <div>
    <!-- <div>病例呈现</div> -->
    <div class="presentation">
      <div class="left-img">
        <img :src="caseData.img" alt="" />
      </div>
      <div class="right-content">
        <div><strong>基本信息：</strong>{{ caseData.info }}</div>
        <div><strong>诊断：</strong>{{ caseData.persent }}</div>
        <div><strong>评估：</strong>{{ caseData.assessment }}</div>
        <div><strong>兴趣爱好：</strong>{{ caseData.like }}</div>
        <div><strong>诉求：</strong>{{ caseData.need }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// 其他需要的 Three.js 依赖

export default {
  name: "casePresentation",
  props: {
    caseData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
.presentation {
  display: flex;
  align-items: center;
  .left-img {
    flex: 0 0 auto;
    width: 480px;
    height: 360px;
    background-color: #ccc;
    margin-right: 20px;
  }
  .right-content {
    font-size: 24px;
    line-height: 40px;
  }
}
</style>
