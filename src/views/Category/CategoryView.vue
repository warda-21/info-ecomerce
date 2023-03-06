<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Our IT categories:</h4>
                <router-link id="add-category" :to="{name : 'AddCategory'}" v-show="$route.name=='AdminCategory'">
                    <button class="btn btn-custom">Add Category</button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="category of categories" :key="category.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
                <CategoryBox :category="category">
                </CategoryBox>
            </div>
        </div>
    </div>
</template>
    
    <script>
    

//import axios from 'axios';
import CategoryBox from '../../components/Category/CategoryBox';
    export default {   
    name : "CategoryView",
    components: {CategoryBox},
    props: [ "baseURL" , "categories" ],
    mounted(){
    //    if (this.$route.name=='AdminCategory' && !localStorage.getItem('token')) {
    //  this.$router.push({name : 'Signin'});
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

.adminPanel{
  display : flex;
  flex-direction: column;
  align-items: center;
}
.adminPanel button{
  font-size: 30px;
  width: fit-content;
  margin: 55px 0;
}
.btn-custom {
    font-style: italic;
    background-color: rgb(11, 11, 133);
    color: white;
}

</style>