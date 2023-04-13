<script setup lang="ts">
import { useMenuStore } from "@/stores/menu-store";

defineProps<{
  color: string;
}>();

const menu = useMenuStore();

function click() {
  menu.shown = !menu.shown;
}
</script>

<template>
  <button class="btn burger-menu-btn" @click="click">
    <div class="burger-lines" :class="menu.shown ? 'burger-lines_active' : ''">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
  </button>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.burger-lines {
  @media (min-width: $lg) {
    display: none;
  }

  height: 14px;
  width: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &_active {
    .line1 {
      transform: rotate(45deg);
    }

    .line2 {
      transform: scaleY(0);
    }

    .line3 {
      transform: rotate(-45deg);
    }
  }
}

.line {
  display: block;
  height: 2px;
  width: 100%;
  border-radius: 10px;
  background: v-bind(color);
}

.line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.line2 {
  transition: transform 0.2s ease-in-out;
}

.line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}
</style>
