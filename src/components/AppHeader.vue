<script setup lang="ts">
import BurgerButton from "./BurgerButton.vue";
import LocationInfo from "./LocationInfo.vue";
import NotificationButton from "./NotificationButton.vue";

import { themeVariables } from "@/assets/scss/variables";
</script>

<template>
  <header class="header">
    <div class="logo">
      <svg
        version="1.1"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="59.860077"
        height="22.563562"
        xml:space="preserve"
      >
        <path
          d="M 0,7.9457309 V 11.20316 L 8.787459,10.23655 V 6.7108789 L 0,7.9457309 M 2.8042276,11.401306 V 22.563562 H 6.021403 V 11.072509 L 2.8042276,11.401306 M 9.97425,6.5441379 V 22.563562 h 3.389989 V 6.0675129 L 9.97425,6.5441379 m 4.021556,-0.565461 v 3.685125 l 4.895166,-0.538567 v -3.834341 l -4.895166,0.687783 m 0,6.4279311 v 3.752273 l 3.213358,-0.175243 v -3.853601 l -3.213358,0.276571 m 0,6.456907 v 3.700047 h 4.895166 V 18.71586 l -4.895166,0.147655 M 31.550424,3.5060221 V 22.563562 H 35.99447 V 2.8813953 l -4.444046,0.6246268 m 5.273933,-0.7413974 v 4.3836662 l 6.476339,-0.712075 V 1.8542311 l -6.476339,0.9103936 m 0,7.6804813 v 4.464868 l 4.24486,-0.231806 v -4.59656 l -4.24486,0.363498 m 0,7.72837 v 4.390086 h 6.476339 v -4.585629 l -6.476339,0.195543 M 20.186205,5.1085369 V 22.563562 h 3.861582 V 4.5656319 l -3.861582,0.542905 m 4.582332,13.4299981 v 4.024853 h 5.605333 v -4.194022 l -5.605333,0.169169 M 57.820321,1.6387348 C 56.415778,0.31174968 54.356418,-0.23254322 52.103944,0.09104818 V 4.9530739 c 0.912129,-0.05066 1.651271,0.287849 1.980588,0.969387 0.520002,1.074531 -0.01648,2.686763 -1.282047,4.1804891 -1.953347,2.305046 -7.14764,7.023061 -7.14764,7.023061 l 7.456657,-0.245166 C 57.667635,12.429685 59.30381,9.7278259 59.597385,6.3557089 59.751633,4.5717049 59.104103,2.8527665 57.820321,1.6387348 M 59.860075,22.563562 V 17.476149 L 44.735776,17.93178 m 0,-1.74e-4 0.0016,4.631782 H 59.860075 M 51.234499,0.20018438 C 46.840769,1.1359102 44.683204,4.3683542 44.932187,9.6428079 l 4.684701,-0.415724 c -0.213414,-2.979817 0.698021,-3.686687 1.619866,-4.075343 l -0.0023,-4.95155652"
          id="path-logo"
          style="stroke-width: 0.173507"
        />
      </svg>
    </div>
    <nav class="header__nav">
      <LocationInfo
        :color="themeVariables.textColorDark"
        class="location-wrap"
      />
      <NotificationButton
        :color="themeVariables.textColor"
        :background-color="themeVariables.background"
        :ping-color="themeVariables.pingColor"
      />
      <BurgerButton :color="themeVariables.textColor" />
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

#path-logo {
  fill: $text-color;
}

.header {
  background-color: $gray1;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  font-family: "TeleSans", sans-serif;
  padding: 8px 20px;

  @media (min-width: $lg) {
    padding: 8px 160px;
  }

  &__nav {
    display: flex;
    gap: 20px;
  }
}

.location-wrap {
  @media (max-width: $lg) {
    display: none;
  }
}
</style>
