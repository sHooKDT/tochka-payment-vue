<template>
  <div>
    <div>
      <button @click="setTab('cards')">По картам</button>
      <button @click="setTab('online')">Онлайн</button>
    </div>
    <div v-if="tab === 'cards'">
      <h2>Платежи по картам</h2>
      <table>
        <thead>
          <tr>
            <th
              @click="setSort('sum')"
              :class="[{ sorting: this.sort === 'sum' }, 'sortable']"
            >
              Сумма
            </th>
            <th
              @click="setSort('comment')"
              :class="[{ sorting: this.sort === 'comment' }, 'sortable']"
            >
              Комментарий
            </th>
            <th
              @click="setSort('email')"
              :class="[{ sorting: this.sort === 'email' }, 'sortable']"
            >
              Email
            </th>
            <th
              @click="setSort('cardNumber')"
              :class="[{ sorting: this.sort === 'cardNumber' }, 'sortable']"
            >
              Номер карты
            </th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="payment in cards"
            :key="payment._id"
            :class="[{ unsafe: payment.notSafe }]"
          >
            <td>{{ payment.sum }}</td>
            <td>{{ payment.comment }}</td>
            <td>{{ payment.email }}</td>
            <td>{{ formatCard(payment.cardInfo.cardNumber) }}</td>
            <td>
              <button class="mark-as-unsafe" @click="markAsUnsafe(payment._id)" v-if="!payment.notSafe">
                Небезопасен
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h2>Платежи из интернет-банка</h2>
      <table>
        <thead>
          <tr>
            <th>От кого</th>
            <th>БИК</th>
            <th>Кому</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in online" :key="payment._id">
            <td>{{ payment.from }}</td>
            <td>{{ payment.bik }}</td>
            <td>{{ payment.account }}</td>
            <td>{{ payment.sum }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Axios from "axios";

export default {
  data: function() {
    return {
      cards: [],
      online: [],
      tab: "cards",
      sort: "sum",
    };
  },
  methods: {
    formatCard(cardNumber) {
      return `**** **** **** ${cardNumber.slice(-4)}`;
    },
    setTab(selectedTab) {
      this.tab = selectedTab;
    },
    setSort(field) {
      this.sort = field;
      this.fetchData();
    },
    markAsUnsafe(id) {
      Axios.post(`/payment/${id}/unsafe`).then(() => this.fetchData());
    },
    fetchData() {
      Axios.get(`/payments/list/cards?sort=${this.sort}`).then(({ data }) => {
        this.cards = data;
      });
      Axios.get("/payments/list/online").then(({ data }) => {
        this.online = data;
      });
    }
  },
  mounted: function() {
    this.fetchData();
  }
};
</script>
<style lang="less" scoped>
.unsafe td {
  background: #ff5b67;
}
.sorting::after {
  content: "↖";
}
.sortable {
  cursor: pointer;
}
.mark-as-unsafe {
  background: none;
  border: 0;
  cursor: pointer;
  transition: all linear 0.2s;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background: #d9d9d9;
  }
}
table {
  border-spacing: 0;
  font-family: Roboto;
}
thead th {
  background: #ececec;
  border: 1px solid gray;
}
td,
th {
  padding: 15px;
}
</style>
