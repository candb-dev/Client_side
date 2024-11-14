import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Heading from '../../../components/common/Heading/Heading';
import MyButton from '../../../components/common/Button/Button';
import { forgotPassword } from '../../../../redux/features/authSlice'; // Import the action

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const response = await dispatch(forgotPassword({ email }));
    if (response.payload?.success) {
      navigate('/auth/reset-password');
    } else {
      alert(response.payload?.message || 'Failed to send reset password email.');
    }
  };

  const handleLogin = () => {
    navigate('/auth/login');
  };

  return (
    <div className="card23 w-full max-w-md shadow-2xl ring-1 ring-orange-600 rounded-lg p-6 bg-white/85">
      <div className="card45">
        <form onSubmit={handleForgotPassword} className="form">
          <Heading text="FORGOT PASSWORD" />
          <div className="field mb-4">
            <input
              type="email"
              className="input-field w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-orange-600"
              placeholder="Enter Your Registered Email!"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-x-3 justify-center items-center py-4">
            <MyButton buttonText="Proceed" onClick={handleForgotPassword} />
            <div className="mt-6">
              <p>Remembered your password?{" "}
                <span onClick={handleLogin} className="mt-3 hover:underline hover:text-orange-600 cursor-pointer">
                  Login
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
