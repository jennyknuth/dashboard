import { birthdays, reminders, announcements, coffee, reset } from 'actions/today';
import BaseController from 'controllers/base';

class TodayController extends BaseController {
  start() {
    this.bindTopicToAction('today.birthdays', birthdays);
    this.bindTopicToAction('today.reminders', reminders);
    this.bindTopicToAction('today.announcements', announcements);
    this.bindTopicToAction('today.coffee', coffee);
    this.bindTopicToAction('today.reset', reset);
  }
}

export default TodayController;
