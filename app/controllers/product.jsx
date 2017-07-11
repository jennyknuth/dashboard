import { clock, product } from 'actions/product';
import BaseController from 'controllers/base';

class ProductController extends BaseController {
  start() {
    this.bindSocketDataToAction('clock', clock);
    this.bindSocketDataToAction('product', product);
  }
}

export default ProductController;
