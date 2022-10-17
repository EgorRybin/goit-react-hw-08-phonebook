import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { getIsLoggedIn } from './../../redux/auth/auth-selector';
import { getIsLoading } from 'redux/selectors';
import { fetchCurrentUser } from 'redux/auth/auth-operatipons';
import FormRegister from 'components/Auth/FormRegister';
import FormLogin from 'components/Auth/FormLogin';
import Contacts from 'components/PhoneBook/Contacts';
import AppBarr from 'components/AppBar/AppBar';
import PriviteRote from 'components/PrivateRote/PrivateRote';
import PublicRote from 'components/PublicRote/PublicRote';
import { getIsRefreshing } from './../../redux/auth/auth-selector';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isRefreshing = useSelector(getIsRefreshing);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <AppBarr />
        <Routes>
          <Route
            index
            element={
              <PublicRote restricted redirect="contacts">
                <FormRegister />
              </PublicRote>
            }
          />
          <Route
            path="logIn"
            element={
              <PublicRote restricted redirect="/">
                <FormLogin />
              </PublicRote>
            }
          />
          <Route
            path="contacts"
            element={
              <PriviteRote redirect="/logIn">
                <Contacts />
              </PriviteRote>
            }
          />
          <Route path="*" element={isLoggedIn ? <Contacts /> : <FormLogin />} />
        </Routes>
        <div>{isLoading && <b>Зараз все буде...</b>}</div>
      </>
    )
  );
};
