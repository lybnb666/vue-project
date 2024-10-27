<template>
  <div>
    <div style="font-size: 50px;color: red;margin: 50px" class="center">小说章节</div>
    <div class="center">
      <div>
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              prop="item"
              label="章节名称"
              width="300">
          </el-table-column>
          <el-table-column
              prop="time"
              label="更新时间"
              width="300">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="center" style="margin-top: 20px">
      <el-button @click="read">立即阅读</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        item: '第一章:初来驾到',
        time: '2024-10-26'
      }, {
        item: '第二章：刚来就翻盘',
        time: '2024-10-26'
      }, {
        item: '第三章：不靠谱的李富贵',
        time: '2024-10-27'
      }]
    }
  },
  methods:{
    read(){
      this.$router.push("/front/index/read")
    }
  }
}
</script>

<style>
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>