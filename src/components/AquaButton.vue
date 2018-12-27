<template>
  <button class="aqua-button" @click="$emit('click', $event)">
    <div class="aqua-button-bg" />
    <slot />
  </button>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.aqua-button {
  position: relative;
  background: transparent;
  height: 50px;
  width: 150px;
  outline: none;
  border: 0;
  color: #a8a8a8;
  font-weight: bold;
  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    color: #6e6e6e;

    .aqua-button-bg {
      transition: background-position 0.1s ease;
      background-position: calc(50% - 10px) calc(50% - 10px);
    }
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 35%;
    width: 100%;
    border: 3px solid;
    left: 0;
    right: 0;
  }

  &::before {
    border-bottom-width: 0;
    top: 0;
  }

  &::after {
    border-top-width: 0;
    bottom: 0;
  }

  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 150%;
    height: 150%;
    opacity: 0.6;
    pointer-events: none;
    transform: translate(-10%, -10%);
    background: url(https://tochka.com/theme/main/img/button/button_1.png)
      center center no-repeat / 80% 80%;
  }
}
</style>
