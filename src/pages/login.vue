<script setup lang="ts">
import { reactive } from "vue";
import background from '@/assets/background.svg';

const loginData = reactive({
  userAccount: "",
  userPassword: ""
});
</script>

<template>
  <div class="flex justify-center items-center h-screen" :style="{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }">
    <div class="panel">
      <a-form :model="loginData" size="large" auto-label-width :style="{ width: '400px' }">
        <a-form-item field="userAccount" tooltip="请输入账号" label="账号">
          <a-input v-model="loginData.userAccount" placeholder="请输入账号..." />
        </a-form-item>
        <a-form-item field="userPassword" tooltip="请输入密码" label="密码">
          <a-input v-model="loginData.userPassword" placeholder="请输入密码..." type="password"/>
        </a-form-item>
        <a-form-item class="no-bottom-margin">
          <a-button html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style>
.panel {
  @apply w-auto h-auto border border-slate-100 shadow-md p-24 inline-block;
}

.no-bottom-margin {
  margin-bottom: 0 !important;
}
</style>