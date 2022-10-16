import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selector';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const navtStyles = {
//   display: 'flex',
//   justifyContent: 'space-around',
//   height: '30px',
//   marginBottom: '10px',
// };
// const userStyle = {
//   display: 'flex',
//   justifyContent: 'space-around',
//   borderBottom: '1px solid black',
// };

const AppBarr = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <header > */}
              {/* <nav > */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {!isLoggedIn && <NavLink to="/">Registretion</NavLink>}
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {!isLoggedIn && <NavLink to="/logIn">Log In</NavLink>}
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
                </Typography>
              {/* </nav> */}
              <UserMenu />
            {/* </header> */}
            <Outlet />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default AppBarr;
