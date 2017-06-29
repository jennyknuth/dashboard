import { clock, opsTimelyHours } from 'actions/dashboard';
import BaseController from 'controllers/base';

class DashboardController extends BaseController {
  start() {
    this.bindSocketDataToAction('clock', clock);
    this.bindSocketDataToAction('nio-timely-hours', opsTimelyHours);
  }
}

export default DashboardController;
