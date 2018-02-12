import { birthdays, reminders, announcements, coffee, reset } from 'actions/today';
import BaseController from 'controllers/base';

class TodayController extends BaseController {
  start() {
    this.bindSocketDataToAction('today.birthdays', birthdays);
    this.bindSocketDataToAction('today.reminders', reminders);
    this.bindSocketDataToAction('today.announcements', announcements);
    this.bindSocketDataToAction('today.coffee', coffee);
    this.bindSocketDataToAction('today.reset', reset);
  }
}

export default TodayController;
