<template>
    <div class="card h-100 w-100">
        <div class="embed-responsive embed-responsive-16by9">
            <img
                class="card-img-top embed-responsive-item"
                :src="product.imageURL"
                alt="Card image cap"
            />
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
                {{ product.description.substring(0, 65) }}...
            </p>
            <router-link :to="{name: 'EditProduct', params: {id: product.id}}">
                <label class="text-center">Edit</label>
            </router-link>
     <!--       <router-link :to="{name: 'DeleteProduct', params: {id: product.id}}">
                <button class="btn btn-primary">Delete</button>
            </router-link> -->
            &nbsp;
            <a href =#>
            <label type="button" class="text-center"
                            @click="deleteProduct(product.id)" >Delete</label>
            </a>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
    export default {
        name: "ProductBox",
        props: ["product"],
        methods: {
            async deleteProduct(id) {
                await axios.delete(`http://localhost:8080/product/delete/${id}`,
                    this.product)
                    .then(() => {
                        swal({
                            text: "product has been deleted successfully",
                            icon: "success"
                            
                        }).then(function(){
                            location.reload()

                        });                     
                    }).catch(err => console.log('err', err));
                    
                       
            }
        },
    }
</script>
<style scoped>
    .card-img-top {
        object-fit: cover;
    }
</style>