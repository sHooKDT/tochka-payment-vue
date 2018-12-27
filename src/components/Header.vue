<template>
  <div class="header-wrapper">
    <div class="headers">
      <h2>{{ company_type }} {{ company_name }}</h2>
      <div class="links">
        <a class="link" :href="`tel:+${phone}`">{{ formattedPhone }}</a>
        <a class="link" :href="website">{{
          website.replace(/https?:\/\//, "")
        }}</a>
        <a class="link" :href="`mailto:${email}`">{{ email }}</a>
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
  props: ["company_type", "company_name"],
  data: function() {
    return {
      phone: "79220289729",
      website: "http://eugeny.com",
      email: "eugeny@gmail.com"
    };
  },
  computed: {
    formattedPhone: function() {
      const phoneParts = /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/.exec(this.phone);

      return `+${phoneParts[1]} (${phoneParts[2]}) ${phoneParts[3]}-${
        phoneParts[4]
      }-${phoneParts[5]}`;
    }
  }
};
</script>
<style scoped lang="less">
@link-active-color: #0000ff;
@link-hover-color: #000077;

img {
  width: 300px;

  @media (max-width: 500px) {
    display: none;
  }
}
.header-wrapper {
  display: flex;
}
.headers {
  flex: 1 0 300px;
}
.link,
.link:visited,
.link:active {
  color: @link-active-color;
  margin: 10px 5px;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: @link-hover-color;
  }
}
.link-like-button {
  cursor: pointer;
  color: @link-active-color;
  background: none;
  outline: none;
  border: none;

  &:hover {
    color: @link-hover-color;
  }
}
</style>
