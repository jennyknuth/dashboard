import { birthdays, reminders, announcements, coffee, reset } from 'actions/today';
import BaseController from 'controllers/base';

class TodayController extends BaseController {
  start() {
<<<<<<< HEAD
    this.bindTopicToAction('today.birthdays', birthdays);
    this.bindTopicToAction('today.reminders', reminders);
    this.bindTopicToAction('today.announcements', announcements);
    this.bindTopicToAction('today.coffee', coffee);
    this.bindTopicToAction('today.reset', reset);
=======
    this.bindSocketDataToAction('today_birthdays', birthdays);
    this.bindSocketDataToAction('today_reminders', reminders);
    this.bindSocketDataToAction('today_announcements', announcements);
    this.bindSocketDataToAction('today_coffee', coffee);
    this.bindSocketDataToAction('today_reset', reset);
>>>>>>> origin/master
  }
}

export default TodayController;
