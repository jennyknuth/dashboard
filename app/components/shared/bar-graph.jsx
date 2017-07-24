import React from 'react';
import * as d3 from 'd3';

const BarGraph = ({ data }) => {
  const labelShortener = {
    'General Admin': 'Admin',
    'Marketing / Design': 'Brand',
    'Community Development': 'Outreach',
    'Operations/Management': 'Operations',
    'Operations / Management': 'Operations',
    'Operations/Management ': 'Operations',
    'Operations / Management ': 'Operations',
    'Back-End/Services': 'Backend',
    'Accounting and Finance': 'Finance',
    'Accounting and Finance ': 'Finance',
    'PTO and Holidays': 'PTO',
    'Learning and Innovation': 'Innovation',
    'Front-end': 'Frontend',
    'Front-End': 'Frontend',
  };
  const sortedData = data && data.sort((a, b) => d3.ascending(a.label, b.label));
  const dataWithShortLabels = data && sortedData.map(d => labelShortener[d.label] ? {label: labelShortener[d.label], value: d.value} : d);
  const numberOfBars = dataWithShortLabels && dataWithShortLabels.length;
  const margin = { top: 10, bottom: 20, left: 0, right: 40 };
  const width = 600;
  const height = 225;
  const chartHeight = height - margin.top - margin.bottom;
  const chartWidth = width - margin.left - margin.right;

  // find the extent of the data
  const valueExtent = d3.extent(data, d => d.value);
  const borderRadius = 4;

  // set up the scale functions using D3
  const fontScale = d3.scaleLinear()
   .domain([0, 15])
   .range([0.8, 0.6]);

  const labelScale = d3.scaleLinear()
   .domain([0, 15])
   .range([1.2, 0.6]);

  const xScale = d3.scaleBand()
    .domain(dataWithShortLabels.map(d => d.label))
    .range([0, chartWidth])
    .paddingInner(fontScale(numberOfBars))
    .paddingOuter(0.2);

  const yScale = d3.scaleLinear()
    .domain([valueExtent[0], valueExtent[1] + (valueExtent[1] * 0.1)])
    .range([chartHeight, 0]);

  const yTicks = yScale.ticks(4);

  return (
    <svg
      viewBox={`0,0,${width},${height}`}
      preserveAspectRatio="xMidYMin slice"
      style={{width: '100%', paddingBottom: '40%', height: '1px', overflow: 'visible'}}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`} >
        { dataWithShortLabels.map((d, i)=>
          <g key={`bar-${i}`}>
            <rect x={xScale(d.label)} y={0} width={xScale.bandwidth()} height={chartHeight} fill='#E6E9EE' rx={borderRadius} ry={borderRadius} />
            <rect x={xScale(d.label)} y={chartHeight - 5} width={xScale.bandwidth()} height={5} fill='#E6E9EE'/>
            <rect x={xScale(d.label)} y={yScale(d.value)} width={xScale.bandwidth()} height={chartHeight - yScale(d.value)} rx={borderRadius} ry={borderRadius} fill='#37C0C9'/>
            <line x1={0} x2={chartWidth} y1={chartHeight} y2={chartHeight} strokeWidth='0.5' stroke='#E6E9EE'/>
            <text x={xScale(d.label)} dx={xScale.bandwidth() / 2} y={yScale(d.value)} dy={-3} textAnchor='middle' fill='#354042' fontSize={`${fontScale(numberOfBars)}rem`}> {d.value} </text>
            <text x={xScale(d.label)} dx={xScale.bandwidth() / 2} y={chartHeight} dy={20} textAnchor='middle' fill='#354042' fontSize={`${labelScale(numberOfBars)}rem`}> {d.label} </text>
          </g>
        )}
        { yTicks.map((d, i) =>
          <text key={`hours-${d}`} x={chartWidth} y={yScale(d)} fill='#E6E9EE' fontSize={`${fontScale(numberOfBars)}rem`}>{d}</text>
        )}
      </g>
    </svg>
  );
};

BarGraph.propTypes = {
  vals: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default BarGraph;
