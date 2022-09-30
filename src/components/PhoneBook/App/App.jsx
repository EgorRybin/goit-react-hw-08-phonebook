import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

import { Form } from '../Form/Form';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import s from '../App/App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const formSubmitData = data => {
    if (
      contacts.some(el => el.name.toLowerCase() === data.name.toLowerCase())
    ) {
      alert(`${data.name} is allready in contacts`);
      return;
    }
    const id = nanoid();
    const contactInfo = { id, name: data.name, number: data.number };

    setContacts(prev => [...prev, contactInfo]);
  };

  const deleteContact = id => {
    const deleteContactFromArr = contacts.filter(el => el.id !== id);
    setContacts(deleteContactFromArr);
  };
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
};
