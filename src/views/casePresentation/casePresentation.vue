<template>
  <div>
    <!-- <div>病例呈现</div> -->
    <div class="box">
      <div class="left-img">
        <!-- <img src="" alt="" /> -->
      </div>
      <div class="right-content">
        <div><strong>基本信息：</strong>明明，男，23岁。</div>
        <div><strong>诊断：</strong>上交叉综合征</div>
        <div>
          <strong>评估：</strong
          >耳垂超过肩峰一指的距离；在自然放松状态下，找到肩胛骨内侧缘与脊柱之间能够放进5指；在自然放松状态下，低头找到颈椎上凸起的一块骨头和第七胸椎棘突之间放一块夹板，角度在18°；在自然放松的状态下，将一根直杆放在骶骨上方，贴在胸椎脊柱上，杆往后倾斜的。
        </div>
        <div><strong>兴趣爱好：</strong>喜欢玩电脑游戏。</div>
        <div>
          <strong>诉求：</strong
          >明明上班的时候老是觉得肩膀和脖子酸痛，很影响工作，希望可以缓解疼痛。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 其他需要的 Three.js 依赖

export default {
  name: 'show3D',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
.box {
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
