import { clock, industrial } from 'actions/industrial';
import BaseController from 'controllers/base';

class IndustrialController extends BaseController {
  start() {
    this.bindSocketDataToAction('prod_clock', clock);
    this.bindSocketDataToAction('prod_industrial', industrial);
  }
}

export default IndustrialController;
