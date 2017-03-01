import React from 'react';
import * as d3 from 'd3';

import fan from 'theme/fan.scss';

const FanGraph = ({ vals }) => {
  // set up chart boundaries and margins
  const margin = { top: 0, bottom: 0, left: 0, right: 0 };
  const width = 610;
  const height = 197;
  const chartHeight = 191;
  const chartWidth = 610;

  // find the extent of the data
  const timeExtent = d3.extent(vals, function(d) {
    return d.time;
  });

 // set up the scale functions using D3
  const xScale = d3.scaleTime()
    .domain(timeExtent)
    .range([0, chartWidth]);

  // fixed scale
  // based on percent between 0 and 1
  const precipYScale = d3.scaleLinear()
    .domain([0, 15])
    .range([chartHeight, 0]);

  // less generic area and line functions
  const precipArea = d3.area()
    .x(d => xScale(d.time))
    .y0(chartHeight)
    .y1(d => precipYScale(d.value))
    .curve(d3.curveMonotoneX);

  return (
    <div className={fan.graphContainer}>
    <div className={fan.graphScale} />
      <svg className='chart' viewBox={`0,0,${width},${height}`} width="40vw" preserveAspectRatio="none">
        <g className='centralChart' transform={`translate(${margin.left}, ${margin.top})`} >
          <rect x={0} y={0} width={chartWidth} height={chartHeight} stroke='rgba(0,0,0,.2)' fill='#FFFFFF' />
          <path d={precipArea(vals)} fill='#F4BC26' stroke='none' />
          <text x='205' y='50' fontFamily="Lato" fontWeight="300" fontSize="20">Accelerometer Data</text>
          <text x='195' y='80' fontFamily="Lato" fontWeight="300" fontSize="12">Measured in g's (gravitational force)</text>
        </g>
      </svg>
    </div>
  );
};

export default FanGraph;
