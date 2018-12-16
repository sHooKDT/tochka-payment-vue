<template>
  <div class="pay-from-another-bank-form">
    <CardWidget />
    <form action="" class="form">
      <LabeledTextField
        label="Сумма"
        name="sum"
        placeholder="От 1 000 до 75 000 р"
        class="form-element"
      />
      <LabeledTextField
        label="Комментарий"
        name="comment"
        placeholder="До 150 символов"
        class="form-element"
      />
      <LabeledTextField
        label="Ваша эл.почта"
        name="email"
        placeholder="Для квитанций об оплате"
        class="form-element"
      />
      <AquaButton>Заплатить</AquaButton>
    </form>
  </div>
</template>
<script>
import AquaButton from "./AquaButton";
import CardWidget from "./CardWidget";
import LabeledTextField from "./LabeledTextField";

export default {
  name: "PayFromAnotherBank",
  components: {
    CardWidget,
    LabeledTextField,
    AquaButton
  }
};
</script>
<style scoped lang="less">
.pay-from-another-bank-form {
  display: flex;
}
.form {
  display: flex;
  flex-flow: column nowrap;
  margin-left: 30px;
}
.form-element {
  flex: 1;
  display: flex;
  height: 100%;
  align-items: center;
}
</style>
