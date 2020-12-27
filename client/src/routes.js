import Product from './components/Products';
import ProductPage from './components/ProductPage';
import Login from './components/Login';
import Signin from './components/Signin';

 const routes = [
	{
		path: '/products/category/:name',
		component: Product,
		public: true,
	},
	{
		path: '/product/:id',
		component: ProductPage,
		public: true,
	},
	{
		path: '/user/login',
		component: Login,
		public: true,
	},
	{
		path: '/user/signin',
		component: Signin,
		public: true,
	},
];

export default routes;
