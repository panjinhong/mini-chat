<template>
  <div class="index">
    <div class="main-container">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import Main from "@/components/Main/Main.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<style scoped lang="scss">
.index {
  height: 100vh;
  background-color: var(--background-color);
  padding: 80px;
  .main-container {
    height: 100%;
    background-color: var(--main-background-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
}
</style>
