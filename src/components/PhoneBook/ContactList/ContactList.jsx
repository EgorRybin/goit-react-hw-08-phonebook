import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { Modal } from 'components/Modal/Modal';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0288d1',
    },
    secondary: {
      main: '#00acc1',
    },
  },
});

const ContactList = () => {
  const [isModal, setIsModal] = useState(false);
  const [changeContact, setChangeContact] = useState(null);
  const contacts = useSelector(getContacts);
  const filterWord = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteCont = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = filterWord
    ? contacts.filter(el =>
        el.name.toLowerCase().includes(filterWord.toLowerCase())
      )
    : contacts;

  const toogleModal = (id, name, number) => {
    setChangeContact({ id, name, number });
    setIsModal(!isModal);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="s">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ul>
              {filteredContacts.map(({ id, name, number }) => (
                <Typography component="h1" variant="h5" key={id}>
                  <li key={id}>
                    <span style={{ marginRight: '16px' }}>
                      {name} {number}
                    </span>
                    <IconButton aria-label="delete"
                      color="secondary"
                      onClick={() => deleteCont(id)}>
                     <DeleteIcon />
                   </IconButton>
                    <Button
                      variant="outlined"
                      size="small"
                      type="button"
                      onClick={() => {
                        toogleModal(id, name, number);
                      }}
                    >
                      change
                    </Button>
                  </li>
                </Typography>
              ))}
            </ul>
            {isModal && (
              <Modal
                toogleModal={toogleModal}
                changeContactInfo={changeContact}
              />
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default ContactList;
