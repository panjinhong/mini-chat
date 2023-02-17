<template>
  <IconConfigProvider size="30">
    <RouterView />
  </IconConfigProvider>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { IconConfigProvider } from "@vicons/utils";
</script>

<style scoped></style>
