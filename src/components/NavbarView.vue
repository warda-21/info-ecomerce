<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!--   
    <router-link class="navbar-brand" :to="{ name: 'HomeView' }">
      <img id="logo" src="../assets/logo.png" />
    </router-link>
  Logo-->
    <!--    Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--      Search Bar-->
      <form>
<input type="button" value="Go back" onclick="history.back()">
</form>
      <form class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>
      <!--      DropDowns-->
      <ul class="navbar-nav ml-auto">
        <!--      Admin drop down
        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdownAdmin"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Admin
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownAdmin">
            <router-link class="dropdown-item" :to="{ name: 'AdminCategory' }"
              >Category</router-link
            >
            <router-link class="dropdown-item" :to="{ name: 'AdminProduct' }"
              >Products</router-link
            >
          </div>
        </li>
-->
        <!--      Account drop down-->
        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Account
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownAdmin">
    
           
            <router-link class="dropdown-item" v-if="!token" :to="{ name: 'SigninView' }"
              >Log in</router-link
            >
            <router-link class="dropdown-item" v-if="!token" :to="{ name: 'SignupView' }"
              >Sign up</router-link
            >

            <a class="dropdown-item" v-if="token" href="http://localhost:8081/" @click="signout" :to="{ name: 'homeView' }"
              >Sign out
            </a>



          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarView",
  data() {
    return {
      token: null,
    };
  },
  methods: {
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    
  },
};
</script>
<style scoped>
#logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}
.nav-link {
  color: rgba(255, 255, 255);
}

input[type="button"] {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 8px 8px;
    border-radius: 4px;
    cursor: pointer;
  }
input[type="button"]:hover {
    background-color: #3e8e41;
  }
</style>