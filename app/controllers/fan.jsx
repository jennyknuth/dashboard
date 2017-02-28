import { fanRead } from 'actions/fan';
import { socketVal } from 'actions/socket';
import BaseController from 'controllers/base';
import nio from 'niojs';

class FanController extends BaseController {
  start() {
    nio.source.socketio('https://labtest.socket.nio.works', ['fan'])
      .pipe(nio.pass((data) => {
        this.dispatcher(fanRead(data));
      }));
  }
}

export default FanController;
