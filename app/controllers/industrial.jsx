import { clock, industrial } from 'actions/industrial';
import BaseController from 'controllers/base';

class IndustrialController extends BaseController {
  start() {
    this.bindTopicToAction('prod_clock', clock);
    this.bindTopicToAction('prod_industrial', industrial);
  }
}

export default IndustrialController;
