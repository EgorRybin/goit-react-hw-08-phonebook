import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import s from './App.module.css';
import { getIsLoading } from 'redux/selectors';
import { fetchCurrentUser } from 'redux/auth/auth-operatipons';
import FormRegister from 'components/Auth/FormRegister';
import FormLogin from 'components/Auth/FormLogin';
import Contacts from 'components/PhoneBook/Contacts';
import AppBarr from 'components/AppBar/AppBar';
import PriviteRote from 'components/PrivateRote/PrivateRote';
import PublicRote from 'components/PublicRote/PublicRote';
import { getIsRefreshing } from './../../redux/auth/auth-selector';

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isRefreshing = useSelector(getIsRefreshing);
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
        </Routes>
        <div className={s.loading}>{isLoading && <b>Зараз все буде...</b>}</div>
      </>
    )
  );
};
