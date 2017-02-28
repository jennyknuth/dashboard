import { ledRead } from 'actions/led';
import BaseController from 'controllers/base';

class LEDController extends BaseController {
  start() {
    this.bindSocketDataToAction('blink1', ledRead);
  }
}

export default LEDController;
