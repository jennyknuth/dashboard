import { fanRead } from 'actions/fan';
import BaseController from 'controllers/base';

class FanController extends BaseController {
  start() {
    this.bindSocketDataToAction('fan', fanRead);
  }
}

export default FanController;
