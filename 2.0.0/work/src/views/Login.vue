<script>

export default {
  name: "Login",
  data(){
    return{
      user:{}
    }
  },
  methods:{
    login(){
      this.request.post("/user/login",this.user).then(res=>{
        if(!res){
          this.$message.error("用户名或密码错误")
        }
        else{
          if(this.user.username == "admin"){
            this.$router.push(("/"))
          }
          else{
            this.$router.push(("/front/home"))
          }
        }
      })
    }
  }
}

</script>

<template>
  <div class="wrapper">
    <div style="margin: 200px auto;background-color: #fff;width: 350px;height: 300px;padding: 20px;order-radius: 10px ">
      <div style="margin: 20px 0;text-align: center;font-size: 24px"><b>登 录</b></div>
      <el-input size="medium" style="margin: 10px 0" prefix-icon="el-icon-user" v-model="user.username"></el-input>
      <el-input size="medium" style="margin: 10px 0" prefix-icon="el-icon-lock" show-password v-model="user.password"></el-input>
      <div style="margin: 10px 0;text-align: right">
        <el-button type="primary" size="small" autocomplete="off" @click="login">登录</el-button>
        <el-button type="warning" size="small" autocomplete="off">注册</el-button>
      </div>
    </div>
  </div>
</template>

<style>
.wrapper{
  height: 100vh;
  background-image:linear-gradient(to bottom right,#FC466B, #3F5EFB);
  overflow: hidden;
}
</style>