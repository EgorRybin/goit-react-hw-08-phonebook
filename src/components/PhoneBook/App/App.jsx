import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from '../Form/Form';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import s from '../App/App.module.css';


const INIT_STATE = {
  contacts: [],
  filter: '',
};

class App extends Component {
  state = { ...INIT_STATE };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  formSubmitData = data => {
    const { contacts } = this.state;
    if (
      contacts.some(el => el.name.toLowerCase() === data.name.toLowerCase())
    ) {
      alert(`${data.name} is allready in contacts`);
      return;
    }

    const id = nanoid();
    const contactInfo = { id, name: data.name, number: data.number };
    this.setState(prev => ({
      contacts: [...prev.contacts, contactInfo],
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsPatsed = JSON.parse(contacts);
    if (contactsPatsed) {
      this.setState({contacts: contactsPatsed})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
} 

  deleteContact = id => {
    const { contacts } = this.state;
    const deleteContactFromArr = contacts.filter(el => el.id !== id);
    this.setState(prev => ({
      contacts: deleteContactFromArr,
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const { handleChange, formSubmitData, deleteContact } = this;

    const filteredContscts = filter
      ? contacts.filter(el =>
          el.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

    return (
      <div className={s.conteiner}>
        <h1>Phonebook</h1>
        <Form submitData={formSubmitData} />
        <h2>Contacts</h2>
        <Filter handleChange={handleChange} filter={filter} />
        <ContactList
          contactsData={filteredContscts}
          deleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
