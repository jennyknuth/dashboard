import { clock, operations } from 'actions/dashboard';
import BaseController from 'controllers/base';

class DashboardController extends BaseController {
  start() {
    this.bindTopicToAction('prod_clock', clock);
    this.bindTopicToAction('prod_operations', operations);
  }
}

export default DashboardController;
