<script setup lang="ts">
defineProps<{
  color: string;
  backgroundColor: string;
  pingColor: string;
}>();
</script>

<template>
  <div class="notification-box">
    <div class="notification-bell">
      <span class="bell-top"></span>
      <span class="bell-middle"></span>
      <span class="bell-bottom"></span>
      <span class="bell-rad"></span>
    </div>
    <div class="notification-ping"></div>
  </div>
</template>

<style scoped lang="scss">
.notification-box {
  display: block;
  position: relative;
}

.notification-ping {
  box-sizing: content-box;
  width: 6px;
  height: 6px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: v-bind(pingColor);
  border-radius: 50%;
  border: 3px solid v-bind(backgroundColor);
  translate: 3px -2px;
}

.notification-bell {
  cursor: pointer;
  animation: bell 1s 1s both infinite;
}

@keyframes bell {
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate(30deg);
  }
  20% {
    transform: rotate(0);
  }
  80% {
    transform: rotate(0);
  }
  90% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(0);
  }
}

.notification-bell * {
  display: block;
  margin: 0 auto;
}
.bell-top {
  width: 6px;
  height: 4px;
  border: solid 2px v-bind(color);
  border-bottom: 0;
  border-radius: 3px 3px 0 0;
}
.bell-middle {
  width: 15px;
  height: 15px;
  margin-top: -1px;
  border: solid 2px v-bind(color);
  border-bottom: 0;
  border-radius: 12.5px 12.5px 0 0;
}
.bell-bottom {
  position: relative;
  z-index: 0;
  width: 20px;
  height: 2px;
  background-color: v-bind(color);

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    right: 0px;
    border-bottom: 2px solid v-bind(color);
    border-right: 2px solid transparent;
    border-left: 0 solid transparent;
  }

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 1px;
    border-bottom: 2px solid v-bind(color);
    border-right: 0 solid transparent;
    border-left: 2px solid transparent;
  }
}
.bell-rad {
  width: 8px;
  height: 4px;
  border: solid 2px v-bind(color);
  border-top: 0;
  border-radius: 0 0 4px 4px;
  animation: rad 1s 2s both infinite;
}

@keyframes rad {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(4px);
  }
  20% {
    transform: translateX(0);
  }
  80% {
    transform: translateX(0);
  }
  90% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
