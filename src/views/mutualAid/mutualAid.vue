<template>
  <!-- <div>互助诊疗</div> -->
  <div class="section_1 flex-col">
    <div class="system">
      <div class="img-b"><img src="../../assets/testlogo.png" alt="" /></div>
      <div>个案基本病史</div>
    </div>

    <div class="system">
      <div class="img-b"><img src="../../assets/testlogo.png" alt="" /></div>
      <div>问诊</div>
    </div>

    <div class="system">
      <div class="img-b"><img src="../../assets/testlogo.png" alt="" /></div>
      <div>体态静态评估</div>
    </div>

    <div class="system">
      <div class="img-b"><img src="../../assets/testlogo.png" alt="" /></div>
      <div>体态动态评估</div>
    </div>
    <div class="system">
      <div class="img-b"><img src="../../assets/testlogo.png" alt="" /></div>
      <div>治疗方法</div>
    </div>
    <div class="system">
      <div class="img-b"><img src="../../assets/testlogo.png" alt="" /></div>
      <div>设计运动处方</div>
    </div>
  </div>
</template>

<script>
export default {};
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
      background-image: url("../../../public/static/normal/bg.png");
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
