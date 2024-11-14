import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../../redux/features/authSlice';
import Heading from '../../../components/common/Heading/Heading';
import MyButton from '../../../components/common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setAgreeToTerms(!agreeToTerms);
    setShowWarning(false); // Hide warning when checkbox is toggled
  };

  const handleSignUpClick = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (!agreeToTerms) {
      setShowWarning(true);
    } else {
      // Dispatch registerUser action with form data
      const resultAction = await dispatch(registerUser(formData));
      if (registerUser.fulfilled.match(resultAction)) {
        console.log('Signup successful!');
        navigate('/');
      } else {
        console.error('Signup failed:', resultAction.payload);
      }
    }
  };

  const handleLogin = () => {
    navigate('/auth/login');
  };

  return (
    <div className="card23 w-full max-w-md shadow-2xl ring-1 ring-orange-600 rounded-lg p-6 bg-white/85">
      <div className="card45">
        <form className="form">
          <Heading text="SIGN UP" />
          <div className="field mb-4">
            <input
              type="text"
              name="name"
              className="input-field w-full p-3 rounded-md border border-black focus:outline-none focus:border-orange-600"
              placeholder="Username"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="field mb-4">
            <input
              type="email"
              name="email"
              className="input-field w-full p-3 rounded-md border border-black focus:outline-none focus:border-orange-600"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="field mb-4">
            <input
              type="password"
              name="password"
              className="input-field w-full p-3 rounded-md border border-black focus:outline-none focus:border-orange-600"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="field mb-4">
            <input
              type="number"
              name="number"
              className="input-field w-full p-3 rounded-md border border-black focus:outline-none focus:border-orange-600"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <div className="field mb-4 flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              checked={agreeToTerms}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <Link to="/terms" className="text-orange-600 hover:underline">
                Terms of Use
              </Link>
            </label>
          </div>
          {showWarning && (
            <p className="text-red-500 text-sm mb-4">
              Please agree to the Terms of Use before signing up.
            </p>
          )}
          {error && (
            <p className="text-red-500 text-sm mb-4">
              {error}
            </p>
          )}
          <div className="flex flex-col gap-x-3 justify-center items-center py-4">
            <MyButton
              buttonText="Sign Up"
              pageUrl="/"
              onClick={handleSignUpClick}
              disabled={loading} // Disable button when loading
            />
            <div className="mt-6">
              <p>
                Already a user?{" "}
                <span
                  onClick={handleLogin}
                  className="mt-3 hover:underline hover:text-orange-600 cursor-pointer"
                >
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

export default SignupForm;
