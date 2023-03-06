<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Add product</h3>
            </div>
        </div>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <form>
            <div class="form-group">
            <label>Category</label>
            <select class="form-control" v-model="categoryId" required>
              <option v-for="category of categories" :key="category.id" :value="category.id">{{category.categoryName}}</option>
            </select>
          </div>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="name"/>
            </div>
            <div class="form-group">
                <label>Description</label>
                <input type="text" class="form-control" v-model="description"/>
            </div>
            <div class="form-group">
                <label>Image</label>
                <input type="text" class="form-control" v-model="imageURL"/>
            </div>
            <div class="form-group">
                <label>Prix</label>
                <input type="text" class="form-control" v-model="price"/>
            </div>
            <button type="button" class="btn btn-primary" @click="addProduct">Submit</button>
        </form>
        </div>
        <div class="col-3"></div>
    </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios';
    import swal from 'sweetalert';
    export default {
      data(){
        return {
          id : null,
          name : null,
          description : null,
          imageURL : null,
          price : null,
          categoryId : null
        }
      },
      props : ["baseURL", "products" , "categories"],
      methods : {
        async addProduct() {
          const newProduct = {
            id : this.id,
            name : this.name,
            description : this.description,
            imageURL : this.imageURL,
            price : this.price,
            categoryId : this.categoryId

          }
          await axios({
            method: 'post',
            url: this.baseURL+"/product/add",
            data : JSON.stringify(newProduct),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(() => {
            //sending the event to parent to handle
            this.$emit("fetchData");
            this.$router.push({name:'AdminProduct'});
            swal({
              text: "Product Added Successfully!",
              icon: "success",
              closeOnClickOutside: false,
            });
          })
          .catch(err => console.log(err));
        }
      },
      mounted(){
    //    if (!localStorage.getItem('token')) {
    //      this.$router.push({name : 'Signin'});
    //    }
      }
    }
    </script>
<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>