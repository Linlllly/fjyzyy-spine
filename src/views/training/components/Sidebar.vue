<template>
  <div class="embedded-sidebar">
    <ul class="sidebar-menu">
      <li @click="navigate(4)" :class="{ active: activePage === 4 }">
        <i class="fas fa-cogs"></i>
        <span>实训要求</span>
      </li>
      <li @click="navigate(0)" :class="{ active: activePage === 0 }">
        <i class="fas fa-cogs"></i>
        <span>理想姿势(3D)</span>
      </li>
      <li @click="navigate(1)" :class="{ active: activePage === 1 }">
        <i class="fas fa-chart-line"></i>
        <span>静态评估</span>
      </li>
      <li @click="navigate(2)" :class="{ active: activePage === 2 }">
        <i class="fas fa-chart-bar"></i>
        <span>动态评估</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePage: 4
    }
  },
  methods: {
    navigate(page) {
      this.activePage = page
      switch (page) {
        case 0:
          // 跳转到 casePresentation
          this.$router.push({ path: '/IdealPosture' })
          break
        case 1:
          // 跳转到 preTraining
          this.$router.push({ path: '/static' })
          break
        case 2:
          // 跳转到 practical
          this.$router.push({ path: '/dynamic' })
          break
        case 4:
          // 跳转到 practical
          this.$router.push({ path: '/content' })
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.embedded-sidebar {
  width: 200px;
  background-color: #fff;
}

.sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-menu li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  cursor: pointer;
  background-color: #1c7877;
  color: rgba(255, 255, 255, 0.6);
}

.sidebar-menu li i {
  margin-right: 10px;
}

.sidebar-menu li span {
  flex-grow: 1;
}

.sidebar-menu li.active {
  background-color: #47b8b7;
  color: #fff;
}
</style>
