<template>
  <!-- <div>实训前测</div> -->
  <div>
    <div :class="getClass(nowSubject.id)">
      <div class="topic">题目：</div>
      <div class="topic-des">
        {{ nowSubject.des }}
      </div>
      <el-radio-group
        v-if="nowSubject.type === 'img'"
        v-model="nowSubject.select"
        size="medium"
        @change="showCorret = true"
      >
        <div class="item">
          <img class="box" src="../../assets/上交叉/上交叉选项1.png" alt="" />
          <el-radio :label="0"> A </el-radio>
        </div>
        <div class="item">
          <img class="box" src="../../assets/上交叉/上交叉选项2.png" alt="" />
          <el-radio :label="1"> B </el-radio>
        </div>
        <div class="item">
          <img class="box" src="../../assets/上交叉/上交叉选项3.png" alt="" />
          <el-radio :label="2"> C </el-radio>
        </div>
        <div class="item">
          <img class="box" src="../../assets/上交叉/上交叉选项4.png" alt="" />
          <el-radio :label="3"> D </el-radio>
        </div>
      </el-radio-group>
      <el-radio-group
        v-if="nowSubject.type === 'text'"
        v-model="nowSubject.select"
        size="medium"
        @change="showCorret = true"
      >
        <el-radio
          v-for="(i, index) in nowSubject.options"
          :key="index"
          :label="index"
          >{{ getOptions(index) }}.{{ i }}</el-radio
        >
      </el-radio-group>
      <div
        v-if="nowSubject.type === 'line'"
        style="display: flex; justify-content: center"
      >
        <!-- <img class="line" src="../../assets/脊柱侧弯/cobb.png" alt="" /> -->
        <div
          class="image-canvas-container"
          @mousemove="onMouseMove"
          @mouseup="onMouseUp"
          @mousedown="onMouseDown"
        >
          <!-- 图片元素 -->
          <img
            src="../../assets/脊柱侧弯/cobb.png"
            alt="image"
            class="line"
            ref="imageElement"
          />

          <!-- Canvas绘图 -->
          <canvas
            ref="canvas"
            class="canvas"
            :width="canvasWidth"
            :height="canvasHeight"
          ></canvas>
        </div>
      </div>
    </div>

    <div v-if="showCorret" class="correct">
      正确答案：{{ getOptions(nowSubject.correct) }}
    </div>
    <div class="ok">
      <!-- <div v-if="nowLook !== 1" @click="changeSub(-1)">上一题</div> -->
      <div v-if="nowLook < subJectList.length" @click="changeSub(1)">
        下一题
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCorret: false,
      nowLook: 1,
      subJectList: [
        {
          id: 1,
          type: "img",
          des: "以下哪张图片为上交叉综合征？",
          options: [
            "../../assets/上交叉/上交叉选项1.png",
            "../../assets/上交叉/上交叉选项2.png",
            "../../assets/上交叉/上交叉选项3.png",
            "../../assets/上交叉/上交叉选项4.png",
          ],
          correct: 2,
          select: null,
        },
        {
          id: 2,
          type: "text",
          des: "根据NASM-CES美国国家运动医学学会纠正性训练指南，上交叉综合征的特点是：",
          options: [
            "一种姿势异常综合征，特征为头部前伸、方肩和肌肉失衡",
            "一种姿势异常综合征，特征为头部前伸、圆肩和上肢肌肉失衡",
            "一种姿势变形综合征，特征为头部前伸、圆肩和上肢肌肉失衡",
            "一种姿势变形综合征，特征为头部前伸、方肩和肌肉失衡",
          ],
          correct: 0,
          select: null,
        },
        {
          id: 3,
          type: "line",
          des: "计算下图Cobb值",
        },
      ],
      drawing: false, // 是否正在绘制
      startX: 0, // 起始X坐标
      startY: 0, // 起始Y坐标
      canvasWidth: 500, // canvas 宽度（与图片相同）
      canvasHeight: 500, // canvas 高度（与图片相同）
    };
  },
  computed: {
    nowSubject() {
      return this.subJectList[this.nowLook - 1];
    },
    getClass() {
      return (id) => {
        return "type" + id;
      };
    },
    getOptions() {
      return (id) => {
        if (id === 0) {
          return "A";
        } else if (id === 1) {
          return "B";
        } else if (id === 2) {
          return "C";
        } else if (id === 3) {
          return "D";
        }
      };
    },
  },
  methods: {
    changeSub(data) {
      this.nowLook += data;
      this.showCorret = false;
    },
    // 鼠标按下时，开始绘制
    onMouseDown(event) {
      const rect = this.$refs.canvas.getBoundingClientRect();
      this.startX = event.clientX - rect.left;
      this.startY = event.clientY - rect.top;
      this.drawing = true;
    },

    // 鼠标移动时，绘制线条
    onMouseMove(event) {
      if (this.drawing) {
        const rect = this.$refs.canvas.getBoundingClientRect();
        const currentX = event.clientX - rect.left;
        const currentY = event.clientY - rect.top;
        this.drawLine(this.startX, this.startY, currentX, currentY);
        this.startX = currentX;
        this.startY = currentY;
      }
    },

    // 鼠标松开时，停止绘制
    onMouseUp() {
      this.drawing = false;
    },

    // 绘制线条的函数
    drawLine(x1, y1, x2, y2) {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      ctx.strokeStyle = "#FF0000"; // 设置线条颜色
      ctx.lineWidth = 2; // 设置线条宽度
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    },
  },
  mounted() {
    // 获取图片的尺寸，并调整canvas尺寸
    const imageElement = this.$refs.imageElement;
    if (imageElement) {
      if (imageElement.complete) {
        this.canvasWidth = imageElement.width;
        this.canvasHeight = imageElement.height;
      } else {
        imageElement.onload = () => {
          this.canvasWidth = imageElement.width;
          this.canvasHeight = imageElement.height;
        };
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.topic,
.topic-des {
  font-size: 24px;
}
.type2 {
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
.type1 {
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
  display: flex;
  justify-content: center;
  margin-top: 40px;
  cursor: pointer;
  div {
    width: 160px;
    height: 60px;
    color: #fff;
    background-color: #118f91;
    border-radius: 10px;
    font-size: 24px;
    text-align: center;
    line-height: 60px;
    margin: 0 10px;
  }
}
.line {
  width: 500px;
  height: 500px;
}

.image-canvas-container {
  position: relative;
  display: inline-block;
}

.canvas {
  position: absolute;
  top: 0;
  left: 0;
  cursor: crosshair;
}
</style>
