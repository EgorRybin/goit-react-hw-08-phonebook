import { useSelector } from 'react-redux';

import { Form } from '../Form/Form';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { getIsLoading } from 'components/redux/selectors';
import s from '../App/App.module.css';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  return (
    <div className={s.conteiner}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <div className={s.loading}>{isLoading && <b>Зараз все буде...</b>}</div>
      <ContactList />
    </div>
  );
};
