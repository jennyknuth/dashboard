import { birthdays, reminders, announcements, reset } from 'actions/today';
import BaseController from 'controllers/base';

class TodayController extends BaseController {
  start() {
    this.bindSocketDataToAction('today_birthdays', birthdays);
    this.bindSocketDataToAction('today_reminders', reminders);
    this.bindSocketDataToAction('today_announcements', announcements);
    this.bindSocketDataToAction('today_reset', reset);
  }
}

export default TodayController;
