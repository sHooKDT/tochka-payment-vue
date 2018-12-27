<template>
  <div class="product">
    <img class="product__preview" :src="product.photo" :alt="product.name" />
    <h3 class="product__name">{{ product.name }}</h3>
    <span class="product__price">{{ formatPrice(product.price) }}</span>
  </div>
</template>
<script>
import currency from "currency.js";

export default {
  props: ["product"],
  methods: {
    formatPrice(price) {
      return currency(price, {
        formatWithSymbol: true,
        symbol: "₽",
        pattern: "# !"
      }).format();
    }
  }
};
</script>
<style scoped lang="less">
.product {
  margin: 10px;
  padding: 15px;
  border: 1px solid #999;

  &__preview {
    width: 100%;
    height: 230px;
    object-fit: cover;
    object-position: center;
  }

  &__name {
    font-weight: normal;
    font-size: 24px;
    margin: 10px 0;
  }

  &__price {
    color: #666;
    font-size: 18px;
  }
}
</style>
