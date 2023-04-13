import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMenuStore = defineStore("menu-store", () => {
  const shown = ref(false);

  const _menuItems = ref([
    "Преимущества Tele2",
    "Тарифы",
    "Акции и спецпредложения",
    "Промотариф Tele2",
    "Технология eSim",
    "Подключение нового абонента",
  ]);

  const _index = ref(0);

  function setSelected(item: string) {
    const index = _menuItems.value.indexOf(item);
    if (index === -1) throw new Error("Item not found!");
    _index.value = index;
  }

  return {
    shown,
    menuItems: computed(() => _menuItems.value),
    selectedItem: computed(() => _menuItems.value[_index.value]),
    setSelected,
  };
});
