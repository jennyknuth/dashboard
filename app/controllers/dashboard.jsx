import { clock, operations } from 'actions/dashboard';
import BaseController from 'controllers/base';

class DashboardController extends BaseController {
  start() {
    this.bindSocketDataToAction('prod_clock', clock);
    this.bindSocketDataToAction('prod_operations', operations);
  }
}

export default DashboardController;
