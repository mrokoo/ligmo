<template>
  <div
    class="modal-box w-full h-screen fixed top-0 left-0 flex items-center justify-center transition-all text-main-color"
  >
    <div
      class="modal bg-projects-section rounded-2xl p-4 md:p-6 flex flex-col justify-between"
    >
      <div class="modal-header flex justify-between mb-1 md:mb-4">
        <h1 class="modal-title font-bold text-base md:text-2xl">Creation</h1>
        <a href="" class="bth-close" @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </a>
      </div>
      <div class="modal-body editor flex-1 flex">
        <MenuBar class="editor__header" :editor="editor" />
        <EditorContent class="editor__content" :editor="editor" />
      </div>
      <div class="modal-footer flex justify-around mt-2 md:mt-4">
        <button
          class="ml-2 md:ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-1 px-2 md:py-2 md:px-6 focus:outline-none hover:bg-gray-300 rounded-lg text-lg"
        >
          cancel
        </button>
        <button
          class="inline-flex text-white bg-indigo-500 border-0 py-1 px-2 md:py-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg"
        >
          save 
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import MenuBar from "./MenuBar.vue";

export default {
  component: "Modal",
  components: {
    MenuBar,
    EditorContent,
  },

  setup() {
    const editor = new Editor({
      content: ``,
      editorProps: {
        attributes: {
          class:
            "prose prose-sm sm:prose md:prose-lg p-4 focus:outline-none overflow-auto max-h-full w-full",
        },
      },
      extensions: [
        StarterKit,
        TaskList,
        TaskItem,
        Highlight,
        Text,
        Placeholder.configure({
          // Use a placeholder:
          placeholder: "Write something …",
          // Use different placeholders depending on the node type:
          // placeholder: ({ node }) => {
          //   if (node.type.name === 'heading') {
          //     return 'What’s the title?'
          //   }

          //   return 'Can you add some further context?'
          // },
        }),
      ],
      autofocus: true,
    });

    const closeModal = (e) => {
      e.preventDefault();
      const modalBox = document.querySelector(".modal-box");
      modalBox.classList.toggle("open");
    };

    return { editor, closeModal };
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss" scoped>
.modal-box {
  background: rgba(0, 0, 0, 0.7);
  visibility: hidden;
  opacity: 0;
}
.modal-box.open {
  opacity: 1;
  visibility: visible;
}


.editor {
  display: flex;
  flex-direction: column;
  max-height: 26rem;
  color: #0d0d0d;
  background-color: #fff;
  border: 3px solid #0d0d0d;
  border-radius: 0.75rem;

  &__header {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: 0.25rem;
    border-bottom: 3px solid #0d0d0d;
  }

  &__content {
    // padding: 1.25rem 1rem;
    flex: 1 1 auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
  }
}
</style>
