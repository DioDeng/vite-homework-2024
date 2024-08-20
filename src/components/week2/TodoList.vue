<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Recipient's todos"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      v-model="tempData.content"
    />
    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="postTodo">
      Add Todo
    </button>
  </div>
  <table class="table table-hover align-middle">
    <thead class="bgColor table-dark">
      <tr>
        <th scope="col" style="width: 10%">#</th>
        <th scope="col" style="width: 45%">Title</th>
        <th scope="col" style="width: 15%">Delete</th>
        <th scope="col" style="width: 15%">Update</th>
        <th scope="col" style="width: 15%">Status</th>
      </tr>
    </thead>
    <tbody class="table-group-divider table-warning">
      <tr v-for="(item, index) in todoList" :key="index">
        <th scope="row" style="width: 10%">{{ index + 1 }}</th>
        <td style="width: 55%" :class="{ 'text-decoration-line-through': item.status }">
          {{ item.content }}
        </td>
        <td style="width: 10%">
          <button class="btn btn-outline-danger" @click="deleteTodo(item.id)">
            <i class="bi bi-trash"></i>
          </button>
        </td>
        <td style="width: 10%">
          <button class="btn btn-outline-success" @click="tempData = { ...item }">
            <i class="bi bi-pencil"></i>
          </button>
        </td>
        <td style="width: 10%">
          <input
            type="checkbox"
            class="btn-check"
            v-model="item.status"
            @click="toggleStatus(item.id)"
            :id="`btn-check${item.id}`"
            autocomplete="off"
          />
          <label class="btn" :for="`btn-check${item.id}`"
            ><i class="bi bi-check-lg" v-if="item.status"></i><i class="bi bi-x-lg" v-else></i
          ></label>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
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
import { ref, onMounted, inject } from 'vue'
import {
  apiGetTodos,
  apiPostTodo,
  apiDeleteTodo,
  apiPatchTodo,
  apiPutTodo
} from '../../assets/javascript/api'
const emitter = inject('emitter')

const hakkaCookie = ref(
  document.cookie.replace(
    // eslint-disable-next-line no-useless-escape
    /(?:(?:^|.*;\s*)hexschoolTodoHakka\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  )
)
const tempData = ref({})
const todoList = ref([])
// 方法
const postTodo = () => {
  if (tempData.value.id) {
    apiPutTodo(
      tempData.value.id,
      { content: tempData.value.content },
      {
        headers: {
          Authorization: hakkaCookie.value
        }
      }
    )
      .then((res) => {
        console.log(res)
        getTodoList()
        emitter.emit('messageModal', {
          status: true,
          message: 'update todo success'
        })
      })
      .catch((err) => {
        emitter.emit('messageModal', {
          status: false,
          message: err.response.data
        })
      })
  } else {
    apiPostTodo(tempData.value, {
      headers: {
        Authorization: hakkaCookie.value
      }
    })
      .then((res) => {
        console.log(res)
        tempData.value = {}
        emitter.emit('messageModal', {
          status: true,
          message: 'success todo'
        })
        getTodoList()
      })
      .catch((err) => {
        emitter.emit('messageModal', {
          status: false,
          message: err.response.data
        })
      })
  }
}
const getTodoList = () => {
  apiGetTodos({
    headers: {
      Authorization: hakkaCookie.value
    }
  })
    .then((res) => {
      todoList.value = res.data.data
    })
    .catch()
}
const deleteTodo = (id) => {
  apiDeleteTodo(id, {
    headers: {
      Authorization: hakkaCookie.value
    }
  })
    .then(() => {
      getTodoList()
      emitter.emit('messageModal', {
        status: true,
        message: '刪除成功'
      })
    })
    .catch((err) => {
      emitter.emit('messageModal', {
        status: false,
        message: err.response.data
      })
    })
}
const toggleStatus = (id) => {
  apiPatchTodo(id, {
    headers: {
      Authorization: hakkaCookie.value
    }
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
onMounted(() => {
  getTodoList()
})
</script>