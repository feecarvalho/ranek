<template>
  <section>
    <div
      v-if="product"
      class="product"
    >
      <ul
        class="picture"
        v-if="product.fotos"
      >
        <li
          v-for="(picture, index) in product.fotos"
          :key="index"
        ><img
            :src="picture.src"
            :alt="picture.titulo"
          ></li>
      </ul>
      <div class="info">
        <h1>{{product.nome}}</h1>
        <p class="price">{{numberToCurrency}}</p>
        <p class="description">{{product.descricao}}</p>
        <button
          class="btn"
          v-if="product.vendido === 'false'"
        >Comprar</button>
        <button
          class="btn"
          v-else
          disabled
        >Produto vendido.</button>
      </div>
    </div>
    <LoadingPage v-else />
  </section>
</template>

<script>
import { api } from "@/services/api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Product",
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  methods: {
    getProduct() {
      api.get(`/produto/${this.id}`).then((response) => {
        this.product = response.data;
      });
    },
  },
  created() {
    this.getProduct();
  },
  computed: {
    numberToCurrency() {
      const nv = Number(this.product.preco).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return nv;
    },
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.price {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.info h1 {
  text-align: left;
}

.description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>