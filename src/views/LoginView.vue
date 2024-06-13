<script setup>
import { inject, reactive } from 'vue'
import {  useRouter } from 'vue-router'

const router = useRouter()
const $axios = inject('$axios')
const form = reactive({
  name: '',
  password:'',
})

const onSubmit = () => {
  $axios.post('/api/user/login',{username:form.name,password:form.password})
    .then(response => {
      // 处理响应数据
      console.log(response.data)
      if(response.data.code === 200){
        router.push('/')
      }else if(response.data.code === -1){
        router.push('/register')
      }

    })
    .catch(error => {
      // 处理请求错误
      console.log(error)
    });
  console.log('submit!')
}
</script>

<template>
<div class="login-box">
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="用户名">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="密码" type="password">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button>注册</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<style scoped lang="scss">
.login-box{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>