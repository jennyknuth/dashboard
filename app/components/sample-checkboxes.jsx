import React from 'react';
import Checkbox from 'react-nuik/lib/components/checkbox';

class SampleCheckboxes extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cars: false,
      trucks: false,
      boats: true,
      planes: false,
      other: 'mixed',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    const stateValue = typeof this.state[key] === 'boolean' ? this.state[key] : false;
    this.setState({ [key]: !stateValue });
  }

  render() {
    return (
      <div>
        <h2>Checkboxes</h2>
        <Checkbox label='Cars' onChange={() => this.handleClick('cars')} checked={this.state.cars} />
        <Checkbox label='Trucks' onChange={() => this.handleClick('trucks')} checked={this.state.trucks} />
        <Checkbox label='Boats' onChange={() => this.handleClick('boats')} checked={this.state.boats} />
        <Checkbox label='Planes' onChange={() => this.handleClick('planes')} checked={this.state.planes} />
        <Checkbox label='initially undefined' onChange={() => this.handleClick('other')} checked={this.state.other} />
        <Checkbox label='disabled unchecked' disabled checked={false} />
        <Checkbox label='disabled checked' onChange={() => this.handleClick('disabled')} disabled checked={true} />
        <Checkbox label='disabled undefined' disabled checked='mixed'/>
      </div>
    );
  }
}

export default SampleCheckboxes;
