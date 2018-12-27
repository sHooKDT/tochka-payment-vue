<template>
  <div class="tab-links">
    <router-link to="/payments/card" class="tab-link">
      Картой другово банка
    </router-link>
    <router-link to="/payments/online" class="tab-link">
      Из интернет-банка
    </router-link>
    <router-view name="paymentTab"></router-view>
  </div>
</template>
<style lang="less" scoped>
.tab-link {
  display: inline-block;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  text-decoration: none;
  background: rgba(191, 240, 255, 0.5);
  padding: 0.6em;
  font-size: 12px;
  color: #666;
}
.router-link-active {
  border: 1px solid gray;
}
</style>
