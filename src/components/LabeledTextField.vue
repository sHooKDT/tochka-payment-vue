<template>
  <label :for="name + 'input'">
    Комментарий
    <TextField
      :name="name"
      :id="name + 'input'"
      :placeholder="placeholder"
    ></TextField>
  </label>
</template>
<script>
import TextField from "./TextField";

export default {
  props: ["name", "placeholder", "label"],
  components: {
    TextField
  }
};
</script>
<style scoped lang="less">

</style>
