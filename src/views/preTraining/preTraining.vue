<template>
  <!-- <div>实训前测</div> -->
  <div>
    <div class="type1" v-if="type === 1">
      <div class="topic">题目：(文字)</div>
      <div class="topic-des">
        根据国际脊柱侧弯研究学会（SRS Scoliosis Research
        Society）认为放射线片的Cobb角大于等于____________定义为脊柱侧弯。
      </div>
      <el-radio-group v-model="radio" size="medium" @change="showCorret = true">
        <el-radio :label="1">备选项</el-radio>
        <el-radio :label="2">备选项</el-radio>
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="4">备选项</el-radio>
      </el-radio-group>
    </div>
    <div class="type2" v-if="type === 2">
      <div class="topic">题目：(图片)</div>
      <div class="topic-des">以下哪张图片为上交叉综合征？</div>
      <el-radio-group
        v-model="radio2"
        size="medium"
        @change="showCorret2 = true"
      >
        <div class="item">
          <div class="box"></div>
          <el-radio :label="1"> 备选项 </el-radio>
        </div>
        <div class="item">
          <div class="box"></div>
          <el-radio :label="2"> 备选项 </el-radio>
        </div>
        <div class="item">
          <div class="box"></div>
          <el-radio :label="3"> 备选项 </el-radio>
        </div>
        <div class="item">
          <div class="box"></div>
          <el-radio :label="4"> 备选项 </el-radio>
        </div>
      </el-radio-group>
    </div>
    <div class="type3" v-if="type === 3">
      <div class="topic">题目：(画线题)</div>
      <div class="topic-des">没有示例 暂缓</div>
    </div>
    <!-- --------------- -->
    <div v-if="showCorret" class="correct">正确答案：A</div>
    <div v-if="showCorret2" class="correct">正确答案：A</div>
    <div class="ok" @click="nextOne">下一题</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '',
      showCorret: false,
      radio2: '',
      showCorret2: false,
      type: 1
    }
  },
  methods: {
    nextOne() {
      this.type += 1
    }
  }
}
</script>

<style lang="scss" scoped>
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
      width: 160px;
      height: 420px;
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
