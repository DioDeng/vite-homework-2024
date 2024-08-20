<template>
  <div class="list-group mb-3">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/week1" class="nav-link text-white">WEEK1</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/week2" class="nav-link text-white">WEEK2</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/week3" class="nav-link text-white">WEEK3</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route1 = useRoute()
onMounted(() => {
  console.log(route1.path)
})
</script>