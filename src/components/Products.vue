<template>
  <div>
    <h2 class="products__title">О компании ИП Щибриков Евгений Евгеньевич</h2>
    <div class="products__wrapper">
      <ProductWidget
        v-for="product in productsList"
        class="product"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
<script>
import ProductWidget from "./ProductWidget";

class Product {
  constructor(name, price, photo) {
    this.id = Math.floor(Math.random() * 10000);
    this.name = name;
    this.photo = photo;
    this.price = price;
  }
}

export default {
  data: function() {
    return {
      products: [
        new Product(
          "Пихта новогодняя",
          4789,
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3Ec4agjtzqBG_56kqpQ2zePjXUxa4w3JsGbUldh3_N4WwENigA"
        ),
        new Product(
          "Пихта новогодняя",
          4789,
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3Ec4agjtzqBG_56kqpQ2zePjXUxa4w3JsGbUldh3_N4WwENigA"
        ),
        new Product(
          "Пихта новогодняя",
          4789,
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3Ec4agjtzqBG_56kqpQ2zePjXUxa4w3JsGbUldh3_N4WwENigA"
        )
      ]
    };
  },
  computed: {
    productsList() {
      return this.products.slice(0, 3);
    }
  },
  components: { ProductWidget }
};
</script>
<style scoped lang="less">
.products__title {
  text-align: center;
}
.products__wrapper {
  display: flex;
  flex-flow: row wrap;
}
.product {
  flex: 1;
}
</style>
