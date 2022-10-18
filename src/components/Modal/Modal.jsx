import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import s from './Modal.module.css';
import { changeContact } from 'redux/contacts/operations';

const theme = createTheme();

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toogleModal, changeContactInfo }) => {
  const [name, setName] = useState();
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  useEffect(() => {
    setName(changeContactInfo.name);
    setNumber(changeContactInfo.number);
  }, [changeContactInfo.name, changeContactInfo.number]);

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      toogleModal();
    }
  };

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      toogleModal();
    }
  };

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
    dispatch(changeContact({ id: changeContactInfo.id, name, number }));
    toogleModal();
  };
  return createPortal(
    <div className={s.Overlay} onClick={onOverlayClick}>
      <div className={s.Modal}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Phonebook
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onChange={handleChange}
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="number"
                  label="number"
                  type="number"
                  id="number"
                  autoComplete="number"
                  onChange={handleChange}
                  value={number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  change contact
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>,
    modalRoot
  );
};
