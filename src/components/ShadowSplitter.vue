<template>
  <div class="splitter">
    <div class="line" />
  </div>
</template>
<script>
export default {
  name: "ShadowSplitter"
};
</script>
<style scoped lang="less">
.splitter {
  width: 100%;
  margin: 15px 0;
  display: flex;
  justify-content: center;
}
.line {
  width: 80%;
  border-bottom: 2px solid #bab0a3;
}
</style>
