import React from 'react';
import { connect } from 'react-redux';
import socketRoom from 'theme/socket-room.scss';


const SocketRoom = ({ data }) => {
  return (
    <div>
      <h2 className={socketRoom.socketRoom}>Socket Room</h2>
      <div className="socketOutput">
        <textarea value={JSON.stringify(data, null, 4)}></textarea>
      </div>
    </div>
  );
};

export default SocketRoom;
