<template>
  <div class="wrapper">
    <CardsSVGSprite />
    <div class="card-type-images">
      <svg class="icon"><use xlink:href="#mastercard"></use></svg>
      <svg class="icon"><use xlink:href="#mastercard-1"></use></svg>
      <svg class="icon"><use xlink:href="#visa"></use></svg>
    </div>
    <div class="card-number">
      <TextField
        class="card-number__input"
        placeholder="4111 1000 0000 0000"
        ref="cardNumber"
        :value="value.cardNumber"
        @input="updateValue('cardNumber', $event)"
        :error="errors.cardNumber"
        :mask="[
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/
        ]"
      />
    </div>
    <div class="card-other">
      <TextField
        class="card-other__input"
        placeholder="05/22"
        ref="expiration"
        :value="value.expiration"
        @input="updateValue('expiration', $event)"
        :error="errors.expiration"
        :mask="[/\d/, /\d/, '/', /\d/, /\d/]"
      />
      <TextField
        class="card-other__input"
        placeholder="036"
        ref="cvc"
        :value="value.cvc"
        @input="updateValue('cvc', $event)"
        :error="errors.cvc"
        :mask="[/\d/, /\d/, /\d/]"
      />
    </div>
  </div>
</template>
<script>
import CardsSVGSprite from "./CardsSVGSprite";
import TextField from "./TextField";

export default {
  name: "CardWidget",
  components: { CardsSVGSprite, TextField },
  props: ["value", "errors"],
  methods: {
    updateValue(field, value) {
      this.$emit("input", {
        ...this.value,
        [field]: value
      });
    }
  }
};
</script>
<style scoped lang="less">
.wrapper {
  width: 400px;
  max-width: 100%;
  height: 250px;
  border-radius: 10px;
  background: #fcfcfc;
  box-shadow: 5px 0 30px 0 rgba(0, 0, 0, 0.3);
}

.card-type-images {
  display: flex;
  height: 50px;
  padding: 5px;
  justify-content: flex-end;
}

.icon {
  flex: 0 0 70px;
}

.card-number {
  margin: 30px 0 0 30px;

  &__input {
    width: 70%;
  }
}

.card-other {
  margin: 30px 30px 0;

  &__input {
    width: 25%;
    margin-right: 70px;

    @media (max-width: 500px) {
      margin-right: 30px;
    }
  }
}
</style>
