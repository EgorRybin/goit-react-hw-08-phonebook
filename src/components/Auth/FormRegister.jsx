import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/auth-operatipons';

const FormRegister = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form onSubmit={hendleSubmit}>
        <input
          name="name"
          value={name}
          type="text"
          placeholder="enter name"
          onChange={handleChange}
        ></input>
        <input
          name="email"
          value={email}
          type="email"
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
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default FormRegister;
