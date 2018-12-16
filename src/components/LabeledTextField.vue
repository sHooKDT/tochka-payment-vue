<template>
  <label :for="name + 'input'" class="label-wrapper">
    <span class="label-text"> {{ label }} </span>
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
.label-wrapper {
  display: block;
}

.label-text {
  display: inline-block;
  width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 5px;
  font-weight: bold;
}
</style>
