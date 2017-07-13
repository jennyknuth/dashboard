import { clock, agriculture } from 'actions/agriculture';
import BaseController from 'controllers/base';

class AgricultureController extends BaseController {
  start() {
    this.bindSocketDataToAction('clock', clock);
    this.bindSocketDataToAction('agriculture', agriculture);
  }
}

export default AgricultureController;
