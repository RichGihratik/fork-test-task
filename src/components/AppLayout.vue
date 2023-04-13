<script lang="ts" setup>
import { ref, type Ref, computed, onMounted, provide, readonly } from "vue";

const header: Ref<HTMLElement | null> = ref(null);

const footer: Ref<HTMLElement | null> = ref(null);

const top = ref(0);

provide("topMargin", readonly(top));

const bottom = ref(0);

provide("bottomMargin", readonly(top));

function updateHeights() {
  top.value = header.value?.offsetHeight ?? 0;
  bottom.value = footer.value?.offsetHeight ?? 0;
}

onMounted(() => {
  updateHeights();
  if (!header.value || !footer.value)
    throw new Error("Header or footer has not loaded!");
  const observer = new MutationObserver(updateHeights);
  observer.observe(header.value, {
    attributes: true,
    childList: true,
    subtree: true,
  });
  observer.observe(footer.value, {
    attributes: true,
    childList: true,
    subtree: true,
  });
});

const mainStyles = computed(() => {
  return {
    paddingTop: `${top.value}px`,
    paddingBottom: `${bottom.value}px`,
  };
});
</script>

<template>
  <div class="app-body">
    <div class="app-body__header" ref="header">
      <slot name="header"></slot>
    </div>
    <main class="app-main" :style="mainStyles">
      <slot></slot>
    </main>
    <div class="app-body__footer" ref="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-body {
  position: relative;
  box-sizing: border-box;

  &__header {
    padding: 0;
    margin: 0;
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
  }

  &__footer {
    padding: 0;
    margin: 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.app-main {
  min-height: 100vh;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
}
</style>
