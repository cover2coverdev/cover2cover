<script setup lang="ts">
useHead({ htmlAttrs: { "data-theme": "pastel" } });

const hidden = ref(true);
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Welcome to <br>
          cover 2 cover
        </h1>
        <p class="py-6">
          We have tons of exciting <Spoiler> things </Spoiler> to <Spoiler>show</Spoiler> you soon. We hope you will
          like our app. We present to you <Spoiler>cover2cover</Spoiler>
        </p>
        <button
          class="btn btn-primary"
          @click="hidden = false"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>
