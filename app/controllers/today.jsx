import { birthdays, weather, announcements, coffee, reset } from 'actions/today';
import BaseController from 'controllers/base';

class TodayController extends BaseController {
  start() {
    this.bindTopicToAction('today.birthdays', birthdays);
    this.bindTopicToAction('today.weather', weather);
    this.bindTopicToAction('today.announcements', announcements);
    this.bindTopicToAction('today.coffee', coffee);
    this.bindTopicToAction('today.reset', reset);
  }
}

export default TodayController;
