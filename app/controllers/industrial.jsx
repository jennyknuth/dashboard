import { clock, industrial } from 'actions/industrial';
import BaseController from 'controllers/base';

class IndustrialController extends BaseController {
  start() {
    this.bindSocketDataToAction('clock', clock);
    this.bindSocketDataToAction('industrial', industrial);
  }
}

export default IndustrialController;
