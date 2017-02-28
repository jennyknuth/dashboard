import { fanRead } from '../actions/led';
import { socketVal } from '../actions/socket';

const handleLedHex = (dispatch, data) => {
  dispatch(ledRead(data));
}

export default handleLedHex;
