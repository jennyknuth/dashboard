import React from 'react';
import * as d3 from 'd3';
import map from 'lodash/map';

import chart from 'theme/chart.scss';

const BarGraph = ({ data }) => {
  console.log('data in bar graph', data);
  // set up chart boundaries and margins
  const keys = data && map(data, (v, k) => k);
  const filteredKeys = keys.filter(k => !isNaN(data[k]));
  console.log('filteredKeys', filteredKeys);
  const margin = { top: 10, bottom: 40, left: 0, right: 0 };
  const width = 600;
  const height = 250 ;
  const chartHeight = height - margin.top - margin.bottom;
  const chartWidth = width - margin.left - margin.right;

  // find the extent of the data
  const valueExtent = d3.extent(keys, k => data[k]);

 // set up the scale functions using D3
  const xScale = d3.scaleBand()
    .domain(filteredKeys)
    .range([0, chartWidth])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const yScale = d3.scaleLinear()
    .domain(valueExtent)
    .range([chartHeight, 0]);

  // console.log(d3.bottomAxis(xScale()));

  return (
    <svg className={chart.svg} viewBox={`0,0,${width},${height}`} preserveAspectRatio="none">
      <g transform={`translate(${margin.left}, ${margin.top})`} >
        { filteredKeys.map((k)=>
          <g key={k}>
            <rect x={xScale(k)} y={yScale(data[k])} width={xScale.bandwidth()} height={chartHeight - yScale(data[k])} />
            <text x={xScale(k)} dx={xScale.bandwidth() / 2} y={yScale(data[k])} textAnchor='middle'> {data[k]} </text>
            <text x={xScale(k)} y={yScale(0)} textAnchor='middle'> {k} </text>
          </g>
        )}
      </g>
    </svg>
  );
};

BarGraph.propTypes = {
  vals: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default BarGraph;
