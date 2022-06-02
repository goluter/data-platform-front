<template>
  <div v-if="editor">
    <button
      :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
      @click="editor.chain().focus().setTextAlign('left').run()"
    >
      <v-icon>mdi-format-align-left</v-icon>
    </button>
    <button
      :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
      @click="editor.chain().focus().setTextAlign('center').run()"
    >
      <v-icon>mdi-format-align-center</v-icon>
    </button>
    <button
      :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
      @click="editor.chain().focus().setTextAlign('right').run()"
    >
      <v-icon>mdi-format-align-right</v-icon>
    </button>
    <button
      :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
      @click="editor.chain().focus().setTextAlign('justify').run()"
    >
      <v-icon>mdi-format-align-justify</v-icon>
    </button>
    <floating-menu
      v-if="editor"
      :editor="editor"
      :tippy-options="{ duration: 100 }"
    >
      <button
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        제목1
      </button>
      <button
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        제목2
      </button>
      <button
        :class="{ 'is-active': editor.isActive('bulletList') }"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        글머리표
      </button>
      <button
        :class="{ 'is-active': editor.isActive('orderedList') }"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        문단번호
      </button>
    </floating-menu>
    <bubble-menu :editor="editor" :tippy-options="{ duration: 100 }">
      <button
        :class="{ 'is-active': editor.isActive('bold') }"
        @click="editor.chain().focus().toggleBold().run()"
      >
        <B>굵게</B>
      </button>
      <button
        :class="{ 'is-active': editor.isActive('strike') }"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        취소선
      </button>
    </bubble-menu>
    <editor-content :editor="editor" />
    <v-row style="background-color: #f7f7f8">
      <v-col cols="12" />
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

  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = new Editor({
      content: '<p></p><p></p><p></p>',
      extensions: [StarterKit, TextAlign, Image, Dropcursor]
    })
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    addImage () {
      const url = window.prompt('URL')

      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run()
      }
    }
  }
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
