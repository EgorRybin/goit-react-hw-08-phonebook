import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsLoggedIn } from 'redux/auth/auth-selector';

const PublicRote = ({ children, restricted = false, redirect = '/' }) => {
  const isLogin = useSelector(getIsLoggedIn);

  const isNavigate = isLogin && restricted;

  return isNavigate ? <Navigate to={redirect} /> : children;
};

export default PublicRote;
