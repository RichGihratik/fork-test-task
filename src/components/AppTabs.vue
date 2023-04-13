<script setup lang="ts">
import { useMenuStore } from "@/stores/menu-store";

const menu = useMenuStore();
</script>

<template>
  <nav class="desktop-tabs">
    <div
      class="desktop-tab"
      :class="menu.selectedItem === item ? 'desktop-tab_active' : ''"
      v-for="(item, index) in menu.menuItems"
      @click="menu.setSelected(item)"
      :key="index"
    >
      <span class="desktop-tab__text">
        {{ item }}
      </span>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.desktop-tabs {
  font-family: "TeleSans", sans-serif;
  font-size: 14px;
  border-bottom: $background-light 1px solid;
  display: flex;
  flex-direction: row;
  padding: 0 160px;
  padding-top: 13px;
  gap: 18px;

  @media (max-width: $lg) {
    display: none;
  }
}

.desktop-tab {
  height: 100%;
  padding-bottom: 12px;

  color: $text-color-dark;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.25s, color 0.25s;
  margin-bottom: -1px;
  cursor: pointer;

  &_active {
    color: $text-color-darken;
    border-bottom: 2px solid $text-color-darken;
  }
}
</style>
