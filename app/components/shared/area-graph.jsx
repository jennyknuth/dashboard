import React from 'react';
import * as d3 from 'd3';

const TimeSeriesGraph = ({ vals }) => {

  // set up chart boundaries and margins
  const margin = { top: 0, bottom: 40, left: 0, right: 0 };
  const width = 600;
  const height = 250 ;
  const chartHeight = height - margin.top - margin.bottom;
  const chartWidth = width - margin.left - margin.right;

  // find the extent of the data
  const timeExtent = d3.extent(vals, d => +d.time);
  const valueExtent = d3.extent(vals, d => +d.value);
  const chronologicalVals = vals && vals.sort((a, b) => d3.ascending(+a.time, +b.time));

 // set up the scale functions using D3
  const xScale = d3.scaleTime()
    .domain(timeExtent)
    .range([0, chartWidth]);

  const yScale = d3.scaleLinear()
    .domain([(valueExtent[0] - 5), valueExtent[1]])
    .range([chartHeight, 0]);

  // area function
  const areaPlot = d3.area()
    .x(d => xScale(+d.time))
    .y0(chartHeight)
    .y1(d => yScale(+d.value))
    .curve(d3.curveMonotoneX);

  const linePlot = d3.line()
    .x(d => xScale(+d.time))
    .y(d => yScale(+d.value))
    .curve(d3.curveMonotoneX);

  return (
    <svg
      viewBox={`0,0,${width},${height}`}
      preserveAspectRatio='xMidYMin slice'
      style={{width: '100%', paddingBottom: '40%', height: '1px', overflow: 'visible'}}
    >
      <defs>
        <radialGradient id='RadialGradientAreaGraph'>
          <stop offset='0%' stopColor='#F4BC26'/>
          <stop offset='100%' stopColor='white'/>
        </radialGradient>
        <linearGradient id='LinearGradientAreaGraph' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor='#F4BC26' stopOpacity='0.4'/>
          <stop offset='100%' stopColor='white' stopOpacity='0'/>
        </linearGradient>
      </defs>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <path d={areaPlot(chronologicalVals)} fill='url(#LinearGradientAreaGraph)' stroke='none'/>
        <path d={linePlot(chronologicalVals)} stroke='#F4BC26' fill='none'/>
        <line x1={0} x2={chartWidth} y1={chartHeight} y2={chartHeight} stroke='gray'/>
      </g>
    </svg>
  );
};

TimeSeriesGraph.propTypes = {
  vals: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default TimeSeriesGraph;
