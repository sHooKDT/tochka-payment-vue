<template>
  <span :class="['input-wrapper']">
    <masked-input
      type="text"
      :class="['input', { invalid: error }, { touched }]"
      v-model="model"
      :mask="mask ? mask : false"
      v-bind="$attrs"
      ref="field"
    />
  </span>
</template>
<script>
import MaskedInput from "vue-text-mask";

export default {
  name: "TextField",
  components: {
    MaskedInput
  },
  data: function() {
    return {
      touched: false,
      model: this.value
    };
  },
  watch: {
    model: function(val) {
      this.touched = true;
      this.$emit("input", val);
    },
    value: function(val) {
      this.model = val;
    }
  },
  props: ["value", "error", "mask"]
};
</script>
<style scoped lang="less">
.input-wrapper {
  display: inline-block;
}
.input {
  box-sizing: border-box;
  background: transparent;
  height: 40px;
  width: 100%;
  outline: 0;
  border: solid #c3c3c3;
  border-width: 0 0 3px 0;
  font-size: 18px;
  color: #666;

  &::placeholder {
    color: #e2e2e2;
  }

  &:focus {
    border-bottom: solid #666;
  }
}

.touched.invalid {
  border-bottom: dashed red;
}

.touched:not(.invalid) {
  border-bottom: solid #00c200;
}
</style>
