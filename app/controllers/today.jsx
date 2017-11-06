import { birthdays, reminders, updates } from 'actions/today';
import BaseController from 'controllers/base';

class TodayController extends BaseController {
  start() {
    this.bindSocketDataToAction('today_birthdays', birthdays);
    this.bindSocketDataToAction('today_reminders', reminders);
    this.bindSocketDataToAction('today_updates', updates);
  }
}

export default TodayController;
