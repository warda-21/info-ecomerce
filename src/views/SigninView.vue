<template>
<div class="container">
  <!--    Logo Div-->
  <div class="row">
    <div class="col-12 text-center pt-3">
      <router-link :to="{ name: 'SigninView' }">
        <img id="logo" src="../assets/logo_transparent.png" />
      </router-link>
    </div>
  </div>

  <div class="row">
    <div class="col-12 justify-content-center d-flex flex-row pt-5">
      <div id="signin-div" class="flex-item border">
        <h2 class="pt-4 pl-4">Sign-In</h2>
        <form @submit="signin" class="pt-4 pl-4 pr-4" ref="anyName">
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              v-model="email"
              required
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary mt-2 py-0">
              Continue
              <div
                v-if="loading"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </button>
        </form>
        
<br/>

      </div>
    </div>
  </div>
</div>
</template>


<script>

import axios from 'axios';
import swal from 'sweetalert';

export default {
name: "SigninView",
props: ["baseURL"],
data() {
  return {
    email: null,
    password: null,
    loading: null,
  };
},
methods: {
  async signin(e) {
        // Your form submission
        this.$refs.anyName.reset(); // This will clear that form
    
    e.preventDefault();
    
    this.loading = true;
    const user = {
      email: this.email,
      password: this.password
    };
    await axios
      .post(`${this.baseURL}/user/signin`, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        
        this.$emit("fetchData");
        if(res.data.type === 'A'){
          this.$router.push({ name: "AdminView" });
          
        } else{
          this.$router.push({ name: "UserCategory" }); 
        }
      })
      .catch((err) => {
        swal({
          text: "Unable to Log you in!",
          icon: "error",
          closeOnClickOutside: false,
        });
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
       
      });
  },
},
mounted() {
  this.loading = false;
},
};
</script>

<style scoped>
.btn-dark {
background-color: #e7e9ec;
color: #000;
font-size: smaller;
border-radius: 0;
border-color: #adb1b8 #a2a6ac #a2a6ac;
}
.btn-primary {
background-color: #f0c14b;
color: black;
border-color: #a88734 #9c7e31 #846a29;
border-radius: 0;
}
#logo {
width: 150px;
}
@media only screen and (min-width: 992px) {
#signin-div {
  width: 40%;
}
}
</style>