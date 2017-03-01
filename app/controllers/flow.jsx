import { flowRead } from 'actions/flow';
import BaseController from 'controllers/base';

class FlowController extends BaseController {
  start() {
    this.bindSocketDataToAction('wind_flow', flowRead);
  }
}

export default FlowController;
