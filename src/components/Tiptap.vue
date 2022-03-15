<template>
  <editor-content :editor="editor" />
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>', // 默认内容
  extensions: [
    StarterKit.configure({
        heading: {
            levels: [1, 2, 3],
        }
    }),
  ],
})
</script>