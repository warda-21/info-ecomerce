<template>
<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            
            <table>
   
   <tr>
    <br>
    <br><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
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
   <h4 class="pt-3"> Our products</h4>
   <br>
        </div>
    </div>
    <div class="row">
            <!--display all products-->
            <div  v-for="product of products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
                <UserProductBox :product="product" :products="products" />
            </div>
    </div>
</div>

</template>

<script>
import UserProductBox from '@/components/UserProductBox.vue';


export default {
props: ["products"],
components: { UserProductBox }
}
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