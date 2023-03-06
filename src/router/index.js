import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory'
import CategoryView from '../views/Category/CategoryView'
import UserCategoryView from '../views/Category/UserCategoryView'
import AdminView from "../views/Category/AdminView"
import ProductView from "../views/Product/ProductView"
import UserProductView from "../views/Product/UserProductView"
import UserWishListView from "../views/Product/UserWishListView"
import AddProduct from '../views/Product/AddProduct'
import EditProduct from '../views/Product/EditProduct'
import EditCategory from '../views/Category/EditCategory'
import SigninView from '../views/SigninView'
import SignupView from '../views/SignupView'
import CartView from "../views/Product/CartView"
import UserCategoryProduct from "../views/Product/UserCategoryProduct"

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/category/add',
    name:'AddCategory',
    component: AddCategory

  },
  {
    path: '/admin/category/',
    name:'AdminCategory',
    component: CategoryView
  },
  {
    path: '/user/category/',
    name:'UserCategory',
    component: UserCategoryView
  },
  {
    path: '/admin',
    name:'AdminView',
    component: AdminView
  },
  {
    path: '/admin/product',
    name:'AdminProduct',
    component: ProductView
  },
  {
    path: '/user/product/:id',
    name:'UserProductView',
    component: UserProductView
  },
  {
    path: '/user/product/:id',
    name:'UserCategoryProduct',
    component: UserCategoryProduct
  },
  {
    path: '/admin/product/add',
    name:'AddProduct',
    component: AddProduct

  },
  {
    path: '/product/wishList',
    name:'UserWishListView',
    component: UserWishListView

  },
  {
    path: '/product/cart',
    name:'CartView',
    component: CartView

  },
  {
    path: '/admin/product/update/:id',
    name:'EditProduct',
    component: EditProduct
  },
  {
    path: '/admin/category/update/:id',
    name:'EditCategory',
    component: EditCategory
  }, 
  {
  path: '/signin',
  name: 'SigninView',
  component: SigninView
  },
  {
    path: '/signup',
    name: 'SignupView',
    component: SignupView
    }  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
