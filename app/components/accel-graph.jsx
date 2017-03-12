import React from 'react';
import * as d3 from 'd3';

import chart from 'theme/chart.scss';

const FlowGraph = ({ vals }) => {
  // set up chart boundaries and margins
  const margin = { top: 0, bottom: 0, left: 0, right: 0 };
  const width = 600;
  const height = 150;
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
    <div className={chart.chart}>
      <div className={chart.title}>
        <h2>Accelerometer Data</h2>
        <h3>measured in g's (gravitational force)</h3>
      </div>
      <svg className={chart.svg} viewBox={`0,0,${width},${height}`} height={height} preserveAspectRatio="none">
        <path d={precipArea(vals)} fill='#F4BC26' stroke='none' transform={`translate(${margin.left}, ${margin.top})`}/>
      </svg>
    </div>
  );
};

export default FlowGraph;
