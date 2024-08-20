<template>
  <section class="">
    <table class="table table-hover align-middle">
      <thead class="bgColor table-dark">
        <tr>
          <th scope="col" style="width: 40%">品項</th>
          <th scope="col" style="width: 25%">描述</th>
          <th scope="col" style="width: 15%">價格</th>
          <th scope="col" style="width: 20%">庫存</th>
        </tr>
      </thead>
      <tbody class="table-group-divider table-warning">
        <tr v-for="(item, index) in productList" :key="index">
          <td style="width: 40%">
            <div class="d-flex align-items-center flex-wrap">
              <span
                ><button
                  type="button"
                  class="btn btn-outline-secondary me-2"
                  @click="selectProduct(item, index)"
                  v-if="tempData.index !== index"
                >
                  <i class="bi bi-pencil-fill"></i></button
                >{{ item.title }}</span
              >
              <div class="input-group flex-wrap" v-if="tempData.index === index">
                <input
                  type="text"
                  class="form-control rwdWidth"
                  placeholder="名稱必填"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  v-model="tempData.title"
                />
                <button
                  class="btn btn-outline-secondary flex-shrink-1"
                  type="button"
                  id="button-addon2"
                  @click="tempData = {}"
                >
                  取消
                </button>
                <button
                  class="btn btn-outline-secondary flex-shrink-1"
                  type="button"
                  id="button-addon3"
                  @click="editProduct"
                  :disabled="!tempData.title"
                >
                  確認
                </button>
              </div>
            </div>
          </td>
          <td style="width: 25%">
            <small>{{ item.describe }}</small>
          </td>
          <td style="width: 15%">${{ item.price }}</td>
          <td style="width: 20%">
            <div class="d-flex align-items-center">
              <button
                type="button"
                class="btn"
                :class="[item.stock === 0 ? 'btn-outline-danger' : 'btn-outline-secondary']"
                :disabled="item.stock < 1"
                @click="item.stock--"
              >
                -</button
              ><span class="mx-2">{{ item.stock }}</span
              ><button type="button" class="btn btn-outline-secondary" @click="item.stock++">
                +
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="scss">
@media (max-width: 475px) {
  .rwdWidth {
    width: 100%;
  }
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
.btn-outline-secondary {
  --bs-btn-color: #508897;
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
</style>

<script setup>
import { ref } from 'vue'

const productList = ref([
  { title: '珍珠奶茶', describe: '香濃奶茶搭配QQ珍珠', price: 50, stock: 20 },
  { title: '冬瓜檸檬', describe: '清新冬瓜配上新鮮檸檬', price: 55, stock: 34 },
  { title: '翡翠檸檬', describe: '綠茶與檸檬的完美結合', price: 50, stock: 20 },
  { title: '四季春茶', describe: '香醇四季春茶，回甘無比', price: 45, stock: 0 },
  { title: '阿薩姆奶茶', describe: '阿薩姆紅茶搭配香醇鮮奶', price: 50, stock: 25 },
  { title: '檸檬冰茶', describe: '檸檬與冰茶的清新組合', price: 45, stock: 20 },
  { title: '芒果綠茶', describe: '芒果與綠茶的獨特風味', price: 55, stock: 18 },
  { title: '抹茶拿鐵', describe: '抹茶與鮮奶的絕配', price: 60, stock: 20 }
])
const tempData = ref({})
const selectProduct = (data, index) => {
  tempData.value = { ...data }
  tempData.value.index = index
}
const editProduct = () => {
  productList.value[tempData.value.index].title = tempData.value.title
  tempData.value = {}
}
</script>