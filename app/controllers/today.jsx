import { today } from 'actions/today';
import BaseController from 'controllers/base';

class TodayController extends BaseController {
  start() {
    this.bindSocketDataToAction('today', today);
  }
}

export default TodayController;
