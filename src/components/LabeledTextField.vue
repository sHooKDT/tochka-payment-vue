<template>
  <label :for="name + 'input'" class="label-wrapper">
    <span :class="['label-text', { ['label-error']: touched && error }]">
      {{ label }}
    </span>
    <TextField
      :name="name"
      :id="name + 'input'"
      :placeholder="placeholder"
      :value="value"
      :error="error"
      @input="handleInput($event)"
      class="textfield"
    ></TextField>
  </label>
</template>
<script>
import TextField from "./TextField";

export default {
  data: function() {
    return {
      touched: false
    };
  },
  props: ["value", "name", "placeholder", "label", "error"],
  components: {
    TextField
  },
  methods: {
    handleInput(event) {
      this.touched = true;
      this.$emit("input", event);
    }
  }
};
</script>
<style scoped lang="less">
.label-wrapper {
  display: flex;
  width: 100%;
}

.label-text {
  display: inline-block;
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 5px;
  font-weight: bold;
}

.label-error {
  color: red;
}

.textfield {
  flex: 1;
}
</style>
