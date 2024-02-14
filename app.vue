<script setup lang="ts">
useHead({ htmlAttrs: { "data-theme": "pastel" } });
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
          <p class="py-6">
            We have tons of exciting <Spoiler> things </Spoiler> to <Spoiler>show</Spoiler> you soon. We hope you will
            like our app. We present to you <Spoiler>cover2cover</Spoiler>
          </p>
          <button class="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
