<script setup lang="ts">
const { $trpcClient } = useNuxtApp()

//TODO: add eslint config
const { data } = await $trpcClient.users.useQuery()

</script>

<template>
  <div>
    <p v-if="data?.users.length === 0">No users</p>
    <Hello />
  </div>
</template>