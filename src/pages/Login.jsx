import React from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>

        <div className="input-box">
          <input type='text' placeholder='username' required />
          <FaUser className='icon' />
        </div>

        <div className="input-box">
          <input type='password' placeholder='password' required />
          <IoIosLock className='icon' />
        </div>

        <div className="remember-forgot">
          <label><input type='checkbox' />Remember me </label>
          <a href='#'>Forget Password</a>
        </div>

        <button type='submit'>Login</button>

        <div className="register-link">
          <p>Don't have an account ? <a href='#'>Register</a></p>
        </div>
      </form>
    </div>
  );
};
