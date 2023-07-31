import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {

  state = {
    name: '',
    number: '',
    id: ''
  }

  handleChange = e => {
    const contactId = nanoid()
    const{name, value} = e.target;
    this.setState({ [name]: value, id: contactId});
  };

  handleSubmit = (e) => {
    e.preventDefault();
   
    this.props.onSubmit(this.state)
    this.reset();
  };
  reset =() => {
    this.setState({name: '', number: '', id: ''})
  }

  render() {
    const {name, number} = this.state;
    return (
      <form action="" onSubmit={this.handleSubmit}>
        
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
        
        
      </form>
    )
  }
}