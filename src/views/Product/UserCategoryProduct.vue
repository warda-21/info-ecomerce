<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3"> Our Products for the choosen Category</h4>
            </div>
        </div>
        <div class="row">
                <!--display all products-->
                <div  v-for="product of categoriesparproducts" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
                    <UserProductBox :product="product" :categoriesparproducts="categoriesparproducts" />
                </div>
                
                <h4 class="pt-3">Categorie: {{ categoriesparproducts[0].name }}</h4>
        </div>
    </div>
    
    </template>
    
    <script>
    import UserProductBox from '@/components/UserProductBox.vue';
    
    
    export default {
    props: ["categoriesparproducts"],
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
    </style>