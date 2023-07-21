import { Component } from 'react';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = e => {
    this.setState({name: e.target.value});
  };

  render() {
    return (
      <form action="">
        <label htmlFor="">
          
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}
