import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selector';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const AppBarr = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ marginRight: '20px' }}
              >
                {!isLoggedIn && (
                  <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      type="button"
                    >
                      Sign Up
                    </Button>
                  </NavLink>
                )}
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {!isLoggedIn && (
                  <NavLink to="/logIn" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      type="button"
                    >
                      Log In
                    </Button>
                  </NavLink>
                )}
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 6 }}>
                {isLoggedIn && (
                  <NavLink to="/contacts" style={{ textDecoration: 'none' }}>
                    {' '}
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      type="button"
                    >
                      Contacts
                    </Button>
                  </NavLink>
                )}
              </Typography>
              <UserMenu />
              <Outlet />
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default AppBarr;
