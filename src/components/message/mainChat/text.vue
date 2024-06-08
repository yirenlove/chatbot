<script setup>
import { ElDialog } from 'element-plus';
import { computed,ref } from 'vue'
import MarkdownIt from 'markdown-it';
const props = defineProps({
    inversion: {
        type: Boolean,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    isImage:{
        type:Boolean,
        default:false,
    },
    url:{
        tpye:String,
        default:''
    }
})
const isShow = ref(false)
//最外层包装的样式
const wrapClass = computed(() => {
    return [
        "text-wrap",
        "min-w-[20px]",
        "rounded-md",
        "px-3 py-2",
        props.inversion ? "bg-[#d1e9f9]" : "bg-[#f4f6f8]",
    ]
})
const handleShow = (e)=>{
    isShow.value = true;
}

//markdown语言
const md = MarkdownIt({
    html: false,
    breaks: true,
    linkify: true,
})
const process_text = computed(()=>{
    if(props.inversion) return props.text
    return md.render(props.text)
})

</script>

<template>
    <div class="res max-w-lg" :class="wrapClass">
        <div v-if="inversion" class="whitespace-pre-wrap">
            <p class="max-w-lg" v-if="!isImage" v-text="process_text"></p>
        </div>
        <div v-else class="whitespace-pre-wrap">
            <div v-if="!isImage" style="word-wrap:break-word;  word-break:break-all; " class="max-w-lg" v-html="process_text"></div>
            <img v-if="isImage" class="cursor-zoom-in" :src="url" alt="图片" @click="handleShow">
            <ElDialog v-model="isShow">
                <img :src="url" alt="" class="cursor-zoom-out" draggable="false">
            </ElDialog>
        </div>
    </div>
</template>