import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';

import { getUserName } from "redux/auth/auth-selector";
import { logOut } from "redux/auth/auth-operatipons";
import { getIsLoggedIn } from "redux/auth/auth-selector";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    isLoggedIn && 
    <div>
      <p>{userName}</p>
      <Button variant="contained" type="button" onClick={() => {dispatch(logOut())}}>Logout</Button>
    </div> 
  );
};

export default UserMenu;