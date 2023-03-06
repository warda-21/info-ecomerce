<template>
 <NavbarView/> 

  <div style="min-height: 60vh">
  <router-view
  v-if="products && categories " 
  :baseURL="baseUrl"
  :categories="categories"
  :products="products"
  @fetchData="fetchData"
  >
  
  </router-view>
</div>

<FooterView/>
</template>

<script>
import FooterView from "./components/FooterView.vue";
import NavbarView from "./components/NavbarView.vue";
import axios from "axios";

export default {
  data() {
    return {
      baseUrl : "http://localhost:8080",
      products: null,
      categories: null
    };
  },

  components: { FooterView , NavbarView},

  methods : {
    async fetchData() {

      // api call to get categories
      await axios.get(this.baseUrl + "/category/")
      .then(res => {
        this.categories = res.data
      }).catch((err) => console.log('err',err));

      // api call to get produts

      await axios.get(this.baseUrl + "/product/")
      .then(res => {
        this.products = res.data
      }).catch((err) => console.log('err',err));

         

    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
