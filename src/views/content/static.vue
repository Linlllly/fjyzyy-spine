<template>
  <!-- <div>实训内容-静态评估</div> -->
  <div class="main">
    <div class="canvasContainer" ref="canvasContainer"></div>
    <!-- <img
      class="canvasContainer2"
      v-if="selectedOption === 1"
      src="../../assets/脊柱侧弯/正面.png"
      alt=""
    />
    <img
      class="canvasContainer2"
      v-if="selectedOption === 2"
      src="../../assets/脊柱侧弯/侧面.png"
      alt=""
    />
    <img
      class="canvasContainer2"
      v-if="selectedOption === 3"
      src="../../assets/脊柱侧弯/背面.png"
      alt=""
    /> -->
    <div class="box_10 flex-col justify-between">
      <div class="look-title">
        <div
          class="correct"
          :class="{ ok: selectedOption === 1 }"
          @click="selectOption(1)"
        >
          正面观
        </div>
        <div
          class="correct"
          :class="{ ok: selectedOption === 2 }"
          @click="selectOption(2)"
        >
          侧面观
        </div>
        <div
          class="correct"
          :class="{ ok: selectedOption === 3 }"
          @click="selectOption(3)"
        >
          背面观
        </div>
      </div>
      <div class="text-wrapper_6 flex-col">
        <span class="paragraph_1"
          >静态评估是患者站立位，双手自然下垂，观察<br />一、双肩是否等高。<br />二、双侧肩胛下角是否等高。<br />三、双侧骼峭是否等高。<br />四、两侧手臂与腰线的距离是否等宽。<br />五、两侧的腰线是否等长。<br />六、对比两侧背部、腰部是否有一侧异常隆起。</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// 其他需要的 Three.js 依赖

export default {
  name: "show3D",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      selectedOption: 1,
    };
  },
  mounted() {
    this.initThree();
    this.loadModel();
    this.animate();
  },
  methods: {
    //-------导入外部obj
    initThree() {
      //创建场景
      this.scene = new THREE.Scene();
      //环境光 无方向
      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
      this.scene.add(ambientLight);
      //创建坐标轴辅助器(红x绿y蓝z 选择y轴朝上是约定俗称)
      var axesHelper = new THREE.AxesHelper(15);
      this.scene.add(axesHelper);
      //创建摄像机(视角：较小-望远镜，较大-区域广、视图宽高比(宽/长)、相机可见最近、相机可见最远)
      this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      // 设置摄像机的位置
      this.camera.position.z = 5;
      //创建渲染器
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      //挂节点
      this.renderer.setSize(480, 700);
      this.renderer.setClearColor("#e7d185", 1);
      this.$refs.canvasContainer.appendChild(this.renderer.domElement);
      //创建控制器
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true; // 启用阻尼效果，使动画更平滑
      this.controls.dampingFactor = 0.1; // 阻尼系数，调整阻尼的强度
      this.controls.update(); // 更新控制器的尺寸
    },
    loadModel() {
      let that = this;
      const objLoader = new OBJLoader();
      const fbxLoader = new FBXLoader();
      // const mtlLoader = new MTLLoader();
      // mtlLoader.load("/static/3d/rose.mtl", (materials) => {
      //   console.log("加载材质");
      //   materials.preload();
      //   objLoader.setMaterials(materials);
      //   objLoader.load(
      //     "/static/3d/rose.obj",
      //     //加载完成
      //     function (obj) {
      //       console.log("加载模型");
      //       obj.position.set(0, 0, 0); //设置模型位置
      //       obj.scale.set(0.03, 0.03, 0.03); //缩放大小比
      //       that.scene.add(obj);
      //     },
      //     //进度条
      //     function (xhr) {
      //       // console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      //     },
      //     //报错
      //     function (error) {
      //       console.log(error);
      //     }
      //   );
      // });

      // objLoader.load(
      //   "/static/3d/rose.obj",
      //   //加载完成
      //   function (obj) {
      //     console.log("加载模型");
      //     obj.position.set(0, 0, 0); //设置模型位置
      //     obj.scale.set(0.03, 0.03, 0.03); //缩放大小比
      //     that.scene.add(obj);
      //   },
      //   //进度条
      //   function (xhr) {
      //     // console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      //   },
      //   //报错
      //   function (error) {
      //     console.log(error);
      //   }
      // );

      // fbxLoader.load(
      //   "/static/3d/男人体.FBX", // FBX 文件路径
      //   // 加载完成后的回调函数
      //   function (object) {
      //     console.log("FBX 模型加载完成");

      //     // 设置模型位置
      //     object.position.set(0, 0, 0);

      //     // 设置模型缩放
      //     object.scale.set(0.03, 0.03, 0.03);

      //     // 添加到场景中
      //     that.scene.add(object);
      //   },

      //   // 加载进度回调（可选）
      //   function (xhr) {
      //     // console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      //   },

      //   // 错误回调（可选）
      //   function (error) {
      //     console.error("加载 FBX 模型出错:", error);
      //   }
      // );
    },
    animate() {
      requestAnimationFrame(this.animate);
      // 在每一帧中更新动画或交互逻辑
      // 在更新场景之前更新控制器
      // this.controls.update()

      /**
      // 自动旋转设置相机的位置和目标点
      const radius = 5 // 旋转半径
      const speed = 0.0001 // 旋转速度
      const time = Date.now() * speed //基于当前时间的变量
      const x = Math.sin(time) * radius //相机在x轴上的位置 x为0不许左右移动
      const y = Math.cos(time) * radius //相机在y轴上的位置 y为0不许上下移动
      const z = 1 // 相机距离场景的深
      this.camera.position.set(x, y, z) //设置相机的位置
      this.camera.lookAt(this.scene.position) //将相机的视线朝向场景的中心点
       */

      this.renderer.render(this.scene, this.camera);
    },
    selectOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
.canvasContainer {
  width: 480px;
  height: 700px;
}
.canvasContainer2 {
  width: 300px;
  height: 650px;
}
.box_10 {
  flex: 1;
  margin-left: 20px;
}
.text-wrapper_6 {
  border-radius: 8px;
  border: 1px solid rgba(151, 151, 151, 1);
  padding: 10px;
  min-height: 600px;
}
.paragraph_1 {
  width: 636px;
  height: 510px;
  overflow-wrap: break-word;
  color: rgba(34, 34, 34, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  line-height: 48px;
  margin: 28px 0 0 48px;
}
.look-title {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  .correct {
    width: 160px;
    height: 60px;
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
    color: #fff;
    background-color: #118f91;
    border-radius: 10px;
    font-size: 24px;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
  }
}
</style>
