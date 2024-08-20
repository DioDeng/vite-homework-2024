<template>
  <section class="container-lg py-5">
    <NavbarModal />
    <RouterView />
  </section>
  <MessageTost />
</template>

<script setup>
import MessageTost from './components/helpers/MessageTost.vue'
import NavbarModal from './components/NavbarModal.vue'
</script>