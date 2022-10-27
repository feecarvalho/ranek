<template>
  <ul v-if="totalPages > 1">
    <li v-for="pagina in pages" :key="pagina">
      <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    productsByPage: {
      type: Number,
      default: 1,
    },
    productsTotal: {
      type: Number,
      default: 1,
    }
  },
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        _page: page
      }
    }
  },
  computed: {
    pages() {
      const currentPage = +this.$route.query._page;
      const range = 9;
      const total = this.totalPages;
      const offset = Math.ceil(range / 2);
      const pagesArray = [];

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i)
      }

      pagesArray.splice(0, currentPage - offset);
      pagesArray.splice(range, total);
      return pagesArray;
    },  
    totalPages() {
      const total = this.productsTotal / this.productsByPage
      return total !== Infinity ? Math.ceil(total) : 0
    }
  }
}
</script>
<style>
ul {
  grid-column: 1 / -1;
}
li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a:hover, li a.active {
  background: #87f;
  color: #fff;
}
</style>