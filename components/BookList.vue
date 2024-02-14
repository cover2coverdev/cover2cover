<script setup lang="ts">
import type { GoogleBookVolume } from "~/types/googlebooks";

const { volumes } = defineProps<{ volumes: GoogleBookVolume[] }>();
</script>
<template>
  <div class="min-h-[600px]">
    <Transition
      mode="out-in"
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-[-24px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 translate-y-[24px]"
      appear
    >
      <div
        :key="volumes[0].id"
        class="grid p-4 gap-3 grid-cols-4"
      >
        <div
          v-for="volume in volumes"
          :key="volume.id"
          class="rounded-md"
        >
          <img
            class="w-full object-contain border border-blue-400 rounded-md block"
            :src="volume.volumeInfo?.imageLinks?.thumbnail"
            :alt="volume.volumeInfo.title"
          >
        </div>
      </div>
    </Transition>
  </div>
</template>
