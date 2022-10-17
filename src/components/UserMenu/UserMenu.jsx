import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { getUserName } from 'redux/auth/auth-selector';
import { logOut } from 'redux/auth/auth-operatipons';
import { getIsLoggedIn } from 'redux/auth/auth-selector';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0288d1',
    },
    secondary: {
      main: '#2196f3',
    },
  },
});

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    isLoggedIn && (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{marginRight: 3}}>
              <p>{userName}</p>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              size="small"
              type="button"
              onClick={() => {
                dispatch(logOut());
              }}
            >
              Logout
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    )
  );
};

export default UserMenu;
