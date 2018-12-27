<template>
  <div id="app">
    <main class="content">
      <Header
        company_name="Щибриков Евгений Евгеньевич"
        company_type="Индивидуальный предприниматель"
      />
      <ShadowSplitter />
      <div class="header-tabs-wrapper">
        <router-link to="/payments" class="header-tab">Заплатить</router-link>
        <router-link to="/request" class="header-tab">
          Запросить платёж
        </router-link>
      </div>
      <router-view name="tab"></router-view>
      <ShadowSplitter />
      <Products />
    </main>
    <router-link to="/admin" class="to-admin">Админка</router-link>
  </div>
</template>
<script>
import Header from "./components/Header";
import Products from "./components/Products";
import ShadowSplitter from "./components/ShadowSplitter";

export default {
  name: "app",
  components: {
    Header,
    ShadowSplitter,
    Products
  }
};
</script>
<style lang="less">
#app {
  display: flex;
  justify-content: center;
  font-family: Roboto, Arial, "Helvetica Neue", sans-serif;
  min-width: 375px;
}
.content {
  width: 100%;
  padding: 0 30px;
  max-width: 900px;
  overflow: hidden;
}
.to-admin {
  box-sizing: border-box;
  background: black;
  color: white;
  outline: 0;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 3px;
  padding: 10px;
  text-decoration: none;
  transition: all linear 0.3s;
  border: 3px solid transparent;

  &:hover {
    color: black;
    background: white;
    border: 3px solid black;
  }
}
.header-tabs-wrapper {
  margin: 20px 0;
}
.header-tab {
  color: #6d62ff;
  font-size: 24px;
  text-decoration: none;

  &.router-link-active {
    color: black;
  }
}
</style>
