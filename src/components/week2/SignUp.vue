<template>
  <section class="d-flex justify-content-center">
    <div class="card border-0" style="width: 24rem">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="userData.email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="userData.password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInputText"
          placeholder="Nick Name"
          v-model="userData.nickname"
        />
        <label for="floatingInputText">Nick Name</label>
      </div>
      <button class="btn btn-dark" type="button" @click="signUp" v-if="status">
        <span role="status">Sign Up</span>
      </button>
      <button class="btn btn-dark" type="button" disabled v-else>
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span role="status">Loading...</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'
import { apiPostSignup } from '../../assets/javascript/api'
const emitter = inject('emitter')

const status = ref(true)
const userData = ref({})
const signUp = () => {
  status.value = false
  apiPostSignup(userData.value)
    .then((res) => {
      console.log(res)
      status.value = true
      emitter.emit('messageModal', {
        status: true,
        message: '註冊成功'
      })
    })
    .catch((err) => {
      status.value = true
      emitter.emit('messageModal', {
        status: false,
        message: err.response.data.message
      })
    })
}
</script>