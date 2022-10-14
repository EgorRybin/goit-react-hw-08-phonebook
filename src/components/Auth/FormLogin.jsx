import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/auth-operatipons';

const FormLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={hendleSubmit}>
        <input
          name="email"
          value={email}
          type="text"
          placeholder="enter email"
          onChange={handleChange}
        ></input>
        <input
          name="password"
          value={password}
          type="password"
          placeholder="enter password"
          onChange={handleChange}
        ></input>
        <button type="submit">LogIn</button>
      </form>
    </>
  );
};

export default FormLogin;
