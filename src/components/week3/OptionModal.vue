<template>
  <section>
    <h5 class="mb-3">
      商品名稱：<span class="fst-italic">{{ cartData.name }}</span>
    </h5>
    <h6 class="mb-3">
      商品描述：<span class="fst-italic">{{ cartData.description }}</span>
    </h6>
    <h6 class="mb-3">
      商品價格：<span class="fst-italic">${{ cartData.price }}</span>
    </h6>
    <h6 class="d-flex mb-3">
      冰塊選項：
      <template v-for="(item, index) in cartData.iceOption" :key="index">
        <div class="form-check ms-4">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            :value="item.ice"
            :id="`flexRadioDefault${index}`"
            v-model="cartData.ice"
          />
          <label class="form-check-label" :for="`flexRadioDefault${index}`">{{ item.ice }}</label>
        </div>
      </template>
    </h6>
    <h6 class="d-flex mb-3">
      甜度選項：
      <template v-for="(item, index) in cartData.sugarOption" :key="index">
        <div class="form-check ms-4">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefaultSugar"
            :value="item.sugar"
            :id="`sugar${index}`"
            v-model="cartData.sugar"
          />
          <label class="form-check-label" :for="`sugar${index}`">{{ item.sugar }}</label>
        </div>
      </template>
    </h6>
    <h6 class="d-flex align-items-center mb-3">
      數量：
      <div class="d-flex align-items-center ms-3">
        <button
          type="button"
          class="btn btn-outline-secondary"
          :disabled="cartData.qty < 2"
          @click="cartData.qty--"
        >
          -</button
        ><span class="mx-2">{{ cartData.qty }}</span
        ><button type="button" class="btn btn-outline-secondary" @click="cartData.qty++">+</button>
      </div>
    </h6>
    <h6 class="mb-3">
      備註：
      <textarea
        class="form-control"
        aria-label="With textarea"
        v-model="cartData.remark"
      ></textarea>
    </h6>
    <h3 class="text-end mb-5">小記： ＄{{ cartData.total }}</h3>
    <div>
      <button class="btn btn-primary w-100" @click="emitAdd">加入訂單</button>
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps, watch, computed, defineEmits } from 'vue'

const props = defineProps(['tempData'])
const cartData = ref({})

const emit = defineEmits(['addToOrder'])

const emitAdd = () => {
  emit('addToOrder', cartData.value) // 傳遞事件名稱, 參數
}

const total = computed(() => {
  return cartData.value.qty * cartData.value.price
})

watch(props, () => {
  selectProduct({ ...props.tempData })
})

const selectProduct = (data) => {
  cartData.value = data
  cartData.value.ice = data.iceOption[0].ice
  cartData.value.sugar = data.sugarOption[0].sugar
  cartData.value.qty = 1
  cartData.value.total = total
}
</script>