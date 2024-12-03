<template>
  <!-- <div>矫正方案</div> -->
  <div class="type2">
    <div class="topic">题目：</div>
    <div class="topic-des">
      针对壮壮同学腰椎C型弯，请你选择下面适合他的训练动作（）
    </div>
    <el-radio-group v-model="radio2" size="medium" @change="showCorret2 = true">
      <div class="item">
        <!-- <div class="box"></div> -->
        <video
          class="box"
          src="http://www.baidu.com/link?url=xqk_ml__IUX8rrL3HsDDL4Zdh1R9Ai5nrAHCgv7EAUwZx67CNPXrT4dWHV3Ps6O6cSJ2M4ZLvQRswFtiCb56S2kPh1dGOfxy2yfqf2JAwHm"
          controls
        ></video>

        <el-radio :label="1"> A.训练腹肌力量 </el-radio>
      </div>
      <div class="item">
        <video
          class="box"
          src="http://www.baidu.com/link?url=xqk_ml__IUX8rrL3HsDDL4Zdh1R9Ai5nrAHCgv7EAUwZx67CNPXrT4dWHV3Ps6O6cSJ2M4ZLvQRswFtiCb56S2kPh1dGOfxy2yfqf2JAwHm"
          controls
        ></video>
        <el-radio :label="2"> B.牵伸右侧腰方肌 </el-radio>
      </div>
      <div class="item">
        <video
          class="box"
          src="http://www.baidu.com/link?url=xqk_ml__IUX8rrL3HsDDL4Zdh1R9Ai5nrAHCgv7EAUwZx67CNPXrT4dWHV3Ps6O6cSJ2M4ZLvQRswFtiCb56S2kPh1dGOfxy2yfqf2JAwHm"
          controls
        ></video>
        <el-radio :label="3"> C.训练猫式呼吸 </el-radio>
      </div>
      <div class="item">
        <video
          class="box"
          src="http://www.baidu.com/link?url=xqk_ml__IUX8rrL3HsDDL4Zdh1R9Ai5nrAHCgv7EAUwZx67CNPXrT4dWHV3Ps6O6cSJ2M4ZLvQRswFtiCb56S2kPh1dGOfxy2yfqf2JAwHm"
          controls
        ></video>
        <el-radio :label="4"> D.牵伸左侧前锯肌 </el-radio>
      </div>
    </el-radio-group>

    <div v-if="showCorret2" class="correct">正确答案：A</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio2: '',
      showCorret2: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.topic,
.topic-des {
  font-size: 24px;
}
.type2 {
  ::v-deep .el-radio-group {
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .el-radio {
      margin: 10px 0;
      .el-radio__label {
        font-size: 20px;
      }
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .box {
      width: 240px;
      height: 160px;
      background-color: #ccc;
      margin-bottom: 10px;
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
.ok {
  width: 160px;
  height: 60px;
  margin: 40px auto 0;
  color: #fff;
  background-color: #118f91;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
</style>
