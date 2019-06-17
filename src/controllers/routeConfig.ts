import { Router } from 'express';
import { productRouter } from './productsController';
import { categoryRouter } from './categoryController';
import { loginRouter } from './loginController';
interface RouteConfig {
  prefix: string;
  router: Router;
}

const config: { [k: string]: RouteConfig } = {
  products: {
    prefix: '/products',
    router: productRouter,
  },
  category: {
    prefix: '/categories',
    router: categoryRouter,
  },
  login: {
    prefix: '/login',
    router: loginRouter,
  }
};

export { config };
