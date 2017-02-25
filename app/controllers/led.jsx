import { fanRead } from '../actions/fan';
import { socketVal } from '../actions/socket';

const handleFanRoom = (dispatch, data) => {
  dispatch(fanRead(data));
  dispatch(socketVal(data));
}

export default handleFanRoom;
