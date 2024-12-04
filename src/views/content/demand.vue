<template>
  <!-- <div>实训说明</div> -->
  <div class="demand-box">
    <div class="texts" v-for="i in demand">{{ i }}</div>
  </div>
</template>

<script>
export default {
  props: {
    demand: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    //
  },
};
</script>

<style lang="scss" scoped>
.demand-box {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(151, 151, 151, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.texts {
  padding: 15px;
  color: rgba(17, 143, 145, 1);
  line-height: 48px;
  font-size: 24px;
}
</style>
