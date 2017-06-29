import React from 'react';
import * as d3 from 'd3';

const BarGraph = ({ data }) => {
  const sortedData = data && data.sort((a, b) => d3.ascending(a.label, b.label));
  const margin = { top: 10, bottom: 20, left: 0, right: 0 };
  const width = 600;
  const height = 250 ;
  const chartHeight = height - margin.top - margin.bottom;
  const chartWidth = width - margin.left - margin.right;

  // find the extent of the data
  const valueExtent = d3.extent(data, d => d.value);
  const borderRadius = 5;

 // set up the scale functions using D3
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.label))
    .range([0, chartWidth])
    .paddingInner(0.75)
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
        { sortedData.map((d, i)=>
          <g key={`bar-${i}`}>
            <rect x={xScale(d.label)} y={0} width={xScale.bandwidth()} height={chartHeight} fill='#D8D8D8' rx={borderRadius} ry={borderRadius} />
            <rect x={xScale(d.label)} y={yScale(d.value)} width={xScale.bandwidth()} height={chartHeight - yScale(d.value)} rx={borderRadius} ry={borderRadius} fill='#37C0C9'/>
            <line x1={xScale.bandwidth()} x2={chartWidth - xScale.bandwidth()} y1={chartHeight} y2={chartHeight} strokeWidth='0.5' stroke='#D8D8D8'/>
            <text x={xScale(d.label)} dx={xScale.bandwidth() / 2} y={yScale(d.value)} dy={-5} textAnchor='middle' stroke='white' fontSize='0.8rem'> {d.value} </text>
            <text x={xScale(d.label)} dx={xScale.bandwidth() / 2} y={chartHeight} dy={20} textAnchor='middle'> {d.label.toLowerCase()} </text>
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
