import React from 'react';
import * as d3 from 'd3';
import map from 'lodash/map';

const BarGraph = ({ data }) => {
  // set up chart boundaries and margins
  const keys = data && map(data, (v, k) => k);
  const filteredKeys = keys.filter(k => !isNaN(data[k]));
  const margin = { top: 10, bottom: 20, left: 0, right: 0 };
  const width = 600;
  const height = 250 ;
  const chartHeight = height - margin.top - margin.bottom;
  const chartWidth = width - margin.left - margin.right;

  // find the extent of the data
  const valueExtent = d3.extent(keys, k => data[k]);
  const borderRadius = 5;

 // set up the scale functions using D3
  const xScale = d3.scaleBand()
    .domain(filteredKeys)
    .range([0, chartWidth])
    .paddingInner(0.72)
    .paddingOuter(0.2);

  const yScale = d3.scaleLinear()
    .domain([valueExtent[0], valueExtent[1] + (valueExtent[1] * 0.1)])
    .range([chartHeight, 0]);

  return (
    <svg
      viewBox={`0,0,${width},${height}`}
      preserveAspectRatio="xMidYMin slice"
      style={{width: '100%', paddingBottom: '100%', height: '1px', overflow: 'visible'}}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`} >
        { filteredKeys.map((k)=>
          <g key={k}>
            <rect x={xScale(k)} y={0} width={xScale.bandwidth()} height={chartHeight} fill='#D8D8D8' rx={borderRadius} ry={borderRadius} />
            <rect x={xScale(k)} y={yScale(data[k])} width={xScale.bandwidth()} height={chartHeight - yScale(data[k])} rx={borderRadius} ry={borderRadius} fill='#37C0C9'/>
            <line x1={xScale.bandwidth()} x2={chartWidth - xScale.bandwidth()} y1={chartHeight} y2={chartHeight} strokeWidth='0.5' stroke='#D8D8D8'/>
            <text x={xScale(k)} dx={xScale.bandwidth() / 2} y={yScale(data[k])} dy={-5} textAnchor='middle' stroke='white' fontSize='0.8rem'> {data[k]} </text>
            <text x={xScale(k)} dx={xScale.bandwidth() / 2} y={chartHeight} dy={20} textAnchor='middle'> {k.toLowerCase()} </text>
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
