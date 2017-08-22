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

    this.cardHeight = 200;
    this.cardWidth = this.cardHeight * 1.3;
    this.padding = 10;

    this.rotateScale = d3.scaleLinear()
      .domain([0, 1])
      .range([-2.4, 2.4]);
  }

  render() {
    const { question, answers } = this.props;

    const colors = ['#DD3B4C', '#3CAFDA', '#F4BC26', '#37C0C9', '#FD9813', '#22537A' ];

    const getX = (index) => this.state.positionArray[answers.length - 1 - index][0];
    const getY = (index) => this.state.positionArray[answers.length - 1 - index][1];

    return (
      <svg
        viewBox={`0,0,${this.width},${this.height}`}
        preserveAspectRatio='xMidYMin slice'
        style={{width: '100%', paddingBottom: '40%', height: '1px', overflow: 'visible'}}
      >
        <text className={board.question} x={0} dx={81} y={0} dy={70} textAnchor='start'>{question.text}</text>
        <g transform={`translate(${this.margin.left}, ${this.margin.top})`}>
          { answers && answers.map((d, i) =>
            <g key={`message-${i}`} >
              <g transform={`rotate(${this.rotateScale(Math.random())} ${getX(i) + (this.cardWidth / 2)} ${getY(i) + (this.cardHeight / 2)})`}>
                <rect
                  className={board.indexCard}
                  x={getX(i)}
                  y={getY(i)}
                  width={this.cardWidth}
                  height={this.cardHeight}
                  stroke='#3CAFDA'
                  strokeWidth={0.2}
                />
                <circle className={board.pin}
                  cx={getX(i)}
                  cy={getY(i)} r={13}
                  fill={d3.shuffle(colors)[0]}
                />
                <foreignObject
                  x={getX(i) + this.padding}
                  y={getY(i) + this.padding}
                  width={(this.cardWidth) - (this.padding + this.padding)}
                  height={this.cardHeight - (this.padding + this.padding + 24)}
                  style={{ fontSize: 22, overflow: 'hidden' }}
                  >
                  {d.formattedText}
                  {d.imageUrl && <img src={d.imageUrl} height={75}/>}
                  <iframe height="100" width="130" frameBorder="none" style={{ top: 0, left: 0 }} src="https://www.youtube.com/embed/mcHNOOW4ywA?rel=0&showinfo=0&autoplay=1&loop=1&playlist=mcHNOOW4ywA&controls=0"/>
                </foreignObject>
                <text
                  x={getX(i) + ((this.cardWidth) - this.padding)}
                  y={getY(i) + (this.cardHeight - this.padding)}
                  textAnchor="end"
                  fontSize={20}
                >
                  {d.name}
                </text>
              </g>
            </g>)
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
