import { clock, product } from 'actions/product';
import BaseController from 'controllers/base';

class ProductController extends BaseController {
  start() {
    this.bindSocketDataToAction('prod_clock', clock);
    this.bindSocketDataToAction('prod_product', product);
  }
}

export default ProductController;
