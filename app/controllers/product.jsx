import { clock, productTimelyHours, pubkeeper, api, designer } from 'actions/product';
import BaseController from 'controllers/base';

class ProductController extends BaseController {
  start() {
    this.bindSocketDataToAction('clock', clock);
    this.bindSocketDataToAction('product-timely-hours', productTimelyHours);
    this.bindSocketDataToAction('product-pubkeeper', pubkeeper);
    this.bindSocketDataToAction('product-api', api);
    this.bindSocketDataToAction('product-designer', designer);
  }
}

export default ProductController;
