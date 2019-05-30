import React from 'react';
import TextField from '@material-ui/core/TextField';

class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <TextField
        style={{padding:24}}
        id={this.props.id}
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.inputVal}
        onChange={this.props.handleChange}
        margin="normal"
        variant="filled"
      />
      </div>
    )
  }
}

export default Form;