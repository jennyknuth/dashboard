import { clock, opsTimelyHours, openPositions, applicants } from 'actions/dashboard';
import BaseController from 'controllers/base';

class DashboardController extends BaseController {
  start() {
    this.bindSocketDataToAction('clock', clock);
    this.bindSocketDataToAction('nio-timely-hours', opsTimelyHours);
    this.bindSocketDataToAction('nio-jazz-jobs', openPositions);
    this.bindSocketDataToAction('nio-applicants', applicants);
  }
}

export default DashboardController;
