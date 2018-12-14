<template>
  <input type="text" class="input" />
</template>
<script>
export default {
  name: "TextField"
};
</script>
<style scoped lang="less">
.input {
  background: transparent;
  height: 40px;
  outline: 0;
  border: solid #c3c3c3;
  border-width: 0 0 3px 0;
  font-size: 18px;
  color: #666;

  &:focus {
    border-bottom: solid #666;
  }
}
</style>
