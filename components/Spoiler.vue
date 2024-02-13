<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const { hidden } = withDefaults(
  defineProps<{
    hidden?: boolean;
  }>(),
  { hidden: true }
);

const localHidden = toRef(hidden);

const onReveal = () => {
  localHidden.value = false;
  emit("reveal");
};

const emit = defineEmits<{
  reveal: []; // named tuple syntax
}>();
</script>

<template>
  <p
    data-testid="spoiler"
    :data-state="localHidden ? 'hidden' : 'visible'"
    class="spoiler-text"
    @click="onReveal()"
  >
    <slot>Add spoiler text</slot>
  </p>
</template>
