
<template> 
<br>
<div id="header">
  <h1 align="center" style="font-size:30pt"> Welcome Admin!</h1>
</div>       
    <div class="adminPanel container" style="display: flex; justify-content: space-between;">
    <router-link :to="{name:'AdminCategory'}">
        <button type="button" class="btn btn-custom">Categories</button> 
    </router-link>
    <router-link :to="{name:'AdminProduct'}">
        <button type="button" class="btn btn-custom">&nbsp;Products&nbsp;</button>
    </router-link>
</div>

</template>
<script>
    export default {
      data() {
    return {
      token: null,
    };
  },
      mounted(){
        this.token = localStorage.getItem("token");
      
                        
      }
      
    }

</script>

<style>
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