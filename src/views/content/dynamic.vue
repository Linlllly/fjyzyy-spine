<template>
  <!-- <div>实训内容-理想姿势</div> -->
  <div class="main">
    <video
      class="canvasContainer"
      src="../../assets/脊柱侧弯/视频1.mp4"
      controls
    ></video>

    <div class="box_10 flex-col justify-between">
      <div class="text-wrapper_6 flex-col type1">
        <div class="topic">题目：</div>
        <div class="topic-des">
          请你判断视频中的这名同学属于哪个类型的侧弯？
        </div>
        <el-radio-group
          v-model="radio"
          size="medium"
          @change="showCorret = true"
        >
          <el-radio :label="1">A.胸椎C型</el-radio>
          <el-radio :label="2">B.腰椎倒C型</el-radio>
          <el-radio :label="3">C.腰椎C型弯</el-radio>
          <el-radio :label="4">D.胸椎倒C型</el-radio>
        </el-radio-group>
        <div v-if="showCorret" class="correct">正确答案：CD</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show3D',
  data() {
    return {
      radio: '',
      showCorret: false
    }
  },
  mounted() {},
  methods: {
    //
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
.canvasContainer {
  width: 480px;
  height: 320px;
  // background-color: pink;
}

.box_10 {
  flex: 1;
  margin-left: 20px;
}
.text-wrapper_6 {
  border-radius: 8px;
  border: 1px solid rgba(151, 151, 151, 1);
  padding: 10px;
  min-height: 700px;
  font-size: 24px;
}
.topic,
.topic-des {
  font-size: 24px;
}
.type1 {
  ::v-deep .el-radio-group {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 0;
    .el-radio {
      margin: 10px 0;
      .el-radio__label {
        font-size: 20px;
      }
    }
  }
}
.correct {
  width: 160px;
  height: 60px;
  margin: 80px auto 0;
  color: #118f91;
  border: 1px solid #118f91;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
</style>
