import React from 'react';
import List from 'react-nuik/lib/components/list';


const DisplayList = ({ data }) => {

  return (
    <List >
      {data && data.map(d => d)}
    </List>
  );
};

DisplayList.propTypes = {
  data: React.PropTypes.array,
};

export default DisplayList;
