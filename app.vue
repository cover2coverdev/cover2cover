<script setup lang="ts">
import type { GoogleBookVolume } from "./types/googlebooks";

const { $trpcClient } = useNuxtApp();
useHead({ htmlAttrs: { "data-theme": "pastel" } });
const query = ref("");
const volumes = ref<GoogleBookVolume[]>([]);

const handleSearch = async () => {
  if (!query.value.length) return;
  const res = await $trpcClient.googlebooks.query({ q: query.value, maxResults: 12 });
  volumes.value = res.items;
};
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <ClientOnly>
      <div class="hero-content text-center">
        <div class="max-w-md">
          <Transition
            enter-active-class="duration-500 ease-out"
            enter-from-class="opacity-0 translate-y-[-48px]"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="duration-500 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0 translate-y-[-48px]"
            appear
          >
            <h1 class="text-5xl font-bold">
              Welcome to <br>
              cover 2 cover
            </h1>
          </Transition>

          <div class="flex flex-col gap-2 items-center">
            <p class="py-6">
              We have tons of exciting <Spoiler> things </Spoiler> to <Spoiler>show</Spoiler> you soon. We hope you will
              like our app. We present to you <Spoiler>cover2cover</Spoiler>
            </p>
            <div class="flex items-center gap-2">
              <input
                v-model="query"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-[300px]"
              >
              <button
                class="btn btn-neutral"
                @click="handleSearch"
              >
                find
              </button>
            </div>
            <BookList
              v-if="volumes.length > 0"
              :volumes="volumes"
            />
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
