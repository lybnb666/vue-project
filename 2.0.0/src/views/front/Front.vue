<script>
export default {
  data() {
    return {
      input:''
    };
  },
  methods:{
    index(){
      this.$router.push(("/front/index"));
    }
  }
};
</script>

<template>
  <div>
    <div style="display: flex;height: 90px;line-height: 60px" class="center">
      <div style="width: 200px"></div>
      <div class="center">
        <img style="width: 200px" src="@/assets/title.png">
      </div>
      <div class="search">
        <el-input style="width: 500px" v-model="input" placeholder="请输入内容"></el-input>
        <el-button style="margin-left: 10px;background-color: #740917;color: white" icon="el-icon-search">搜索</el-button>
      </div>
      <div class="center" style="width: 200px">
        <el-button>我的书架</el-button>
      </div>
      <div style="width: 200px"></div>
    </div>
    <div style="margin-top: 40px;background: #333333" class="center">
      <div style="width: 200px;height: 40px"></div>
      <div class="center" style="color: white;flex: 1">
        <el-button class="title" type="text">全部作品</el-button>
        <el-button class="title" type="text">排行</el-button>
        <el-button class="title" type="text">完本</el-button>
        <el-button class="title" type="text">免费</el-button>
      </div>
      <div style="width: 200px;height: 40px"></div>
    </div>

    <div style="background-color: #B3C0D1;height: 1200px">
      <div style="font-size: 50px;color: red;padding-top: 10px" class="center">人气推荐</div>
      <el-container class="center">
        <el-aside width="100px" style="height: 100%">
        </el-aside>
        <el-main>
          <div class="book" style="border-bottom-color: #333333;flex:1;height: 500px;">
            <div class="book-item" style="width:475px;background-color: #B3C0D1">
              <div style="width: 100%;cursor: pointer" @click="index">
                <el-image class="center" fit="cover" :src="require('../../assets/book/1.png')"></el-image>
              </div>
            </div>
            <div class="book-item" style="width:475px;background-color: #B3C0D1">
              <el-image class="center" fit="cover" :src="require('../../assets/book/2.jpg')"></el-image>
            </div>
            <div class="book-item" style="width:475px;background-color: #B3C0D1">
              <el-image class="center" fit="cover" :src="require('../../assets/book/3.jpg')"></el-image>
            </div>
          </div>
          <div class="book" style="border-bottom-color: #333333;flex:1;height: 500px;">
            <div class="book-item" style="width:475px;background-color: #B3C0D1">
              <div style="width: 100%;">
                <el-image class="center" fit="cover" :src="require('../../assets/book/4.jpg')"></el-image>
              </div>
            </div>
            <div class="book-item" style="width:475px;background-color: #B3C0D1">
              <el-image class="center" fit="cover" :src="require('../../assets/book/5.jpg')"></el-image>
            </div>
            <div class="book-item" style="width:475px;background-color: #B3C0D1">
              <el-image class="center" fit="cover" :src="require('../../assets/book/6.jpg')"></el-image>
            </div>
          </div>
        </el-main>
        <el-aside width="100px"></el-aside>
      </el-container>
    </div>

  </div>
</template>

<style>
.search{
  flex: 1;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.title{
  width: 100px;
  background-color: #333333;
  color: white;
  margin-left: 30px;
  margin-right: 30px;
  font-size: 18px;
}

.book{
  display: flex;
  flex-wrap: wrap;
  padding-left: 30rpx;
  padding-right: 30rpx;
}

.book-item{
  width:30%;
  border-radius: 20rpx;
  box-sizing:border-box;
  margin-bottom: 30rpx;
  border: 1rpx solid #bfbfbf;
  background-color: #ffffff;
  margin-left:10rpx;
  margin-right:10rpx;
  justify-content: center;
  align-items: center;
}

.book-item img{
  width: 240px;
  height: 300px;
}
</style>