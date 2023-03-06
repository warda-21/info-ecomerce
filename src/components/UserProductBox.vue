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

        &nbsp;

        <div class="d-flex flex-row justify-content-between">
        <div class="input-group col-md-3 col-4 p-0">
        <div class="input-group-prepend">
            <span class="input-group-text">Quantity</span>
        </div>
        <input type="number" class="form-control" v-model="quantity" />
        </div>
        &nbsp;
        <a href =#>
        <label type="button" class="text-center"
        :class="{ product_added_cart: isAddedToCart }"
                        @click="addToCart()" >{{ cartlistString }}</label>               
        </a>
    </div>
            &nbsp;
        <a href =#>
        <label type="button"        
        id="wishlist-button"
        class="text-center"
        :class="{ product_added_wishlist: isAddedToWishlist }"
        @click="addToWishList()" >{{ wishlistString }}</label>               
        </a>




    </div>
</div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
    data() {
return {
    produit: {},
    category: {},
    id: null,
    token: null,
    isAddedToWishlist: false,
    isAddedToCart:false,
    wishlistString: "Add to wishlist",
    cartlistString: "Add to Cart",
    quantity: 1,
    
};
},
    name: "UserProductBox",
    //categoriesparproducts au lieu de products 
    props: [ "product","products"],



    methods: {
        addToWishList() {
            if (!this.token) {
        // user is not logged in
        // show some error
        swal({
          text: "please login to add item in cart",
          icon: "error",
        });
        return;
      }


    axios
    .post(`http://localhost:8080/wishlist/add?token=${this.token}`, {
        id: this.product.id,
    })
    .then(
        (response) => {
        if (response.status == 201) {
            this.isAddedToWishlist = true;
            this.wishlistString = "Added to WishList";

        }
        },
        (error) => {
        console.log(error);
        }
    );
},


// add to cart
addToCart() { 
    if (!this.token) {
        // user is not logged in
        // show some error
        swal({
          text: "please login to add item in cart",
          icon: "error",
        });
        return;
      }


    // add to cart
    axios
    .post(`http://localhost:8080/cart/add?token=${this.token}`, {
        productId: this.product.id,
        quantity: this.quantity,
    })
    .then((response) => {
        if (response.status == 201) {
            this.isAddedToCart = true;
            this.cartlistString = "Added to cart";

        }
    })
    .catch((err) => console.log("err", err));
},



    },

    mounted() {
        this.id = this.$route.params.id;
        //categoriesparproducts au lieu de products
        this.produit = this.products.find((product) => product.id == this.id);
        this.token=localStorage.getItem("token");
        
    },
}
</script>
<style scoped>
.card-img-top {
    object-fit: cover;
}
</style>