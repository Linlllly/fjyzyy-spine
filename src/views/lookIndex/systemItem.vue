<!-- SystemItem.vue -->
<template>
  <div class="system" @click="goTraining(trainingId)">
    <div class="img-b">
      <img :src="imageSrc" alt="" />
    </div>
    <div>{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    trainingId: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      default: "../../assets/testlogo.png",
    },
  },
  methods: {
    goTraining(id) {
      this.$emit("goTraining", id);
    },
  },
};
</script>

<style scoped>
/* SystemItem.vue的样式 */
.system {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.img-b {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
</style>
