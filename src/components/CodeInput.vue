<template>
  <div class="code-page">
  <form action="" method="get" class="form-code">
    <div class="code-raw">
      <input type="text" name="" id="num1" class="num">
      <input type="text" name="" id="num2" class="num">
      <input type="text" name="" id="num3" class="num">
      <input type="text" name="" id="num4" class="num">
    </div>
    <input type="button" value="Valider le code secret" class="validate" @click="sendCode()">
  </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: "",
      num2: "",
      num3: "",
      num4: ""
    }
  },
  methods: {
    sendCode() {
      this.num1 = num1,
      this.num2 = num2,
      this.num3 = num3,
      this.num4 = num4

      if (num1.value == "" || num2.value == "" || num3.value == "" || num4.value == "") {
        alert(
          "Veuillez saisir les chiffres qui composent le code secret"
        );
      } else if (num1.value == "5" & num2.value == "7" & num3.value == "1" & num4.value == "3"){
        window.location.href = "/WinPage"
      } else {
        alert(
          "Vous avez échoué, veuillez retenter votre chance"
        );
      }
    }
  }
}
</script>
