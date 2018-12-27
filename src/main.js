import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Admin from "./Admin";
import PayFromAnotherBank from "./components/PayFromAnotherBank";
import PaymentsTab from "./components/PaymentsTab";
import PaymentRequest from "./components/PaymentRequest";
import PayOnline from "./components/PayOnline";
import Router from "./Router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/admin", component: Admin },
  {
    path: "/",
    component: App,
    children: [
      {
        path: "payments",
        components: {
          default: App,
          tab: PaymentsTab
        },
        children: [
          {
            path: "card",
            components: {
              default: App,
              tab: PaymentsTab,
              paymentTab: PayFromAnotherBank
            }
          },
          {
            path: "online",
            components: {
              default: App,
              tab: PaymentsTab,
              paymentTab: PayOnline
            }
          },
        ]
      },
      {
        path: "request",
        components: {
          default: App,
          tab: PaymentRequest
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render: h => h(Router)
}).$mount("#app");
