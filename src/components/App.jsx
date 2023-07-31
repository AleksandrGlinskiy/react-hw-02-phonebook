import { Component } from 'react';

import { ContactForm } from './Form/ContactForm';
export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    
    filter: '',
  };

  

  

  changeFilter =(e) => {
    this.setState({filter: e.target.value})
  }

  addContact = (contact) => {
    this.setState(({contacts}) => ({
      contacts: [...contacts, contact]
    }));
  };

  render() {
    const{filter, contacts} = this.state
    const normalizedFilter = filter.toLowerCase()
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    return (
      
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
      <h2>Contacts</h2>
      <label htmlFor="">
        Find contacts by name 
      <input type="text" value={filter} onChange={this.changeFilter}/>
      </label>
      <ul>
      {visibleContacts.map((contact) => (
                <li key={contact.id} >
            <span >{contact.name}: </span>
            <span >{contact.number}</span>

            
          
          </li>
        ))}
        
    </ul>
      </div>
      
    );
  }
}
