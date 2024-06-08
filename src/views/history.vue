<template>
  <div class="relative overflow-hidden h-screen">
  <div class="flex flex-col items-center justify-center max-w-[750px] mx-auto pt-10">
    <header class="flex justify-between min-w-[640px]">
      <ElButton style="margin: 0 20px 0 0" plain @click="back">返回</ElButton>
      <div>

        <el-date-picker
          v-model="inputValFind"
          type="date"
          placeholder="请选择查询的日期"
          value-format="YYYYMMDD"
        />
        <ElInput v-model="inputnumber" style="width: 40px" />
        <ElButton style="margin: 0 20px 0 0" plain @click="findImg">查询</ElButton>

      </div>
      <div>
        <el-date-picker
          v-model="inputValDelete"
          type="date"
          placeholder="请选择查询的日期"
          value-format="YYYYMMDD"
        />
        <ElInput v-model="inputnumber2" style="width: 40px" />
        <ElButton plain @click="handleRemove">删除</ElButton>
      </div>
    </header>
    <ElCarousel style="margin-top: 100px" v-show="fetchRes.length" class="w-full" type="card">
      <ElCarouselItem v-for="item in fetchRes" :key="item">
        <ElImage :src="item" :preview-src-list="fetchRes" :preview-teleported="true"></ElImage>
      </ElCarouselItem>
    </ElCarousel>
  </div>
  <background></background>
</div>
</template>

<script setup>
import { ElCarousel, ElCarouselItem, ElInput, ElButton, ElMessage, ElImage } from 'element-plus'
import { ref } from 'vue'
import { request } from '@/utils/request'
import router from '@/router'
import background from '@/components/background/background.vue'
const fetchRes = ref([])

const inputValFind = ref('')
const inputnumber = ref('')
const inputnumber2 = ref('')
const findImg = () => {


  let temVal = inputValFind.value.trim() + '_' + inputnumber.value.trim()
  if (temVal) {
    request.post('/show_images', {
      folder_name: temVal
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.data.images) {
        fetchRes.value = res.data.images.map(src => {
          return 'data:image/jpeg;base64,' + src
        })
      } else {
        ElMessage({
          message: 'images not found',
          type: 'error'
        })
      }

    }).catch(err => {
      console.log(err)
    })
  }
}

const inputValDelete = ref('')
const handleRemove = () => {
  const trim = inputValDelete.value.trim()+ '_' + inputnumber2.value.trim()
  if (trim) {
    request.post('/delete_images', {
      folder_name: trim
    }, {
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      if (res.data.message) {
        ElMessage({
          message: res.data.message,
          type: res.data.message.includes('成功') ? 'success' : 'error'
        })
      }
    }).catch(err => {
      if (err.response && err.response.status === 404) {
        ElMessage({
          message: '未找到图像',
          type: 'error'
        })
      } else {
        console.log(err)
      }
    })
  }
}

const back = () => {
  router.replace({
    name: 'index'
  })
}
</script>

<style scoped>
/* your styles */
</style>
