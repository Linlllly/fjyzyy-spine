<template>
  <div class="app">
    <!-- 头 -->
    <Header @moduleSelected="handleModuleSelected"></Header>
    <div class="title">
      <el-button type="primary" size="mini" plain @click="goBack"
        >返回</el-button
      >
      <span style="margin: 0 40px">{{
        index === 1
          ? '上交叉'
          : index === 2
          ? '下交叉'
          : index === 3
          ? '脊柱侧弯'
          : '下肢'
      }}</span>
      <!-- <el-button style="visibility: hidden" type="primary" size="mini" plain
        >返回</el-button
      > -->
    </div>
    <!-- 导航栏 -->
    <div class="father">
      <Sidebar v-if="headerIndex === 3" class="sidebar-container"></Sidebar>
      <!-- 内容 -->
      <div class="cs">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: { Header, Sidebar },
  name: 'training',
  data() {
    return { index: null, headerIndex: -1 }
  },
  mounted() {
    this.index = this.$store.getters.getTrainingIndex
  },
  methods: {
    handleModuleSelected(index) {
      this.headerIndex = index // 获取子组件传递的index值，并赋值给父组件中的headerIndex变量
    },
    goBack() {
      this.$router.replace('/lookIndex')
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  height: 45px;
  line-height: 45px;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
}
.father {
  display: flex;
  justify-content: center;
  margin: 15px;
  margin-top: 0px;
  border-radius: 20px;
  padding: 15px;
  .cs {
    // flex: 1;
    width: 1200px;
    // header title mgbottom pd
    min-height: calc(100vh - 56px - 45px - 15px - 30px);
    padding: 0 20px;
  }
}
</style>
