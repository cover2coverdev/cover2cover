<script setup lang="ts">
import { $getRoot, $getSelection } from 'lexical'
import { LexicalComposer, LexicalContentEditable, LexicalHistoryPlugin, LexicalPlainTextPlugin } from 'lexical-vue'

const config = {
  namespace: 'MyEditor',
  theme: {
    // Theme styling goes here
  },
  onError(error: any) {
    // Catch any errors that occur during Lexical updates and log them
    // or throw them as needed. If you don't throw them, Lexical will
    // try to recover gracefully without losing user data.
    console.error(error)
  },
}
</script>

<template>
  <LexicalComposer :initial-config="config">
    <LexicalPlainTextPlugin>
      <template #contentEditable>
        <LexicalContentEditable class="textarea mx-auto max-w-[800px] min-h-[300px]" />
      </template>
    </LexicalPlainTextPlugin>
    <LexicalHistoryPlugin />
  </LexicalComposer>
</template>