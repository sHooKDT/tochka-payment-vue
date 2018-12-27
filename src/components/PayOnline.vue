<template>
  <div>
    <h3 v-if="status === 'success'">Success!</h3>
    <h3 v-if="status === 'loading'">Loading...</h3>
    <h3 v-if="status === 'error'">Error!!!</h3>
    <form
      class="pay-online-form"
      @submit.prevent.stop="submitForm()"
      v-if="status === 'unknown'"
    >
      <labeled-text-field
        class="field"
        label="От кого"
        placeholder="ИНН или название плательщика"
        v-model="from"
      />
      <labeled-text-field
        class="field"
        label="БИК"
        placeholder="10 или 12 цифр"
        v-model="bik"
      />
      <labeled-text-field
        class="field"
        label="Номер счёта"
        placeholder="9 цифр"
        v-model="account"
      />
      <labeled-text-field
        class="field"
        label="Налог"
        placeholder="Без НДС"
        :value="taxLabel"
      />
      <div class="nds-switch field">
        <label for="no-nds" :class="[{ active: tax === '0' }]">
          Без НДС
          <input type="radio" name="nds" value="0" id="no-nds" v-model="tax" />
        </label>
        <label for="10nds" :class="[{ active: tax === '10' }]">
          НДС 10%
          <input type="radio" name="nds" value="10" id="10nds" v-model="tax" />
        </label>
        <label for="18nds" :class="[{ active: tax === '18' }]">
          НДС 18%
          <input type="radio" name="nds" value="18" id="18nds" v-model="tax" />
        </label>
      </div>
      <labeled-text-field
        class="field"
        label="Сколько"
        placeholder="от 1000 до 75000 р."
        v-model="sum"
      />
      <div class="submit-button-wrapper">
        <AquaButton type="submit" class="submit-button">
          Получить файл для интернет-банка
        </AquaButton>
        <button type="button" class="link-like-button" @click="resetForm()">
          Очистить форму
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import Axios from "axios";
import AquaButton from "./AquaButton";
import LabeledTextField from "./LabeledTextField";

const getDefaults = function() {
  return {
    status: "unknown",
    from: "",
    bik: "",
    account: "",
    tax: "0",
    sum: ""
  };
};

export default {
  components: {
    LabeledTextField,
    AquaButton
  },
  data: getDefaults,
  computed: {
    taxLabel() {
      if (this.tax === 0) {
        return "Без НДС";
      } else {
        return `НДС ${this.tax}%`;
      }
    }
  },
  methods: {
    resetForm() {
      Object.assign(this, getDefaults());
    },
    submitForm() {
      const formData = {
        from: this.from,
        bik: this.bik,
        account: this.account,
        tax: this.tax,
        sum: this.sum
      };
      this.status = "loading";
      Axios.post("/payment/create/online", formData)
        .then(({ data }) => {
          if (data.status === "success") {
            this.status = "success";
            return data.id;
          } else {
            throw new Error("not succeed");
          }
        })
        .then(documentId => {
          window.location.replace(`http://localhost:5000/payment/${documentId}/invoice`);
        })
        .catch(() => {
          this.status = "error";
        });
    }
  }
};
</script>
<style lang="less" scoped>
.nds-switch {
  padding-left: 30%;

  label {
    display: inline-block;
    margin: 10px 0 10px;
    padding: 5px;
    color: #7083ff;
  }

  label.active {
    color: black;
  }

  input {
    display: none;
  }
}

.field {
  margin: 10px 0;
}

.submit-button-wrapper {
  display: flex;
  justify-content: center;
}

.submit-button {
  margin: 50px;
  width: 200px;
}

.link-like-button {
  @link-active-color: #0000ff;
  @link-hover-color: #000077;

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
