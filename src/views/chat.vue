<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import { ElContainer } from 'element-plus'
import { useChatStore } from '@/stores'
import { ref, nextTick } from 'vue'
import { fetchChat } from '@/api'
import { Icon } from '@iconify/vue'
import mytext from '@/components/message/mainChat/index.vue'
import router from '@/router'
import background from '@/components/background/background.vue'

const myheader = defineAsyncComponent(() => import('@/components/message/header.vue'))
const myaside = defineAsyncComponent(() => import('@/components/message/aside.vue'))
const chatStore = useChatStore()
const input = ref('')
const scrollRef = ref()
const handleSubmit = async (e) => {
  const content = input.value.trim()
  if (!content.length) {
    input.value = ''
    return
  }
  input.value = ''
  chatStore.addChat({ text: content, inversion: true, isImage: false, url: '' })
  chatStore.addChat({ text: '', inversion: false, isImage: false, url: '' })
  await nextTick()
  scrollRef.value.scrollTop = Math.floor(scrollRef.value.scrollHeight - scrollRef.value.clientHeight)
  const res = fetchChat(content)
  res.then((res) => {
    chatStore.updateChat(res.data.response)
  })
}
const handleHistory = (e) => {
  router.push({
    name: 'history'
  })
}
onMounted(() => {
  chatStore.scroll = scrollRef.value
})

</script>


<template>
  <div class="common-layout w-4/5 mx-auto relative overflow-hidden ">
    <el-container>
      <el-header height="auto">
        <myheader></myheader>
      </el-header>
      <el-container>
        <el-aside width="333px" class="mr-5" style="overflow: auto;    /* 隐藏默认的滚动条样式 */
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE and Edge */">
          <myaside :tar-url="'/api/chat'"></myaside>
        </el-aside>
        <el-main class="border-2 border-inherit border-solid rounded-md ">
          <div class="flex flex-col h-full w-full">
            <!-- 内容区域 -->
            <div class="scroll-container mb-[15px] flex-1" ref="scrollRef">
              <main class="max-h-[500px]  min-h-[500px]">
                <template v-if="chatStore.chatList.length === 0">
                  <h1 class="text-center " style="color:white;padding: 20px;font-size: 18px;">请输入以咨询问题
                  </h1>
                </template>
                <template v-else>
                  <mytext v-for="(item, index) in chatStore.chatList" :text="item.text"
                          :inversion="item.inversion" :key="index" :isImage="item.isImage"
                          :url="item.url"></mytext>
                </template>
              </main>
            </div>
            <!-- 输入区域 -->
            <footer class="flex w-full justify-between items-center">
              <!-- <Icon @click="handleHistory" class="cursor-pointer mr-1" icon="material-symbols:history" -->
              <!-- width="1.5rem" height="1.5rem" style="color: white" /> -->
              <el-input class="flex-1" resize="none" type="textarea" rows="2" v-model="input"
                        style="scrollbar-width: 0; width:70%" placeholder="请输入问题" />
              <el-button class="ml-2 self-end justify-self-end" type="success" plain size="large"
                         @click="handleSubmit">发送
              </el-button>
            </footer>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <background></background>
  </div>


</template>


<style scoped>
.el-container {
  height: 735px;
}

.scroll-container {
  width: 100%;
  /* 设置容器宽度 */
  overflow: auto;
  /* 显示滚动条，根据内容决定是否显示 */

  /* 隐藏默认的滚动条样式 */
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */
}

.scroll-container::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, and Opera */
}
</style>
