<template>
  <div class="index">
    <div class="main-container">
      <Header />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
</script>

<style scoped lang="scss">
.index {
  height: 100vh;
  background-color: var(--background-color);
  padding: 80px;
  .main-container {
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>
