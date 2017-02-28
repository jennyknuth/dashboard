import React from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';

import fan from 'theme/fan.scss';

const FanGraph = ({ time, accel }) => {

  // set up chart boundaries and margins
  const margin = { top: 0, bottom: 0, left: 0, right: 0 };
  const width = 600;
  const height = width/2;
  const chartHeight = 125;
  const chartWidth = 360;

 // get data from props
  const { data } = props; // destructuring assignment

  // find the extent of the data
  const timeExtent = d3.extent(data, function(d) {
    return d.time;
  });

 // set up the scale functions using D3
  const xScale = d3.scaleTime()
    .domain(timeExtent)
    .range([0, chartWidth]);

  // fixed scale
  // based on percent between 0 and 1
  const precipYScale = d3.scaleLinear()
    .domain([0, 1])
    .range([chartHeight, 0]);

//   // less generic area and line functions
  const precipArea = d3.area()
    .x(d => xScale(d.time))
    .y0(chartHeight)
    .y1(d => precipYScale(d.accel))
    .curve(d3.curveMonotoneX);

  return (
    <div className={fan.right}>
      <span>time: hi {time}</span>
    </div>
  );
};

<svg className='chart' viewBox={`0,0,${width},${height}`} width="45vw" >
  <g className='centralChart' transform={`translate(${margin.left}, ${margin.top})`} >
    <rect x={0} y={0} width={chartWidth} height={chartHeight} stroke='rgba(0,0,0,.2)' fill='#FFFFFF' />
    <path d={precipArea(data)} fill='#F4BC26' stroke='none' />
    <text x='105' y='30' fontFamily="Lato" fontWeight="300" fontSize="15">Accelerometer Data</text>
    <text x='105' y='50' fontFamily="Lato" fontWeight="300" fontSize="12">Measured in g's (gravitational force)</text>
  </g>
</svg>

=> this === .bind(this)

const mapStateToProps = (state) => {
  if (state.fan && state.fan.vals && state.fan.vals.length > 0) {
    console.log(state.fan.vals);

    return ({
      accel: state.fan.vals.accel,
      time: state.fan.vals[0].time,
      array: state.fan.vals,
    });
  }
  else {
    return {
      accel: '',
      time: '',
      array: [],
    };
  }
};

export default connect(mapStateToProps)(FanGraph);
