<script setup>
import MarkdownIt from 'markdown-it'
const mdi = MarkdownIt()
let test_text = mdi.render('## header ```代码区 ```\n **o(n^2)** >problem:[baidu](www.baidu.com)')
</script>

<template>
    <div v-html="test_text"></div>
</template>