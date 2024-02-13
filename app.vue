<script setup lang="ts">
const { $trpcClient } = useNuxtApp()

//TODO: add eslint config
const { data: todos, error } = await $trpcClient.todo.getTodos.useQuery()

</script>

<template>
  <div>
    <Hello/>
    <div v-if="error">
      <p>An error has occurred {{ error }}</p>
    </div>
    <ul v-else>
      <li v-for="todo in todos">
        {{ todo }}</li>
    </ul>
  </div>
</template>