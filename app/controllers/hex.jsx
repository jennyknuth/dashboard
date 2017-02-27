import { led } from '../actions/led';

const handleHexColor = (dispatch, data) => {
  dispatch(setHex(data));
}

export default handleHexColor;
