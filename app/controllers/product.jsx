import { clock, product } from 'actions/product';
import BaseController from 'controllers/base';

class ProductController extends BaseController {
  start() {
    this.bindTopicToAction('prod_clock', clock);
    this.bindTopicToAction('prod_product', product);
  }
}

export default ProductController;
