<script setup>
import report from '@/components/report/report.vue'
import { ElDialog } from 'element-plus';

const prop = defineProps({
    isShow:{
        type:Boolean,
        requeired:true,
        default:false
    }
})
const emits = defineEmits(['close'])
//closecallback
const clsoeCallback = () => {
    emits('close')
}
</script>


<template>
    <ElDialog :model-value="isShow" :append-to-body="true" width="50%" :z-index="100" @close="clsoeCallback">
        <header style="text-align: center">医学报告</header>
        <report></report>
    </ElDialog>
</template>