import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import './AuthForm.scss';

function AuthForm({ register = false, authenticate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading } = useSelector(state => state.auth);

  const onSubmit = e => {
    e.preventDefault();
    authenticate(name, email, password);
  };

  return (
    <Card>
      <div className='card-form'>
        <h3 className='header'>{register ? 'SIGNUP' : 'SIGN IN'}</h3>
        <form onSubmit={onSubmit}>
          {register && (
            <input
              type='text'
              placeholder='Enter name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          )}
          <input
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type='submit'>
            {loading ? '...' : register ? 'SIGNUP' : 'LOGIN'}
          </button>
        </form>
      </div>
    </Card>
  );
}

export default AuthForm;
