import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts, deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

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

  return (
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
          <ul>
            {filteredContacts.map(({ id, name, phone }) => (
              <Typography component="h1" variant="h5" key={id}>
                <li key={id}>
                  <span style={{ marginRight: '16px' }}>
                    {name} {phone}
                  </span>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<DeleteIcon />}
                    type="button"
                    onClick={() => deleteCont(id)}
                  >
                    delete
                  </Button>
                </li>
              </Typography>
            ))}
          </ul>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default ContactList;
