<script setup>
import {  onMounted } from 'vue'
import { inject } from 'vue'
const $axios = inject('$axios')

onMounted(() => {
  console.log(`the component is now mounted.`)
  $axios.post('/api/user/login',{username:'22@qq.com',password:'123abc'})
    .then(response => {
      // 处理响应数据
      console.log(response.data.data)
    })
    .catch(error => {
      // 处理请求错误
      console.log(error)
    });
})
</script>

<template>
  <div>home</div>
</template>

<style scoped lang="scss">

</style>
