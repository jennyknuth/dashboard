import { weatherRead } from 'actions/weather';
import BaseController from 'controllers/base';

class WeatherController extends BaseController {
  start() {
    this.bindSocketDataToAction('weather', weatherRead);
  }
}

export default WeatherController;
