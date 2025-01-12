<script setup lang="ts">
import {reactive} from "vue";

const loginData = reactive({
  userAccount:"",
  userPassword:""
})
</script>

<template>
  <div class="pannel">
    <a-form :model="loginData" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="name" tooltip="Please enter username" label="Username">
        <a-input
            v-model="form.name"
            placeholder="please enter your username..."
        />
      </a-form-item>
      <a-form-item field="post" label="Post">
        <a-input v-model="form.post" placeholder="please enter your post..." />
      </a-form-item>
      <a-form-item field="isRead">
        <a-checkbox v-model="form.isRead"> I have read the manual </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped>
.pannel{
  @apply
}
</style>