<template>
  <main class="main">
    <MainItem
      v-for="item of items"
      :key="item.key"
      :name="item.name"
      :icon="item.icon"
      @click="onClickItem"
    >
      <Icon size="80">
        <Chat48Regular
          color="var(--icon-color)"
          v-if="item.icon === 'Chat48Regular'"
        />
        <Mic48Regular
          color="var(--icon-color)"
          v-else-if="item.icon === 'Mic48Regular'"
        />
        <Video48Regular
          color="var(--icon-color)"
          v-else-if="item.icon === 'Video48Regular'"
        />
        <Folder48Regular color="var(--icon-color)" v-else />
      </Icon>
    </MainItem>
  </main>
</template>

<script setup lang="ts">
import MainItem from "./MainItem.vue";
import { ref } from "vue";
import { Icon } from "@vicons/utils";
import {
  Chat48Regular,
  Mic48Regular,
  Video48Regular,
  Folder48Regular,
} from "@vicons/fluent";

interface Item {
  key: number;
  name: string;
  icon: string;
}

const items = ref<Item[]>([
  {
    key: 1,
    name: "message",
    icon: "Chat48Regular",
  },
  {
    key: 2,
    name: "audio",
    icon: "Mic48Regular",
  },
  {
    key: 3,
    name: "video",
    icon: "Video48Regular",
  },
  {
    key: 4,
    name: "file",
    icon: "Folder48Regular",
  },
]);

const onClickItem = () => {
  alert("1");
};
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
