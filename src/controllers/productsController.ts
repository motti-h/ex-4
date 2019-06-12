import { Router } from 'express';
import * as ProductsHendlers from '../routesHendlers/ProductsHendlers';
import * as asyncMaker from '../utils/async';

const productRouter = Router();

productRouter.get('/', ProductsHendlers.productGetHandler);

productRouter.get('/:id', asyncMaker.wrapAsyncAndSend(ProductsHendlers.productGetSpecificHandler) ); // get specific ASYNC

productRouter.delete('/:id', ProductsHendlers.productDeleteHandler);

productRouter.use('/', ProductsHendlers.middleCheckName); // middleware name check
productRouter.post('/', ProductsHendlers.productPostHandler);

productRouter.put('/:id', ProductsHendlers.productPutHandler);

export { productRouter };
