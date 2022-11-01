<template>
  <form>
    <label for="name">Nome</label>
    <input
      id="name"
      name="name"
      type="text"
      v-model="name"
    >
    <label for="email">E-mail</label>
    <input
      id="email"
      name="email"
      type="email"
      v-model="email"
    >
    <label for="password">Senha</label>
    <input
      id="password"
      name="password"
      type="password"
      v-model="password"
    >
    <label for="zipcode">CEP</label>
    <input
      @keyup="fillZipCode"
      id="zipcode"
      name="zipcode"
      type="text"
      v-model="zipcode"
    >
    <label for="street">Rua</label>
    <input
      id="street"
      name="street"
      type="text"
      v-model="street"
    >
    <label for="number">Numero</label>
    <input
      id="number"
      name="number"
      type="text"
      v-model="number"
    >
    <label for="neighbourhood">Bairro</label>
    <input
      id="neighbourhood"
      name="neighbourhood"
      type="text"
      v-model="neighbourhood"
    >
    <label for="city">Cidade</label>
    <input
      id="city"
      name="city"
      type="text"
      v-model="city"
    >
    <label for="state">Estado</label>
    <input
      id="state"
      name="state"
      type="text"
      v-model="state"
    >
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "../helpers/mapFields.js";
import { zipCodeApi } from "../services/zipCodeApi.js";
export default {
  computed: {
    ...mapFields({
      fields: [
        "name",
        "email",
        "street",
        "zipcode",
        "password",
        "number",
        "neighbourhood",
        "city",
        "state",
      ],
      base: "usuario",
      mutation: "UPDATE_USER",
    }),
  },
  methods: {
    fillZipCode() {
      const zipcode = this.zipcode.replace(/\D/g, "");
      if (zipcode.length === 8) {
        zipCodeApi(zipcode).then((res) => {
          this.street = res.data.logradouro;
          this.neighbourhood = res.data.bairro;
          this.city = res.data.localidade;
          this.state = res.data.uf;
        });
      }
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>