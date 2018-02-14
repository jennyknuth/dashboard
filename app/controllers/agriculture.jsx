import { clock, agriculture } from 'actions/agriculture';
import BaseController from 'controllers/base';

class AgricultureController extends BaseController {
  start() {
    this.bindTopicToAction('prod_clock', clock);
    this.bindTopicToAction('prod_agriculture', agriculture);
  }
}

export default AgricultureController;
