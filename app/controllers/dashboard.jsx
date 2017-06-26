import { clock, timelyHours } from 'actions/dashboard';
import BaseController from 'controllers/base';

class DashboardController extends BaseController {
  start() {
    this.bindSocketDataToAction('clock', clock);
    this.bindSocketDataToAction('timely-hours', timelyHours);
  }
}

export default DashboardController;
