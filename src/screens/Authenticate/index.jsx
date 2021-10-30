import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import AuthForm from '../../components/AuthForm';
import { login } from '../../redux/actions/authActions';
import {
  setLoading,
  setLoadingFalse,
  signUpUser,
} from '../../redux/slices/authSlice';
import apiCalls from '../../utils/api';
import './auth.scss';

function Authenticate() {
  const [loginForm, setLoginForm] = useState(true);
  const dispatch = useDispatch();
  const alert = useAlert();

  const authenticate = async (name, email, password) => {
    if (loginForm) {
      await login({ email, password }, dispatch, alert);
    } else {
      try {
        dispatch(setLoading());
        const { data } = await apiCalls.registerUser({ name, email, password });
        if (data.success) {
          alert.success('You have successfully registered,Please sign in');
          dispatch(signUpUser());
          setLoginForm(true);
        }
      } catch (err) {
        alert.error(
          (err.response && err.response.data.error) || 'Something went wrong'
        );
        dispatch(setLoadingFalse());
        console.log(err.response.data.error);
      }
    }
  };

  return (
    <div className='auth'>
      {loginForm ? (
        <AuthForm authenticate={authenticate} />
      ) : (
        <AuthForm register authenticate={authenticate} />
      )}
      {!loginForm ? (
        <p>
          Already a user?
          <span onClick={() => setLoginForm(true)}> SIGN IN</span>
        </p>
      ) : (
        <p>
          New User ?<span onClick={() => setLoginForm(false)}> SIGN UP</span>
        </p>
      )}
    </div>
  );
}

export default Authenticate;
