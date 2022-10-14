import { useDispatch, useSelector } from "react-redux";

import { getUserName } from "redux/auth/auth-selector";
import { logOut } from "redux/auth/auth-operatipons";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  return (
    <div>
      <p>{userName}</p>
      <button type="button" onClick={()=>{dispatch(logOut())}}>Logout</button>
    </div>
  );
};

export default UserMenu;