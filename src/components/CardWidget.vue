<template>
  <div class="wrapper">
    <CardsSVGSprite />
    <div class="card-type-images">
      <svg class="icon"><use xlink:href="#mastercard"></use></svg>
      <svg class="icon"><use xlink:href="#mastercard-1"></use></svg>
      <svg class="icon"><use xlink:href="#visa"></use></svg>
    </div>
    <div class="card-number">
      <TextField class="card-number__input" placeholder="4111 1000 0000 0000" />
    </div>
    <div class="card-other">
      <TextField class="card-other__input" placeholder="05/22" />
      <TextField class="card-other__input" placeholder="036" />
    </div>
  </div>
</template>
<script>
import CardsSVGSprite from "./CardsSVGSprite";
import TextField from "./TextField";

export default {
  name: "CardWidget",
  components: { CardsSVGSprite, TextField }
};
</script>
<style scoped lang="less">
.wrapper {
  width: 500px;
  height: 300px;
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
  margin: 50px 30px 0;

  &__input {
    width: 25%;
    margin-right: 70px;
  }
}
</style>
