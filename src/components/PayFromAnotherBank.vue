<template>
  <div class="pay-from-another-bank-form">
    <CardWidget />
    <form action="">
      <label for="sum-input">
        Сумма
        <TextField
          name="sum"
          id="sum-input"
          placeholder="От 1 000 до 75 000 р"
        />
      </label>
      <label for="comment-input">
        Комментарий
        <TextField
          name="comment"
          id="comment-input"
          placeholder="До 150 символов"
        />
      </label>
      <label for="email-input">
        Сумма
        <TextField
          name="email"
          id="email-input"
          placeholder="Для квитанций об оплате"
        />
      </label>
    </form>
  </div>
</template>
<script>
import CardWidget from "./CardWidget";
import TextField from "./TextField";

export default {
  name: "PayFromAnotherBank",
  components: {
    CardWidget,
    TextField
  }
};
</script>
<style scoped lang="less"></style>
