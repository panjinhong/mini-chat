<template>
  <div class="main-item">
    <slot />
    <h3>{{ name }}</h3>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.main-item {
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 10px 30px;
  height: auto;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 12px 2px var(--shadow-color);
  }
  h3 {
    text-align: center;
    color: var(--title-color);
  }
}
</style>
