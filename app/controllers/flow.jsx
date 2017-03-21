import { flowRead, accelRead, fanRead } from 'actions/flow';
import BaseController from 'controllers/base';

class FlowController extends BaseController {
  start() {
    this.bindSocketDataToAction('wind_flow', flowRead);
    this.bindSocketDataToAction('accel', accelRead);
    this.bindSocketDataToAction('fan', fanRead);
  }
}

export default FlowController;
