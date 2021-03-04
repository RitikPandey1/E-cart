import Product from './components/Products';
import ProductPage from './components/ProductPage';
import Login from './components/Login';
import Signin from './components/Signin';
import Cart from './components/Cart';
import Home from './components/Home';
import MyProfile from "./components/MyProfile";
import Order from "./components/Order";
import SearchPage from './components/SearchPage';
const routes = [
  {
    path: "/",
    component: Home,
    public: true,
    exact: true,
  },
  {
    path: "/products/category/:name",
    component: Product,
    public: true,
  },
  {
    path: "/product/:id",
    component: ProductPage,
    public: true,
  },
  {
    path: "/user/login",
    component: Login,
    public: true,
  },
  {
    path: "/user/signin",
    component: Signin,
    public: true,
  },
  {
    path: "/user/cart",
    component: Cart,
    public: true,
  },
  {
    path: "/my-profile",
    component: MyProfile,
    public: false,
  },
  {
    path: "/my-orders",
    component: Order,
    public: false,
  },
  {
    path: "/search/:srchTxt",
    component: SearchPage,
    public: true,
  },
];

export default routes;
