import React, { Component } from 'react'
import Typeform from 'react-typeform';
import Input from 'react-toolbox/lib/input';
 
class TypeFormComponent extends Component {
 
  submit() {
    console.log('typeform clicked')
  }

  state = { name: '', phone: '', email: '', hint: '' };
  
  handleChange = (value, ev) => {
    this.setState({ [ev.target.name]: value });
  };
 
  render() {
    return(
        <Typeform onSubmit={this.submit}>
          <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange} maxLength={16 } />
        </Typeform>
    );
  }
}
 
export default TypeFormComponent;