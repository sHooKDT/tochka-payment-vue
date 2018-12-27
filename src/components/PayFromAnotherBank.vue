<template>
  <div>
    <div v-if="status === 'success'" class="check-container">
      <h2>Готово!</h2>
      <img
        src="https://image.flaticon.com/icons/svg/148/148767.svg"
        alt=""
        height="100"
        width="100"
      />
    </div>
    <div class="pay-from-another-bank-form" v-else>
      <CardWidget
        class="card-widget"
        v-model="cardInfo"
        :errors="errors.cardInfo"
      />
      <form action="" class="form">
        <LabeledTextField
          label="Сумма"
          name="sum"
          placeholder="От 1 000 до 75 000 р"
          class="form-element"
          v-model="sum"
          :error="errors.sum"
        />
        <LabeledTextField
          label="Комментарий"
          name="comment"
          placeholder="До 150 символов"
          class="form-element"
          v-model="comment"
        />
        <LabeledTextField
          label="Ваша эл.почта"
          name="email"
          placeholder="Для квитанций об оплате"
          class="form-element"
          v-model="email"
          :error="errors.email"
        />
        <AquaButton
          class="submit-button"
          type="submit"
          @click.stop.prevent="sendForm()"
          :disabled="hasErrors"
        >
          Заплатить <span v-if="hasErrors">&nbsp;X</span>
        </AquaButton>
      </form>
    </div>
  </div>
</template>
<script>
import AquaButton from "./AquaButton";
import CardWidget from "./CardWidget";
import LabeledTextField from "./LabeledTextField";
import Axios from "axios";

export default {
  name: "PayFromAnotherBank",
  components: {
    CardWidget,
    LabeledTextField,
    AquaButton
  },
  data: function() {
    return {
      sum: "",
      comment: "",
      email: "",
      cardInfo: {
        cardNumber: "",
        expiration: "",
        cvc: ""
      },
      status: "initial"
    };
  },
  computed: {
    errors() {
      return {
        sum: !this.sum || this.sum < 1000 || this.sum > 75000,
        email: !/^\w+@\w+\.\w{1,3}$/.test(this.email),
        cardInfo: {
          cardNumber: !/^\d{4} \d{4} \d{4} \d{4}$/.test(
            this.cardInfo.cardNumber
          ),
          expiration: !/^\d{2}\/\d{2}$/.test(this.cardInfo.expiration),
          cvc: !/^\d{3}$/.test(this.cardInfo.cvc)
        }
      };
    },
    hasErrors() {
      return Object.values(this.errors).some(err => {
        if (typeof err === "object") {
          return Object.values(err).some(e => e);
        }

        return err;
      });
    }
  },
  methods: {
    sendForm() {
      if (!this.hasErrors) {
        Axios.post("/payment/create", {
          sum: this.sum,
          comment: this.comment,
          email: this.email,
          cardInfo: this.cardInfo
        }).then(() => (this.status = "success"));
      }
    }
  }
};
</script>
<style scoped lang="less">
.pay-from-another-bank-form {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
.card-widget {
  margin: 15px 0 30px;
}
.form {
  flex: 1 0 300px;
  display: flex;
  flex-flow: column nowrap;
  margin-left: 30px;
}
.form-element {
  flex: 1;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.submit-button {
  margin: 30px 0 10px;
  align-self: center;
}
.check-container {
  padding: 100px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
</style>
