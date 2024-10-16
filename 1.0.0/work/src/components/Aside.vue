<script>

</script>

<template>
  <el-menu :default-openeds="['1', '3']" style="min-height: 100%;" background-color="rgb(48,65,86)"
           text-color="#fff">
    <div style="height:60px;line-height: 60px;text-align: center;">
      <img src="../assets/logo.png" alt="" style="width: 20px; position: relative; top:3px; margin-right:5px ;">
      <b style="color:white">后台管理系统</b>
    </div>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>主页</template>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>系统管理</template>
      <el-menu-item-group>
        <el-menu-item index="2-2">用户管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style>

</style>