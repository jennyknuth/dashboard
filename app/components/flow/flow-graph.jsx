import React from 'react';
import * as d3 from 'd3';

import flow from 'theme/flow.scss';

const FlowGraph = ({ vals }) => {
  // set up chart boundaries and margins
  const margin = { top: 0, bottom: 0, left: 0, right: 0 };
  const width = 600;
  const height = 250;
  const chartHeight = height - margin.top - margin.bottom;
  const chartWidth = width - margin.left - margin.right;

  // find the extent of the data
  const timeExtent = d3.extent(vals, function(d) {
    return d.time;
  });

 // set up the scale functions using D3
  const xScale = d3.scaleTime()
    .domain(timeExtent)
    .range([0, chartWidth]);

  const yScale = d3.scaleLinear()
    .domain([0, 5])
    .range([chartHeight, 0]);

  // area function
  const precipArea = d3.area()
    .x(d => xScale(d.time))
    .y0(chartHeight)
    .y1(d => yScale(d.value))
    .curve(d3.curveMonotoneX);

  return (
    <svg className={flow.chart} viewBox={`0,0,${width},${height}`} width={width} >
      <g transform={`translate(${margin.left}, ${margin.top})`} >
        <path d={precipArea(vals)} fill='#F4BC26' stroke='none' />
        <text x='213' y='50' fontFamily="Lato" fontWeight="400" fontSize="20">Accelerometer Data</text>
        <text x='207' y='70' fontFamily="Lato" fontWeight="300" fontSize="12">Measured in g's (gravitational force)</text>
      </g>
    </svg>
  );
};

export default FlowGraph;
