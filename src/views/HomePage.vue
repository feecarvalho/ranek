<template>
    <section>
        <h1>💵 Compre ou Venda 💵</h1>
        <ProductList />
        <SearchProduct />
    </section>
</template>

<script>
import SearchProduct from "@/components/SearchProduct.vue"
import ProductList from "@/components/ProductList.vue"

export default {
    name: "HomePage",
    components: {
        SearchProduct,
        ProductList
    }
};
</script>

<style>
h1 {
    color: #87f;
    margin-top: 40px;
    font-size: 2rem;
    text-align: center;
}
</style>