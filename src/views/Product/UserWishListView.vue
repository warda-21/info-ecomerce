<template>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <br>
          <table> 
   <tr>
   <td>
    <a href="">
       <p>
  
       <router-link :to="{name:'UserWishListView'}" class="custom-link">
           <label type="button" calss="btn btn-primary">&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Your wish List&nbsp;&nbsp;</label> 
       </router-link>&nbsp;</p>
  
    </a>  </td>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <td>
   <p><router-link :to="{name:'CartView'}" class="custom-link">
           <label type="button" calss="btn btn-primary">&nbsp;&nbsp;Your cart&nbsp;&nbsp;</label>
       </router-link>
   </p>
   </td>
   </tr>
   
   </table>

          <h4 class="pt-3" style="font-weight: bold;">Your WishList</h4>
        </div>
      </div>
  
      <!-- diaplay products -->
  
      <div class="row">
        <div
          v-for="product of products"
          :key="product.id"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <WishlistProductBox :product="product" :products="products"> </WishlistProductBox>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  import WishlistProductBox from "../../components/WishlistProductBox.vue";
  export default {
    components: { WishlistProductBox },
    data() {
      return {
        token: null,
        products: null,
      };
    },
    props: ["baseURL"],
    methods: {
      fetchWishList() {
        axios
          .get(`http://localhost:8080/wishlist/${this.token}`)
          .then((data) => {
            this.products = data.data;
          })
          .catch((err) => {
            console.log("err", err);
          });
      },
    },
    mounted() {
      this.token = localStorage.getItem("token");
      this.fetchWishList();
    },
  };
  </script>

<style scoped>
h4 {
font-family: 'Roboto', sans-serif;
color: #484848;
font-weight: 700;
}
#add-product {
float: right;
font-weight: 500;
}
.custom-link {
  /* Ajouter les styles de votre choix */
  text-decoration: none;
  color: rgb(132, 0, 255);
  font-weight: bold;
}
</style>