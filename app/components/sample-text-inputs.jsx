import React from 'react';
import TextInput from 'react-nuik/lib/components/text-input';

class SampleTextInputs extends React.Component {
  constructor() {
    super();
    this.state = {
      value1: '',
      value2: 'yo'
    };
  }

  render() {
    return (
      <div>
        <h2>Text Inputs</h2>
        <TextInput variant="singleline" label="uncontrolled" helper="helper text here" type='text'/>
        <TextInput value="foo" variant="singleline" label="controlled (static)" helper="helper text here" type="text" disabled />
        <TextInput value={this.state.value1} onChange={(e) => this.setState({ value1: e.currentTarget.value }) } variant="singleline"label="controlled (dynamic)" helper="helper text here" type='text'/>
        <TextInput value={this.state.value2} onChange={(e) => this.setState({ value2: e.currentTarget.value }) } variant="singleline"label="filled (dynamic)" helper="helper text here" type='text'/>
        <TextInput variant="multiline" label="multiline" helper="more text here" type='text'/>
        <TextInput className='one-third' variant='singleline' type='text' label='name' />
        <TextInput className='two-thirds' variant='singleline' type='password' label='password' />
      </div>
    );
  }
}

export default SampleTextInputs;
