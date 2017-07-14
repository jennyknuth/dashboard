import React from 'react';
import * as d3 from 'd3';
import moment from 'moment';

const TimeSeriesGraph = ({ vals }) => {

  // set up chart boundaries and margins
  const margin = { top: 0, bottom: 40, left: 0, right: 40 };
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
    .domain([timeExtent[0], timeExtent[1] + 1000000])
    .range([0, chartWidth]);

  const yScale = d3.scaleLinear()
    .domain([(valueExtent[0] - 5), valueExtent[1]])
    .range([chartHeight, 0]);

  const yTicks = yScale.ticks(5);

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
        <linearGradient id='LinearGradientAreaGraph' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor='#F4BC26' stopOpacity='0.4'/>
          <stop offset='100%' stopColor='white' stopOpacity='0'/>
        </linearGradient>
        <clipPath id='remove-ends'>
          <rect x={25} y={0} width={chartWidth - 20} height={chartHeight} />
        </clipPath>
      </defs>
      <g transform={`translate(${margin.left}, ${margin.top})`} >
        <g clipPath='url(#remove-ends)'>
          <path d={areaPlot(chronologicalVals)} fill='url(#LinearGradientAreaGraph)' stroke='none' />
          <path d={linePlot(chronologicalVals)} stroke='#F4BC26' fill='none'/>
          <line x1={0} x2={chartWidth} y1={chartHeight} y2={chartHeight} stroke='#eeeeee' strokeWidth={0.5}/>
        </g>
        {vals.map((d, i) => i > 0 ?
          <text key={`time-${+d.time}`} x={xScale(+d.time)} y={chartHeight} dy={20} fill='#eee' stroke='none' textAnchor='end' fontSize='0.7rem'>
            {moment(d.time, 'X').format('MMM').toLowerCase() }
          </text> :
          null)
        }
        {yTicks.map(d =>
          <g key={`yTic-${d}`} >
            <text x={chartWidth} dx={5} y={yScale(d)} dy={3} fill='#eee' stroke='none' textAnchor='start' fontSize='0.7rem'>
              {d}
            </text>
            <line x1={0} x2={chartWidth} y1={yScale(d)} y2={yScale(d)} stroke='#eeeeee' strokeWidth={0.5} strokeDasharray='2,2' clipPath='url(#remove-ends)'/>
          </g>
        )}
      </g>
    </svg>
  );
};

TimeSeriesGraph.propTypes = {
  vals: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default TimeSeriesGraph;
