<template>
  <section>
    <div class="card">
      <div class="card-body">
        <h5 class="text-center mb-3">訂單</h5>
        <table class="table table-hover align-middle">
          <thead class="bgColor table-dark">
            <tr>
              <th scope="col" style="width: 30%">品項</th>
              <th scope="col" style="width: 40%">備註</th>
              <th scope="col" style="width: 15%">數量</th>
              <th scope="col" style="width: 15%">小記</th>
            </tr>
          </thead>
          <tbody class="table-group-divider table-warning">
            <tr v-for="(item, index) in props.orderList" :key="index">
              <td>
                <div class="">
                  <h5>{{ item.name }}</h5>
                  <h6>
                    <span class="text-dark">冰塊：</span
                    ><span class="fst-italic">{{ item.ice }}</span
                    >, <span class="text-dark ms-3">糖度：</span
                    ><span class="fst-italic">{{ item.sugar }}</span>
                  </h6>
                </div>
              </td>
              <td>
                <small>{{ item.remark }}</small>
              </td>
              <td>{{ item.qty }}</td>
              <td>${{ item.total }}</td>
            </tr>
          </tbody>
        </table>
        <h3 class="text-end mb-3">總計：＄ {{ total }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'

const props = defineProps(['orderList'])
const total = ref(0)

watch(props, () => {
  props.orderList.forEach((element) => {
    total.value += element.total
  })
})
</script>