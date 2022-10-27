<template>
  <section class="products-container">
    <transition mode="out-in">
      <div
        v-if="products?.length"
        class="products"
        key="products"
      >
        <div
          class="product"
          v-for="(product, index) in products"
          :key="index"
        >
          <router-link to="/">
            <img
              v-if="product.fotos"
              :src="product.fotos[0].src"
              :alt="product.fotos[0].titulo"
            >
            <p class="preco">{{product.preco}}</p>
            <h2 class="nome">{{product.nome}}</h2>
            <p class="titulo">{{product.descricao}}</p>
          </router-link>
        </div>
        <ProductPagination
          :productsTotal="productsTotal"
          :productsByPage="productsByPage"
        />
      </div>
      <div
        class="sem-resultados"
        v-else-if="products && !products.length"
        key="no-result"
      >
        <p>Busca sem resultados. Tente buscar outro termo.</p>
      </div>
      <LoadingPage
        v-else
        key="loading"
      />
    </transition>
  </section>
</template>

<script>
import { api } from "@/services/api.js";
import ProductPagination from "@/components/ProductPagination.vue";
import { queryParamsSerialize } from "@/helpers/queryParamsSerialize.js";

export default {
  name: "ProductList",
  components: {
    ProductPagination,
  },
  data() {
    return {
      products: [],
      productsByPage: 9,
      productsTotal: 0,
    };
  },
  computed: {
    url() {
      const query = queryParamsSerialize(this.$route.query);
      return `/produto?_limit=${this.productsByPage}${query}`;
    },
  },
  methods: {
    getProducts() {
      this.products = null;
      api.get(this.url).then((response) => {
        this.productsTotal = +response.headers["x-total-count"];
        this.products = response.data;
      });
    },
  },
  watch: {
    url() {
      this.getProducts();
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}

.products-container {
  max-width: 1000px;
  margin: 0 auto;
}

.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
}
</style>