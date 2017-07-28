import { clock, agriculture } from 'actions/agriculture';
import BaseController from 'controllers/base';

class AgricultureController extends BaseController {
  start() {
    this.bindSocketDataToAction('prod_clock', clock);
    this.bindSocketDataToAction('prod_agriculture', agriculture);
  }
}

export default AgricultureController;
