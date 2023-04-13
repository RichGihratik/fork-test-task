<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppTabs from "./components/AppTabs.vue";
import AppMobileTabs from "./components/AppMobileTabs.vue";
import AppLayout from "./components/AppLayout.vue";
</script>

<template>
  <AppLayout>
    <template #header>
      <AppHeader />
      <AppTabs />
    </template>
    <AppMobileTabs />
  </AppLayout>
</template>
