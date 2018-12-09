<template>
  <div class="wrapper">
    <CardsSVGSprite />
    <div class="card-type-images">
      <svg class="icon"><use xlink:href="#mastercard" /></svg>
      <svg class="icon"><use xlink:href="#mastercard-1" /></svg>
      <svg class="icon"><use xlink:href="#visa" /></svg>
    </div>
  </div>
</template>
<script>
import CardsSVGSprite from "./CardsSVGSprite";

export default {
  name: "CardWidget",
  components: { CardsSVGSprite }
};
</script>
