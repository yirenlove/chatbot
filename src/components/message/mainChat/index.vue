<script setup>
// import { ref,computed } from 'vue';
import { defineAsyncComponent } from 'vue';
import { ElAvatar } from 'element-plus';
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
        type:String,
        default:''
    }
})

const botAvatar = "https://cdn.icon-icons.com/images/icon-icons.svg";
const userAvatar = "https://media-lc.lintcode.com/u_501764/202309/ce245a18d894424dbeb864d0e3d016b1/lintcode.ico";
const Text = defineAsyncComponent(()=> import('@/components/message/mainChat/text.vue'))
</script>

<template>
    <div class=" flex text-sm mb-5"  :class="{'flex-row-reverse':inversion}">
        <ElAvatar :src="inversion ? userAvatar : botAvatar" :class="['min-w-[40px]',inversion ? 'ml-2' : 'mr-2']">
        </ElAvatar>
        <div  class="flex"  :class="[inversion ? 'flex-row-reverse' : 'flex-row']">
            <Text :inversion="inversion" :text="text" :isImage="isImage" :url="url"  ></Text>
        </div>
    </div>
</template>