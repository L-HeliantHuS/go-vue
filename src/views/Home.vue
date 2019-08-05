<template>
  <div class="home">

    <el-row :gutter="20" style="flex: max-content">
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="4" v-for="video in videos" :key="video.id">
        <el-card class="card">
          <img src="/封面.jpg" class="pic">
          <p class="card-title">
            <span><strong>标题:</strong>{{ video.title }}</span>
          </p>
          <p class="card-info">
            <span><strong>详细:</strong>{{ video.info }}</span>
          </p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import * as API from '../api/video'

  export default {
    name: 'home',
    components: {},

    data() {
      return {
        videos: []
      }
    },

    methods: {

    },

    created() {
      API.getVideos().then((response) => {
        this.videos = response.data;
      })
    }
  }
</script>

<style>
  .pic {
    width: 100%;
  }

  .card {
    margin: 10px;
    position: static;
    top: 70px;
  }

  .card-title {
    margin-bottom: 10px;
    color: #F56C6C;
  }

  .card-info {
    color: #409EFF;
  }
</style>
