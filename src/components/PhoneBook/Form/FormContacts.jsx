import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './Form.module.css';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const FormContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    if (e.target.name === 'name') {
      setName(value);
    }
    if (e.target.name === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const chekName = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (chekName) {
      alert('Такий контакт вже є...');
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.input} htmlFor="">
          <span className={s.nameFirst}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={s.input} htmlFor="">
          <span className={s.name}>Phone number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default FormContacts;
