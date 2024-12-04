<template>
  <!-- <div>实训说明</div> -->
  <div class="flex">
    <div class="embedded-sidebar">
      <ul class="sidebar-menu">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          @click="navigate(index)"
          :class="{ active: activeItemsIndex === index }"
        >
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <Demand v-if="activeItemsIndex === 0" :demand="demand" />
      <IdealPosture v-if="activeItemsIndex === 1" />
      <Sataic v-if="activeItemsIndex === 2" />
      <Dynamic v-if="activeItemsIndex === 3" />
    </div>
  </div>
</template>

<script>
import Demand from "./demand.vue";
import IdealPosture from "./idealPosture.vue";
import Sataic from "./static.vue";
import Dynamic from "./dynamic.vue";

export default {
  props: {
    demand: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeItemsIndex: 0,
      menuItems: [
        { label: "实训要求" },
        { label: "理想姿势(3D)" },
        { label: "静态评估" },
        { label: "动态评估" },
      ],
    };
  },
  components: {
    Demand,
    IdealPosture,
    Sataic,
    Dynamic,
  },
  methods: {
    navigate(index) {
      this.activeItemsIndex = index;
      // this.$router.push({ path: this.menuItems[index].path });
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  height: 100%;
  .flex-1 {
    flex: 1;
    height: 100%;
  }
}
.embedded-sidebar {
  width: 200px;
  background-color: #fff;
  margin-right: 20px;
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
// .section_1 {
//   border-radius: 8px;
//   width: 100%;
//   height: 100%;
//   border: 1px solid rgba(151, 151, 151, 1);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }
// .text-wrapper_2 {
//   padding: 10px;
// }
// .text_7 {
//   color: rgba(17, 143, 145, 1);
//   font-size: 24px;

//   line-height: 48px;
// }
</style>
