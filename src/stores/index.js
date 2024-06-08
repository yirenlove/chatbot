import { createPinia, defineStore } from 'pinia'
import { ref } from 'vue'

export const useChatStore = defineStore('chatStore', () => {
  const chatList = ref([])
  const scroll = ref()
  const imgUrls = ref([])
  const addChat = (param) => {
    chatList.value.push(param)
  }
  const updateChat = (text) => {
    chatList.value.at(-1).text = text
  }
  const updataUrl = (urls)=>{
    imgUrls.value = urls
  }
  return {
    scroll,
    chatList,
    addChat,
    updateChat,
    imgUrls,
    updataUrl
  }
})


