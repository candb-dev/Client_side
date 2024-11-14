import React, { useState } from 'react';
import Heading from '../../../components/common/Heading/Heading';
import MyButton from '../../../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../../redux/features/authSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  const handleForgotPassword = () => {
    navigate('/auth/forgot-password');
  };

  const handleSignUp = () => {
    navigate('/auth/signup');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((response) => {
        // Save token and user information to local storage
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        navigate('/');
      })
      .catch((err) => {
        console.error('Failed to login:', err);
      });
  };

  return (
    <div className="card23 w-full max-w-md shadow-2xl ring-1 ring-orange-600 rounded-lg p-6 bg-white/85">
      <div className="card45">
        <form className="form" onSubmit={handleLogin}>
          <Heading text="LOGIN" />
          {error && <p className="text-red-500 mb-4">{error.message}</p>}
          <div className="field mb-4">
            <input
              type="email"
              className="input-field w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-orange-600"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field mb-4">
            <input
              type="password"
              className="input-field w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-orange-600"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p
            className="mt-3 ml-4 hover:underline hover:text-orange-600 cursor-pointer"
            onClick={handleForgotPassword}
          >
            Forgot password?
          </p>
          <div className="flex flex-col gap-x-3 justify-center items-center py-4">
            <MyButton buttonText="Login" pageUrl="/" onClick={handleLogin} disabled={loading} />
            <div className="mt-6">
              <p>
                New here?{" "}
                <span
                  onClick={handleSignUp}
                  className="mt-3 hover:underline hover:text-orange-600 cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
