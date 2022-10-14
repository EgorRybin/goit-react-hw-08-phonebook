import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import FormContacts from '../PhoneBook/Form/FormContacts';
import ContactList from '../PhoneBook/ContactList/ContactList';
import Filter from '../PhoneBook/Filter/Filter';
import { getIsLoading } from 'redux/selectors';
import s from './App.module.css';
import FormRegister from 'components/Auth/FormRegister';
import UserMenu from 'components/UserMenu/UserMenu';
import FormLogin from 'components/Auth/FormLogin';
import { fetchCurrentUser } from 'redux/auth/auth-operatipons';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.conteiner}>
      <FormLogin />
      <UserMenu />
      <FormRegister />
      <FormContacts />
      <Filter />
      <ContactList />
      <div className={s.loading}>{isLoading && <b>Зараз все буде...</b>}</div>
    </div>
  );
};
