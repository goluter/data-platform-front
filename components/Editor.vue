<template>
  <div v-if="editor">
    <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
      <v-icon>mdi-format-align-left</v-icon>
    </button>
    <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
      <v-icon>mdi-format-align-center</v-icon>
    </button>
    <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
      <v-icon>mdi-format-align-right</v-icon>
    </button>
    <button @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
      <v-icon>mdi-format-align-justify</v-icon>
    </button>
    <floating-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
      <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        제목1
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        제목2
      </button>
      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        글머리표
      </button>
      <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
        문단번호
      </button>
    </floating-menu>
    <bubble-menu :editor="editor" :tippy-options="{ duration: 100 }">
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        <B>굵게</B>
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        취소선
      </button>
    </bubble-menu>
    <editor-content :editor="editor" />
    <v-row style="background-color: #f7f7f8">
      <v-col cols="12"></v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn class="camera" icon @click="addImage">
          <v-icon>mdi-camera-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'

export default {
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu
  },

  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.editor = new Editor({
      content: '<p></p><p></p><p></p>',
      extensions: [
        StarterKit,
        TextAlign,
        Image,
        Dropcursor,
      ],
    })
  },
  methods: {
    addImage() {
      const url = window.prompt('URL')

      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run()
      }
    },
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
<style scoped>
button {
  background-color: white;
  border: solid 1px;
  border-radius: 3px;
  font-size: 14px;
}
.camera {
  border: none;
}
</style>