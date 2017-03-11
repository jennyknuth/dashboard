import React from 'react';
import lab from 'theme/lab.scss';

const SocketRoom = ({ data, height }) => {
  const formattedData = JSON.stringify(data, null, 4);
  return (
    <div>
      <h2 className={lab.socketHeader}>Real-Time Socket Data</h2>
      <div className={lab.socketRoom}>
        <div className={lab.socketData} >{formattedData}</div>
      </div>
    </div>
  );
};

export default SocketRoom;
