import { fanRead, accelRead } from 'actions/fan';
import BaseController from 'controllers/base';

class FanController extends BaseController {
  start() {
    this.bindSocketDataToAction('fan', fanRead);
    this.bindSocketDataToAction('accel', accelRead);
  }
}

export default FanController;
