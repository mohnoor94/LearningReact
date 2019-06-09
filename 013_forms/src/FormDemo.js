import React, {Component} from 'react'

class FormDemo extends Component {

  state = {
    username: '', email: '', password: ''
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  };

  handleSubmit = evt => {
    evt.preventDefault();
    alert(`Your Username: ${this.state.username}`);
    this.setState({username: '', email: '', password: ''});
  };

  render() {
    return (
      <div>
        <h1>Form w/ Multiple Inputs</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username: </label>
          <input
            type='text'
            id='username'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }


}

export default FormDemo;