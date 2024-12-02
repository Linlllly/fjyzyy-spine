<template>
  <div>
    <div class="container">
      <div
        v-for="(module, index) in modules"
        :key="index"
        :class="['module', { selected: module.selected }]"
        @click="selectModule(index)"
      >
        {{ module.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modules: [
        { name: '病例呈现', selected: true },
        { name: '实训前测', selected: false },
        { name: '实训目的', selected: false },
        { name: '实训内容', selected: false },
        { name: '矫正方案', selected: false },
        { name: '互助诊疗', selected: false },
        { name: '考核反馈', selected: false }
      ]
    }
  },
  methods: {
    selectModule(index) {
      if (this.modules[index].selected) {
        return
      }
      this.modules.forEach((module) => {
        module.selected = false
      })
      this.modules[index].selected = true
      this.$emit('moduleSelected', index)
      switch (index) {
        case 0:
          // 跳转到 casePresentation
          this.$router.push({ path: '/casePresentation' })
          break
        case 1:
          // 跳转到 preTraining
          this.$router.push({ path: '/preTraining' })
          break
        case 2:
          // 跳转到 practical
          this.$router.push({ path: '/practical' })
          break
        case 3:
          // 跳转到 IdealPosture
          this.$router.push({ path: '/content' })
          break
        case 4:
          // 跳转到 setRight
          this.$router.push({ path: '/setRight' })
          break
        case 5:
          // 跳转到 mutualAid
          this.$router.push({ path: '/mutualAid' })
          break
        case 6:
          // 跳转到 feedback
          this.$router.push({ path: '/feedback' })
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 56px;
  color: #fff;
}

.module {
  flex: 1;
  background-color: #118f91;
  border: 1px solid transparent;
  text-align: center;
  font-size: 20px;
  line-height: 50px;
  cursor: pointer;
}

.selected {
  background-color: #1c7877;
  font-weight: bold;
}
</style>
