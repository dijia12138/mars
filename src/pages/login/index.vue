<script setup>
import { ref } from "vue";
const username = ref("");
const password = ref(null);
</script>

<template>
  <div class="f-box">
    <h3 style="margin: 18px 193px">账号登录</h3>
    <el-form label-width="auto">
      <el-form-item label="账号：">
        <el-input
          type="text"
          v-model="username"
          style="width: 380px; height: 35px"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input
          type="password"
          v-model="password"
          style="width: 380px; height: 35px"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-button type="primary" style="width: 75%; margin: 0 56px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<style scoped>
.f-box {
  width: 500px;
  height: 300px;
  margin: 200px auto;
}
</style>
