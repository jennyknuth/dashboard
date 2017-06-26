import { fanRead, accelRead, clock } from 'actions/fan';
import BaseController from 'controllers/base';

class FanController extends BaseController {
  start() {
    this.bindSocketDataToAction('fan', fanRead);
    this.bindSocketDataToAction('accel', accelRead);
    this.bindSocketDataToAction('clock', clock);
  }
}

export default FanController;
