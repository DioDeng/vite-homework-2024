<template>
  <section class="mb-4">
    <div class="row g-4">
      <div class="col-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="list-group">
              <template v-for="(item, index) in productList" :key="index">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="{ disabled: item.stock === 0, active: tempData.id === item.id }"
                  @click="tempData = item"
                  >{{ item.name }}</a
                >
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="card h-100">
          <div class="card-body">
            <Option :tempData="tempData" @addToOrder="addToOrder" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <Order :orderList="orderList" />
  </section>
</template>

<style lang="scss">
.list-group-item.disabled,
.list-group-item:disabled {
  background: #973532;
  color: #fff;
}
.list-group-item.active {
  background: #508897;
}
.btn-primary {
  --bs-btn-bg: #508897;
  --bs-btn-color: #fff;
  --bs-btn-border-color: #508897;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #508897;
  --bs-btn-hover-border-color: #6c757d;
  --bs-btn-focus-shadow-rgb: 108, 117, 125;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #6c757d;
  --bs-btn-active-border-color: #6c757d;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #6c757d;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #6c757d;
  --bs-gradient: none;
}
.table-dark {
  --bs-table-color: #fff;
  --bs-table-bg: #973532;
}
.table-warning {
  --bs-table-color: #973532;
  --bs-table-bg: #ece1cd;
  --bs-table-hover-color: #973532;
}
</style>

<script setup>
import productData from '@/assets/json/week3data.json'
import Option from '../components/week3/OptionModal.vue'
import Order from '../components/week3/OrderList.vue'
import { onMounted, ref } from 'vue'

const productList = ref(productData)
const tempData = ref({})
const orderList = ref([])

const addToOrder = (item) => {
  orderList.value.push(item)
}

onMounted(() => {
  tempData.value = productList.value[0]
})
</script>