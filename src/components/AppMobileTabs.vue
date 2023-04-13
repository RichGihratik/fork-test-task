<script setup lang="ts">
import { themeVariables } from "@/assets/scss/variables";
import LocationInfo from "./LocationInfo.vue";
import { useMenuStore } from "@/stores/menu-store";
import { computed, inject, type Ref, ref } from "vue";

const menu = useMenuStore();

const top = inject<Ref<number>>("topMargin", ref(0));

const topMargin = computed(() => {
  return `${top.value + 20}px`;
});

function select(item: string) {
  menu.setSelected(item);
  menu.shown = false;
}
</script>

<template>
  <nav class="mobile-menu" :class="menu.shown ? 'mobile-menu_shown' : ''">
    <div
      class="mobile-menu__item"
      :class="menu.selectedItem === item ? 'mobile-menu__item_active' : ''"
      v-for="(item, index) in menu.menuItems"
      @click="select(item)"
      :key="index"
    >
      {{ item }}
    </div>
    <div class="mobile-menu__location-wrap">
      <LocationInfo :color="themeVariables.textColorDark" />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.mobile-menu {
  z-index: 0;
  font-family: "TeleSans", sans-serif;
  font-weight: bold;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  padding: 20px;
  padding-top: v-bind(topMargin);
  gap: 18px;
  max-width: $sm;
  width: 100%;
  height: 100%;
  translate: -100%;
  transition: translate 0.7s;
  border-right: solid 1px $text-color-darken;

  @media (min-width: $lg) {
    display: none;
  }

  &_shown {
    translate: 0;
  }

  &__item {
    padding-bottom: 12px;

    color: $text-color-dark;
    border-bottom: 1px solid $gray4;
    transition: border-bottom 0.25s, color 0.25s;
    cursor: pointer;

    &_active {
      color: $text-color-darken;
      border-bottom: 1px solid $text-color-darken;
    }
  }

  &__location-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: $gray5;
    font-weight: normal;
    padding: 15px;
  }
}
</style>
