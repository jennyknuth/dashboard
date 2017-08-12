import React from 'react';
import * as d3 from 'd3';
import positionData from './positionData.js';

import board from 'theme/board';

class BulletinBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionArray: positionData.reverse()
    };
    this.margin = { top: 50, bottom: 50, left: 50, right: 50 };
    this.width = 3840;
    this.height = 2160;

    this.chartHeight = this.height - this.margin.top - this.margin.bottom;
    this.chartWidth = this.width - this.margin.left - this.margin.right;

    this.sideLength = 200;
    this.samples = 20;
    this.padding = 10;
    this.maxAnswers = 10;

    this.xScale = d3.scaleLinear()
      .domain([0, 1])
      .range([this.sideLength / 2, this.chartWidth - this.sideLength]);

    this.yScale = d3.scaleLinear()
      .domain([0, 1])
      .range([this.sideLength / 2, this.chartHeight - this.sideLength]);
  }

  render() {
    const { question, answers } = this.props;

    const colors = ['#DD3B4C', '#3CAFDA', '#F4BC26', '#37C0C9', '#FD9813', '#22537A' ];

    return (
      <svg
        viewBox={`0,0,${this.width},${this.height}`}
        preserveAspectRatio='xMidYMin slice'
        style={{width: '100%', paddingBottom: '40%', height: '1px', overflow: 'visible'}}
      >
        <text className={board.question} x={0} dx={81} y={0} dy={70} textAnchor='start'>{question.text}</text>
        <g transform={`translate(${this.margin.left}, ${this.margin.top})`} >
          { answers && answers.map((d, i) =>
            <g key={`message-${i}`} >
              <rect className={board.indexCard} x={this.state.positionArray[answers.length - 1 - i][0]} y={this.state.positionArray[answers.length - 1 - i][1]} width={this.sideLength * 1.3} height={this.sideLength} stroke='#3CAFDA' strokeWidth={0.2}/>
              <circle className={board.pin} cx={this.state.positionArray[answers.length - 1 - i][0]} cy={this.state.positionArray[answers.length - 1 - i][1]} r={13} fill={d3.shuffle(colors)[0]}/>
              <foreignObject
                x={this.state.positionArray[answers.length - 1 - i][0] + this.padding}
                y={this.state.positionArray[answers.length - 1 - i][1] + this.padding}
                width={(this.sideLength * 1.3) - (this.padding + this.padding)}
                height={this.sideLength - (this.padding + this.padding + 24)}
                style={{ fontSize: 22, overflow: 'hidden' }}
              >
                {d.text}
              </foreignObject>
              <text x={this.state.positionArray[answers.length - 1 - i][0] + ((this.sideLength * 1.3) - this.padding)} y={this.state.positionArray[answers.length - 1 - i][1] + (this.sideLength - this.padding)} textAnchor="end" fontSize={20}>{d.name}</text>
            </g>
          )
        }

        </g>
      </svg>
    );
  }
}

BulletinBoard.propTypes = {
  question: React.PropTypes.object,
  answers: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default BulletinBoard;
