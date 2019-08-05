<template>
  <div id="app">

    <el-container style="margin: 0 50px">
      <el-header>
        <NavBar></NavBar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
