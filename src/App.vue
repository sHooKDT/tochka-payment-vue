<template>
  <div id="app">
    <main class="content">
      <Header
        company_name="Щибриков Евгений Евгеньевич"
        company_type="Индивидуальный предприниматель"
      />
      <ShadowSplitter />
      <CardWidget />
    </main>
  </div>
</template>
<script>
import CardWidget from "./components/CardWidget";
import Header from "./components/Header";
import ShadowSplitter from "./components/ShadowSplitter";

export default {
  name: "app",
  components: {
    Header,
    ShadowSplitter,
    CardWidget
  }
};
</script>
<style lang="stylus">
#app
  display: flex
  justify-content: center;
  font-family: Roboto, Arial, "Helvetica Neue", sans-serif

.content
  width: 100%
  max-width 900px;
</style>
