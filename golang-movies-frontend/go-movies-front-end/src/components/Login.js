import React, { useState } from 'react';
import Input from './forms/Input';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setJwtToken, setAlertClassName, setAlertMessage } =
    useOutletContext();

  const navigate = useNavigate();

  const handleSubmmit = (event) => {
    event.preventDefault();

    console.log('email/pass', email, password);

    if (email === 'admin@example.com') {
      setJwtToken('abc');
      setAlertClassName('d-none');
      setAlertMessage('');
      navigate('/');
    } else {
      setAlertClassName('alert-danger');
      setAlertMessage('Incorrect credentials 🤨');
    }
  };
  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleSubmmit}>
        <Input
          title="Email Address"
          type="email"
          className="form-control"
          name="email"
          autoComplete="email-new"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autoComplete="password-new"
          onChange={(event) => setPassword(event.target.value)}
        />
        <hr />
        <Input type="submit" className="btn btn-primary" value="login" />
      </form>
    </div>
  );
};

export default Login;
