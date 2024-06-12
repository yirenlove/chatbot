<script setup>
import { Icon } from '@iconify/vue';
import { ElUpload, ElDialog } from 'element-plus';
import { onMounted, ref, render } from 'vue';
import { postInfo } from '@/api';
import { useChatStore } from '@/stores';
import router from '@/router';
import index from '@/components/report/index.vue'
const getDiv = ref()
defineProps({
    tarUrl: {
        type: String,
        required: true,
    }
})
const isShow = ref(true)
const uploadRef = ref()
const dialogImageUrl = ref()
const dialogVisible = ref(false)
const getImg = ref()
const imgWraper = ref()
const position = {}
const imgsrc = ref('')
const chatStore = useChatStore()
let uid = 0
let [x1, y1, x2, y2] = [0, 0, 0, 0]
const handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url
    dialogVisible.value = true
    position[uploadFile.uid] = `${x1},${y1},${x2},${y2}`
    uid = uploadFile.uid
}

const handleSubmit = () => {
    uploadRef.value.submit()
}
onMounted(() => {
    const div = getDiv.value.querySelector('div')
    div.style.maxHeight = '450px'
    div.style.overflow = 'auto'
})
const handleUpload = (options) => {
    const formdata = new FormData();
    formdata.append('image', options.file)
    formdata.append('box_coords', position[options.file.uid])
    const res = postInfo(formdata)
    res.then((res) => {
        // chatStore.addUrl("data:image/png;base64,"+res.data.image)
        // chatStore.addUrl("data:image/png;base64,"+res.data.mask)
        chatStore.updataUrl(["data:image/png;base64," + res.data.image, "data:image/png;base64," + res.data.mask])
        chatStore.addChat({
            text: res.data.response['choices'][0]['message']['content'],
            inversion: false,
            isImage: false,
            url: '',
        })
    })
}
const handleMousedown = (e) => {
    x1 = e.offsetX
    y1 = e.offsetY
}
//简单的画框
const handleMouseup = (e) => {
    x2 = e.offsetX
    y2 = e.offsetY
    let scale = e.target.naturalWidth / e.target.width;
    position[uid] = `${Math.floor(x1 * scale)},${Math.floor(y1 * scale)},${Math.floor(x2 * scale)},${Math.floor(y2 * scale)}`
    const maskDiv = document.createElement('div')
    maskDiv.style.width = Math.floor(x2 - x1) + 'px'
    maskDiv.style.height = Math.floor(y2 - y1) + 'px'
    console.log(Math.floor(x2 - x1));
    maskDiv.classList.add('absolute')
    maskDiv.style.left = x1 + 'px'
    maskDiv.style.top = y1 + 'px'
    maskDiv.style.border = '2px solid blue'
    maskDiv.style.zIndex = 999
    imgWraper.value.appendChild(maskDiv)
    setTimeout(() => {
        maskDiv.remove()
    }, 1000);
}


//编程式路由跳转
const handleData = (e) => {
    router.push({
        name: 'history',
    })
}

//医学报告填写
const reportShow = ref(false)
const close = ()=>{
    reportShow.value = false

}

</script>


<template>
    <div class="container min-w-[333px] max-w-[334px]">
        <img :src="imgsrc" alt="" height="100%">
        <div class="mb-2 font-bold text-center " v-show="isShow">
            <h1 class="text-center border-2 border-inherit border-solid rounded" style="color:white">请上传要分析的图片</h1>
        </div>
        <div><el-button type="success" @click="reportShow = true"  class="mb-2 w-full">生成报告</el-button></div>
        <div><el-button type="success" @click="handleData" class="mb-2 w-full ">历史数据管理</el-button></div>
        <div><el-button type="success" @click="handleSubmit" class="mb-2 w-full">点击上传</el-button></div>


        <div ref="getDiv"
            class='imageConent min-w-[333px] max-w-[333px] border-inherit border-2 border-solid rounded-md box-border max-h-[450px]'>
            <el-upload :headers="{ 'Content-Type': 'multipart/form-data' }" ref="uploadRef" :action="tarUrl"
                list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
                :auto-upload="false" :multiple="true" :http-request="handleUpload">
                <Icon icon="ic:round-plus" width="2rem" height="2rem" />
            </el-upload>
        </div>
        <div class='imgs mt-2 max-w-[334px] max-h-[200px]'>
            <!-- <ul class="inline-flex == flex-direction: column; flex-wrap p-1"> -->
            <ul class="inline-flex flex-col flex-wrap p-1">
                <li v-for="(item) in chatStore.imgUrls" :key="item" class="flex-[0_0_47%] mb-2 mr-2 ">
                    <ElImage :src="item" alt="" :preview-src-list="chatStore.imgUrls" />
                </li>
            </ul>
        </div>
        <!-- 给图片画出分割区域 -->
        <el-dialog v-model="dialogVisible" :append-to-body="true" width="50%">
            <div style="border: 2px solid #3f3f3f3f;">
                <div ref="imgWraper" class="relative">
                    <img @mousedown="handleMousedown" @mouseup="handleMouseup" ref="getImg" width="100%"
                        :src="dialogImageUrl" alt="" style="user-select: none; z-index: 1;" draggable="false">
                </div>
            </div>
        </el-dialog>
        <!-- 生成医学报告 -->
        <index :isShow="reportShow" @close="close"></index>
    </div>

</template>

