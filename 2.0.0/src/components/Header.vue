<script>
 export default {
   name: "Header",
 }
</script>

<template>
  <div>
    <el-dropdown style="width: 100px">
      <span style="font-size: 18px;">管理员</span><i class="el-icon-setting"
                                                     style="margin-left: 5px;font-size: 18px;"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/login" style="text-decoration: none">退出</router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style>

</style>