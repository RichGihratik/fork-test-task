<script setup lang="ts">
defineProps<{
  color: string;
}>();
</script>

<template>
  <div class="location-info">
    <div class="location-info__icon">
      <svg
        width="11.77388"
        height="15.358245"
        viewBox="0 0 11.77388 15.358245"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <path
          id="path4773"
          :style="{ stroke: color }"
          style="
            fill: none;
            stroke-width: 0.773;
            stroke-linejoin: round;
            stroke-dasharray: none;
          "
          d="m 8.2048732,5.9460428 c 3e-7,1.2801595 -1.0377742,2.317934 -2.3179337,2.3179337 -1.2801594,0 -2.3179335,-1.0377743 -2.3179332,-2.3179337 6e-7,-1.2801587 1.0377745,-2.3179321 2.3179332,-2.3179321 1.2801589,-3e-7 2.3179331,1.0377732 2.3179337,2.3179321 z M 11.38738,5.8869398 c 0,3.0378102 -1.7319873,4.5208992 -5.5004405,9.0848272 C 2.1443585,10.442452 0.38649886,8.9247501 0.3865,5.8869395 0.3865,2.849131 2.8491305,0.3865 5.8869395,0.3865 8.9247492,0.38649886 11.38738,2.8491305 11.38738,5.8869398 Z"
        />
      </svg>
    </div>
    <div class="location-info__text">Москва и область</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.location-info {
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &__icon {
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    scale: 1.3;
  }

  &__text {
    color: v-bind(color);
    font-size: 14px;
  }
}
</style>
