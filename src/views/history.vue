<template>
  <div class="relative overflow-hidden h-screen">
    <div class="flex flex-col items-center justify-center max-w-[750px] mx-auto pt-10">
      <header class="flex justify-between min-w-[640px]">
        <ElButton style="margin: 0 20px 0 0" plain @click="back">返回</ElButton>
        <div>
          <el-date-picker v-model="inputValFind" type="date" placeholder="请选择查询的日期" value-format="YYYYMMDD" />
          <ElInput v-model="inputnumber" style="width: 40px" />
          <ElButton style="margin: 0 20px 0 0" plain @click="findImg">查询</ElButton>
        </div>
        <div>
          <el-date-picker v-model="inputValDelete" type="date" placeholder="请选择查询的日期" value-format="YYYYMMDD" />
          <ElInput v-model="inputnumber2" style="width: 40px" />
          <ElButton plain @click="handleRemove">删除</ElButton>
        </div>
      </header>
      <div class="w-full  mt-3 px-3">
        <!-- 姓名电话查询界面-->
        <div class="box flex justify-between ">
          <div>
            <label for="name"><span class="pr-1" style="color: #c1c7d3;">姓名</span></label> <el-input
              v-model="input_name" style="width: 240px" placeholder="请输入姓名" />
          </div>
          <div>
            <label for="contact"><span class="pr-1" style="color: #c1c7d3;">电话</span></label> <el-input
              v-model="input_contact" style="width: 240px" placeholder="请输入电话" />
          </div>
          <el-button plain @click="serach_info">查询</el-button>
        </div>
        <!-- 个人信息查询结果展示模块 -->
        <div class="mt-1 display text-slate-200" v-show="switchShow"></div>
      </div>

      <!-- 删除模块 -->
      <div class="w-full flex justify-between mt-2 ">
        <div><el-input v-model="tel" style="width: 240px" placeholder="请输入电话号码" /> <el-button plain
            @click="remove_by_tel">删除</el-button>
        </div>
        <div> <el-date-picker v-model="pickdate" type="date" placeholder="Pick a day" value-format="YYYYMMDD" />
          <el-button @click="remove_by_date" plain>删除</el-button> </div>
      </div>
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
import { searchInfo } from '@/api'
import { removeBytel } from '@/api'
import { removeBydate } from '@/api'
//查询个人信息模块：
const switchShow = ref(false)
const input_name = ref('')
const input_contact = ref('')
const serach_info = async (e) => {
  const res = await searchInfo({
    name: input_name.value,
    contact: input_contact.value
  }).then(res => res.data)
  document.querySelector('display').innerHTML = `
          <h2 class="text-slate-950 text-xl">查询结果如下:</h2>
          <div><span>pdf：</span><a href="${res.pdf_path}" download="预览.pdf" style="text-decoration: none;color: #409eff;">点我下载</a>
          </div>
          <p>图片路径：{{ ${res.formatted_image_path} }}</p>
          <img class="mr-1" src="${res.image_base64}" alt="" style="width: 100%;">
        `;
  switchShow.value = true
  ElMessage({ message: '查询成功', type: 'success' })

}

//删除信息模块
const tel = ref('')
const pickdate = ref('')
const remove_by_tel = async () => {
  const res = await removeBytel(JSON.stringify({ tel: tel.value }))
  if (res.status === 200) ElMessage({ message: '删除成功', type: 'success' })
  else ElMessage({ message: '删除失败', type: 'error' })
}

const remove_by_date = async () => {
  const res = await removeBydate(JSON.stringify({ report_date: pickdate.value }))
  if (res.status === 200) ElMessage({ message: '删除成功', type: 'success' })
  else ElMessage({ message: '删除失败', type: 'error' })
}


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
    switchShow.value = false
  }
}

const inputValDelete = ref('')
const handleRemove = () => {
  const trim = inputValDelete.value.trim() + '_' + inputnumber2.value.trim()
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
