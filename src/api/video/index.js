import axios from 'axios'


// 创建视频
const postVideo = (form) => axios.post('/api/v1/video', form).then(response => response.data);

// 读取视频详情
const getVideo = (id) => axios.get(`/api/v1/video/${id}`).then(response => response.data);

// 读取视频列表
const getVideos = () => axios.get('/api/v1/videos').then(response => response.data);

// 注册用户
const userRegister = (form) => axios.post('/api/v1/user/register', form).then(response => response.data);

// 用户登陆
const userLogin = (form) => axios.post('api/v1/user/login', form).then(response => response.data);

// 获得用户资料 顺便可以获取用户登陆状态
const userStatus = () => axios.get('/api/v1/user/me').then(response => response.data);

// 注销
const userLogout = () => axios.delete('/api/v1/user/logout').then(response => response.data);

export {
  getVideo,
  getVideos,
  postVideo,
  userRegister,
  userLogin,
  userStatus,
  userLogout,
}
