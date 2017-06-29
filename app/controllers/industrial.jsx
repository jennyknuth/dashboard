import { clock, industrialTimelyHours, dgs } from 'actions/industrial';
import BaseController from 'controllers/base';

class IndustrialController extends BaseController {
  start() {
    this.bindSocketDataToAction('clock', clock);
    this.bindSocketDataToAction('industrial-timely-hours', industrialTimelyHours);
    this.bindSocketDataToAction('industrial-dgs', dgs);
  }
}

export default IndustrialController;
