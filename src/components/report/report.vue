<script setup>
import { ref } from 'vue';
import { generate_pdf } from '@/api';
import moment from 'moment';



//拿到form表单节点，手动转为formdata数据，并且提交  
const formdom = ref()
const name = ref('');
const age = ref('');
const gender = ref('');
const contact = ref('');
const userText = ref('');
const handleSubmit = async (e) => { 
    let now = moment()
    // const formdata = new FormData(formdom.value)
    // formdata.set('report_date',now.format('YYYYMMDD'));
    const blobdata = await generate_pdf(JSON.stringify({ name: name.value, age: age.value, gender: gender.value, contact: contact.value, report_date: now.format('YYYYMMDD'), text: userText.value }))

        let blob = new Blob([blobdata.data])
        //非ie浏览器下载
        let download = document.createElement('a')
        download.href = URL.createObjectURL(blob)
        download.download = '医学报告.pdf'
        download.click()
        URL.revokeObjectURL(download.href)
        //移除download 节点
        download.remove()

}
</script>

<template>
    <div class="box max-w-[600px] mx-auto">
        <form class=" w-full pt-4" ref="formdom" onsubmit="return false">
            <div class="item flex justify-between">
                <div>
                    <label for="name">姓名</label>
                    <input v-model="name"type="text" name="name" id="name" placeholder="必填" required>
                </div>
                <div>
                    <label for="age">年龄</label>
                    <input v-model="age"type="text" name="age" id="age" placeholder="必填" required>
                </div>

            </div>
            <div class="item flex justify-between">
                <div>
                    <label for="sex">性别</label>
                    <input v-model="gender"type="text" name="gender" id="sex" placeholder="必填" required>
                </div>
                <div>
                    <label for="tele">电话</label>
                    <input type="text" name="contact" id="tele" placeholder="必填" required>
                </div>
            </div>
            <div class="item">
                <p><label for="diagnosis">诊断</label></p>
                <textarea v-model="userText" class="break-words w-full box-border" name="userText" id="diagnosis" rows="5"
                    draggable="false"></textarea>
            </div>
        </form>
        <div><button type="button" class="h-7 block w-full border rounded border-cyan-400 shadow text-green-300"
                @click="handleSubmit">提交并下载报告</button></div>

    </div>

</template>

<style scoped>
.item {
    margin-bottom: 5px;
}
.item div{
    display: flex;   
    flex: 0.4 0.4 auto;
    /* max-width: 40%; */
}
.item input {
    flex: 1;    
    margin-left: 5px;
    border-radius: 5px;
    width: fit-content;
    height: 2em;
    outline: none;
    background-color: #3f3f3f1a;

}

.item input:focus {
    box-shadow: 0 0 0 1px #409eff inset;
}

.item textarea {
    padding-left: 5px;
    padding-right: 5px;
    resize: unset;
    overflow: visible;
    outline: none;
    background: transparent;
    /* border: 2px solid #3677f0; */
    box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
    border-radius: 5px;
    overflow: hidden;
    color: #606266;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.item textarea:focus {
    box-shadow: 0 0 0 1px #409eff inset;
}
</style>