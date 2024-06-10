<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {  onMounted } from 'vue'
import axios from 'axios'

onMounted(() => {
  console.log(`the component is now mounted.`)
  axios.post('/api/user/login',{username:'22@qq.com',password:'123abc'})
    .then(response => {
      // 处理响应数据
      console.log(response)
    })
    .catch(error => {
      // 处理请求错误
      console.log(error)
    });
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
