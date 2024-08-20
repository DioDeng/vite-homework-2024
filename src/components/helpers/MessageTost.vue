<template>
  <div
    class="modal fade"
    ref="messageRef"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style="z-index: 99999"
  >
    <div class="modal-dialog">
      <div
        class="alert border-2 rounded-0"
        :class="[status ? 'alert-dark border-dark' : 'alert-danger border-danger']"
      >
        <i class="bi me-2" :class="[status ? 'bi-check-square' : 'bi-exclamation-triangle']"></i
        >{{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, inject } from 'vue'
import { Modal } from 'bootstrap'

const emitter = inject('emitter')

const messageRef = ref(null)
const messageModal = ref('')
const message = ref('')
const status = ref(false)

const openModal = () => {
  messageModal.value.toggle()
}

onMounted(() => {
  messageModal.value = new Modal(messageRef.value)
  emitter.on('messageModal', (e) => {
    status.value = e.status
    message.value = e.message
    openModal()
  })
})
</script>
