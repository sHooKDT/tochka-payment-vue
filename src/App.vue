<template>
  <div id="app">
    <main class="content">
      <Header
        company_name="Щибриков Евгений Евгеньевич"
        company_type="Индивидуальный предприниматель"
      />
      <ShadowSplitter />
      <PayFromAnotherBank />
    </main>
  </div>
</template>
<script>
import Header from "./components/Header";
import PayFromAnotherBank from "./components/PayFromAnotherBank";
import ShadowSplitter from "./components/ShadowSplitter";

export default {
  name: "app",
  components: {
    Header,
    ShadowSplitter,
    PayFromAnotherBank
  }
};
</script>
<style lang="less">
#app {
  display: flex;
  justify-content: center;
  font-family: Roboto, Arial, "Helvetica Neue", sans-serif;
}
.content {
  width: 100%;
  max-width: 900px;
}
</style>
