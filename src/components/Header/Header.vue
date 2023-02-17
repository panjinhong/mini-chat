<template>
  <header class="header">
    <h1 class="title">mini-chat</h1>
    <div class="action">
      <Icon @click="setCurrentTheme()">
        <WeatherMoon48Regular
          v-if="currentTheme === 'light'"
          color="var(--icon-color)"
        />
        <WeatherSunny48Regular v-else color="var(--icon-color)" />
      </Icon>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from "@vicons/utils";
import { WeatherMoon48Regular, WeatherSunny48Regular } from "@vicons/fluent";
import { useTheme } from "@/hooks/useTheme";

const [currentTheme, setCurrentTheme] = useTheme();
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  border-bottom: 1px solid var(--border-color);
  .title {
    font-size: 32px;
    line-height: 50px;
    color: var(--title-color);
    text-align: center;
  }
  .action {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    &:hover {
      .xicon {
        cursor: pointer;
      }
    }
  }
}
</style>
