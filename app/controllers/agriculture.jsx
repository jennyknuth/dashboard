import { clock, agricultureTimelyHours, dvp } from 'actions/agriculture';
import BaseController from 'controllers/base';

class AgricultureController extends BaseController {
  start() {
    this.bindSocketDataToAction('clock', clock);
    this.bindSocketDataToAction('ag-timely-hours', agricultureTimelyHours);
    this.bindSocketDataToAction('ag-dvp', dvp);
  }
}

export default AgricultureController;
