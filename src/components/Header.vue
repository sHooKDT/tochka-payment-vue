<template>
  <div class="header-wrapper">
    <div class="headers">
      <h2>{{ company_type }} {{ company_name }}</h2>
      <div class="links">
        <a class="link" href="tel:+79220289999">+7 (922) 028-99-99</a>
        <a class="link" href="http://eugeny.com">eugeny.com</a>
        <a class="link" href="mailto:eugeny@gmail.com">eugeny@gmail.com</a>
      </div>
      <button class="link-like-button">Информация о компании</button>
      <button class="link-like-button">Показать реквизиты</button>
    </div>
    <img src="../assets/giraffe.svg" alt="Giraffe" width="300" />
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["company_type", "company_name"]
};
</script>
<style scoped lang="stylus">
$link-active-color = #0000ff
$link-hover-color = #000077

img
    width: 300px

.header-wrapper
    display: flex

.headers
    flex: 1

.link, .link:visited, .link:active
  color: $link-active-color
  margin: 10px 5px
  text-decoration: none

  &:hover
    color: $link-hover-color

.link-like-button
  cursor: pointer
  color: $link-active-color
  background: none
  outline none
  border none

  &:hover
    color: $link-hover-color
</style>
