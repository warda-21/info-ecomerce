<template>
  <div id="homeView">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3  class="mb-4 rounded" id="heading">
            <a href="http://localhost:8081/signup" class="bg-white px-2 py-2 rounded text-dark" style="color: #333; text-decoration: none;"> Start shopping</a> </h3>
        <!--<p class="lead mb-0 bg-dark p-1 rounded"> Demo Ecommerce</p>-->    
        </header>
      </div>
      <hr />
    </div>

    <!--    display categories-->
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3"> Top Categories</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="index in this.categorySize" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <HomeCategoryView :category="categories[index-1]" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import HomeCategoryView from "../components/Category/HomeCategoryView";
export default {
  name: "HomeView",
  components: {HomeCategoryView},
  props: ["categories"],
  data() {
    return {
      categorySize: 0
    }
  },
  mounted() {
    this.categorySize = Math.min(6, this.categories.length );
  }
};
</script>
<style>
  .page-holder {
    min-height: 100vh;
  }
  .bg-cover{
    background-size: cover !important;
  }
  #background-div {
    background: url("../assets/home.jpg");
  }
  #heading {
    font-weight: 400;
  }
</style>