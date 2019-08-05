<template>
  <div class="post-video">
    <div v-if="isloading">
      <h2>欢迎你来投稿！</h2>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input type="text" v-model="form.title" placeholder="请输入投稿标题"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="info">
          <el-input type="textarea" v-model="form.info" placeholder="请输入投稿描述"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round @click="onSubmit('form')">立即投稿</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import * as API from '../api/video'

  export default {
    name: "PostVideo",
    beforeCreate() {
      API.userStatus().then(response => {
        if (response.status !== 0) {
          this.$router.push('/user/login')
        } else {
          this.isloading = false
        }
      })
    },
    data() {
      return {
        isloading: true,
        form: {
          title: '',
          info: ''
        },
        rules: {
          title: [
            {required: true, message: '请输入投稿标题', trigger: 'blur'},
            {min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur'}
          ],
          info: [
            {required: false, message: '请输入投稿描述', trigger: 'blur'}
          ],
        }

      }
    },
    methods: {
      onSubmit(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            API.postVideo(this.form).then(response => {
              this.$notify({
                title: "投稿成功",
                message: `你投稿的视频ID为: ${response.data.id}`,
                type: 'success'
              });
              this.$router.push('/')
            }).catch(error => {
              this.$notify.error({
                title: "投稿失败",
                message: "检查你填写的内容."
              })
            })
          } else {
            return false
          }
        });
      }
    },
  }
</script>

<style scoped>

</style>
