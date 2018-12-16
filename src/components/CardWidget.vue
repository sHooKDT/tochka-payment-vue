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
        v-model="cardNumber"
        v-on:change="validate"
      />
      {{ this.errors.cardNumber }}
    </div>
    <div class="card-other">
      <TextField
        class="card-other__input"
        placeholder="05/22"
        v-model="expiration"
      />
      <TextField class="card-other__input" placeholder="036" v-model="holder" />
    </div>
  </div>
</template>
<script>
import CardsSVGSprite from "./CardsSVGSprite";
import TextField from "./TextField";

export default {
  name: "CardWidget",
  components: { CardsSVGSprite, TextField },
  data: function() {
    return {
      cardNumber: "",
      expiration: new Date(),
      holder: "",
      errors: {}
    };
  },
  methods: {
    validate() {
      this.errors = {};

      if (!/\d{4} ?\d{4} ?\d{4} ?\d{4}/.test(this.cardNumber)) {
        this.errors.cardNumber = "Card number doesn't match format";
      }
    }
  }
};
</script>
<style scoped lang="less">
.wrapper {
  width: 400px;
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
  }
}
</style>
