<template>
  <el-container style="min-height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <Aside />
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <Header/>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>

import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";

export default {
  data() {
    return {

    }
  },
  components:{
    Aside,
    Header
  },
  methods: {

  }
};
</script>

<style>
.headerBg{
  background: #ccc!important;
}
</style>