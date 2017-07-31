import React from 'react';
import * as d3 from 'd3';

class BulletinBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionArray: []
    };
    this.margin = { top: 0, bottom: 0, left: 0, right: 0 };
    this.width = 1600;
    this.height = 500 ;
    this.chartHeight = this.height - this.margin.top - this.margin.bottom;
    this.chartWidth = this.width - this.margin.left - this.margin.right;

    this.maxRadius = 150;
    this.padding = 10;

    this.generateRandomPosition = this.generateRandomPosition.bind(this);
    this.getDistance = this.getDistance.bind(this);
    this.getDistanceToNearestNote = this.getDistanceToNearestNote.bind(this);
    this.generateBestPosition = this.generateBestPosition.bind(this);
    // this.placeNote = this.placeNote.bind(this);

  }

  generateRandomPosition() {
    return [(Math.random() * (this.chartWidth - this.maxRadius)), (Math.random() * (this.chartHeight - this.maxRadius))];
  }

  getDistance(position1, position2) {
    const xDistance = Math.abs(position1[0] - position2[0]);
    const yDistance = Math.abs(position1[1] - position2[1]);
    const distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    return Math.floor(distance);
  }

  getDistanceToNearestNote(position) {
    let shortest;
    for (var i = 0; i < this.state.positionArray.length - 1 ; i++) {
      const distance = this.getDistance(this.state.positionArray[i], position);
      if (!shortest || distance < shortest) shortest = distance;
    }
    return shortest;
  }

  generateBestPosition() {
    const samples = 20; // candidate positions attempted, higher is better
    let bestPosition, biggestDistance;
    for (var i = 0; i < samples; i++) {
      const candidatePosition = this.generateRandomPosition();
      if (!this.state.positionArray.length) {
        return candidatePosition;
      }
      const distance = this.getDistanceToNearestNote(candidatePosition);
      if (!bestPosition || distance >= biggestDistance) {
        bestPosition = candidatePosition;
        biggestDistance = distance;
      }
    }
    return bestPosition;
  }

  componentWillMount() {
    const positionArray = this.props.data.map((d, i) => this.generateBestPosition());
    this.setState({ positionArray });
  }

  render() {
    const { data } = this.props;

    // const rotateScale = d3.scaleLinear()
    //   .domain([0, 1])
    //   .range([-30, 30]);

    return (
      <svg
        viewBox={`0,0,${this.width},${this.height}`}
        preserveAspectRatio='xMidYMin slice'
        style={{width: '100%', paddingBottom: '40%', height: '1px', overflow: 'visible'}}
      >
        { data.map((d, i) =>
            <g key={`message-${i}`} transform={`translate(${this.margin.left}, ${this.margin.top})`} >
              <rect x={this.state.positionArray[i][0] - (this.maxRadius / 2)} y={this.state.positionArray[i][1] - (this.maxRadius / 2)} width={this.maxRadius} height={this.maxRadius} fill='teal'/>
              <circle cx={this.state.positionArray[i][0]} cy={this.state.positionArray[i][1]} r={4} fill='red'/>
            </g>
          )
        }
      </svg>
    );
  }
}
// const BulletinBoard = ({ data }) => {

  // // set up chart boundaries and margins
  // const margin = { top: 0, bottom: 0, left: 0, right: 0 };
  // const width = 1600;
  // const height = 500 ;
  // const chartHeight = height - margin.top - margin.bottom;
  // const chartWidth = width - margin.left - margin.right;
  //
  // const maxRadius = 150;
  // const padding = 10;
  // const samples = 200; // candidate dots attempted, higher is better
  //
  // let placedNotes = [];
  //
  // const rotateScale = d3.scaleLinear()
  //   .domain([0, 1])
  //   .range([-30, 30]);
  //
  // const generateRandomPosition = () => [(Math.random() * (chartWidth - maxRadius)), (Math.random() * (chartHeight - maxRadius))];
  //
  // const getDistance = (position1, position2) => {
  //   const xDistance = Math.abs(position1[0] - position2[0]);
  //   const yDistance = Math.abs(position1[1] - position2[1]);
  //   const distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  //   return Math.floor(distance);
  // };
  //
  // const getDistanceToNearestNote = (position) => {
  //   let shortest;
  //   for (var i = 0; i < placedNotes.length - 1 ; i++) {
  //     const distance = getDistance(placedNotes[i].position, position);
  //     if (!shortest || distance < shortest) shortest = distance;
  //   }
  //   return shortest;
  // };
  //
  // const generateBestPosition = (note) => {
  //   for (var i = 0; i < samples; i++) {
  //     const candidatePosition = generateRandomPosition();
  //     if (!placedNotes.length) {
  //       note.position = candidatePosition;
  //       return note;
  //     }
  //     const distance = getDistanceToNearestNote(candidatePosition);
  //     if (!note.bestPosition || distance >= note.biggestDistance) {
  //       note.bestPosition = candidatePosition;
  //       note.biggestDistance = distance;
  //     }
  //   }
  //   note.position = note.bestPosition;
  //   return note;
  //
  // };
  //
  // const placeNote = (note) => {
  //   const noteWithPosition = generateBestPosition(note);
  //   placedNotes.push(noteWithPosition);
  //   return note;
  // };
  //
  //
  // return (
  //   <svg
  //     viewBox={`0,0,${width},${height}`}
  //     preserveAspectRatio='xMidYMin slice'
  //     style={{width: '100%', paddingBottom: '40%', height: '1px', overflow: 'visible'}}
  //   >
  //     { data.map((d, i) =>
  //         <g key={`message-${i}`} transform={`translate(${margin.left}, ${margin.top})`} >
  //           <rect x={placeNote(d).position[0]} y={placeNote(d).position[1]} width={maxRadius} height={maxRadius} />
  //         </g>
  //       )
  //     }
  //   </svg>
  // );
// };

BulletinBoard.propTypes = {
  vals: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default BulletinBoard;
