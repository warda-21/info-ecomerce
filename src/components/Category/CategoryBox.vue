<template>
  <div class="card W-100 h-100" style="margin-top: 10px">
    <div class="embed-responsive embed-responsive-16by9">
      <img class="card-img-top embed-responsive-item" :src="category.imageUrl" alt="Category Image">
    </div>

    <div class="card-body">
      <h5 class="card-title">{{category.categoryName}}</h5>
      <p class="card-text">{{category.description}}</p>
      
      <router-link :to="{name: 'EditCategory', params: {id: category.id}}">
              <label class="text-center">&nbsp;&nbsp;Edit&nbsp;&nbsp;</label>
      </router-link>
  
  <!--
<br/>
          <a href="#"  class="text-center">List products</a>
  -->      
    </div>

  </div>
</template>

<script>
  export default {   
  name : "CategoryBox",
  props : ["category"],
  methods : {},
  };

</script>

<style scoped>
.card-img-top {
object-fit: cover;
}
</style>