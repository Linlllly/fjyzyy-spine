<!-- SystemItem.vue -->
<template>
  <div class="system">
    <div class="img-b">
      <img :src="imageSrc" alt="" />
    </div>
    <div>{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      default: require("@/assets/testlogo.png"),
    },
  },
  methods: {},
};
</script>

<style scoped>
/* SystemItem.vue的样式 */
.system {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  font-size: 24px;
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
</style>
