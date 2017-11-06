import { birthdays, reminders, announcements } from 'actions/today';
import BaseController from 'controllers/base';

class TodayController extends BaseController {
  start() {
    this.bindSocketDataToAction('today_birthdays', birthdays);
    this.bindSocketDataToAction('today_reminders', reminders);
    this.bindSocketDataToAction('today_updates', announcements);
  }
}

export default TodayController;
