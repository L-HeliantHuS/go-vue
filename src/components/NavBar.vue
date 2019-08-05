<template>
  <div class="narbar">
    <el-menu class="el-menu-demo" mode="horizontal" router :default-active="$route.path">  <!-- 根据$route.path来动态激活标签 -->
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/pushvideo">投稿</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-submenu index="2" class="users">
        <template slot="title" v-if="!isLogin">登陆/注册</template>
        <template slot="title" v-text="nickname" v-if="isLogin">NO.{{ id }} | {{ nickname }}</template>
        <el-menu-item index="/user/login" v-show="!isLogin">登陆</el-menu-item>
        <el-menu-item index="/user/register" v-show="!isLogin">注册</el-menu-item>
        <el-menu-item @click="logout" v-show="isLogin">注销</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import * as API from '../api/video'

  export default {
    name: 'NavBar',
    data() {
      return {
        isLogin: false,
        id: "",
        nickname: "",
      }
    },
    beforeCreate() {
      API.userStatus().then(response => {
        if (response.data !== null) {
          this.isLogin = true;
          this.id = response.data.id;
          this.nickname = response.data.nickname;
        }
      })
    },
    methods: {
      logout() {
        API.userLogout().then(() => {
          this.$router.push('/');
          location.reload()
        })
      }
    }
  }
</script>

<style scoped>
  .users{
    float: right;
  }
</style>
