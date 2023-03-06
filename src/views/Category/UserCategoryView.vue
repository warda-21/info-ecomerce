<template>
    
    <div class="container">
        <div class="adminPanel container">
 
<table>
   
<tr>
    <br>
 <br><br>
<td>
    <p>

    <router-link :to="{name:'UserWishListView'}" class="custom-link">
        <label type="button" calss="btn btn-primary">Your wish List&nbsp;&nbsp;</label> 
    </router-link>&nbsp;</p>
</td>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<td>
<p><router-link :to="{name:'CartView'}" class="custom-link">
        <label type="button" calss="btn btn-primary">&nbsp;&nbsp;Your cart</label>
    </router-link>
</p>
</td>
</tr>

</table>
   
    
   
</div>
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Our IT categories:</h4>
            </div>
        </div>
        <div class="row">
            <div v-for="category of categories" :key="category.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
                <UserCategoryBox :category="category">
                </UserCategoryBox>
                
            </div>
        </div>
        
    
         

    </div>

   
</template>
    
    <script>
    

//import axios from 'axios';
import UserCategoryBox from '../../components/Category/UserCategoryBox';


    export default {   
    name : "UserCategoryView",
    components: {UserCategoryBox},
    product: null,
    props: [ "baseURL" , "categories" ,"products"]
    ,
        methods: {

    },
    mounted(){
       
        console.log(localStorage.getItem("token"))
      }
   
}
    </script>
<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
#add-category {
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