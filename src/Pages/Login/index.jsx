import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Utils/Button/Button';
const Login = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (values) => {
    handleLogin(values);
  };

  const handleLogin = async (loginData) => {
    try {
      const { data } = await axios.post(
        'http://w42g8.int3306.freeddns.org/api/v1/auth/signin',
        loginData
      );
      localStorage.setItem('token', data.accessToken);
      if (data.roles[0] === 'ROLE_ADMIN') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='auth-page'>
      <div div className='container'>
        <div className='c1'>
          <div className='c11'>
            <h1 className='mainhead'>PICK YOUR SPOT</h1>
            <p className='mainp'>
              Just click the buttons below to toggle between SignIn & SignUp
            </p>
          </div>
          <div id='left' className='left_hover'>
            <h1 className='s1class'>
              <span>SIGN</span>
              <span className='su'>IN</span>
            </h1>
          </div>
          <div id='right' onClick={() => navigate('/signup')}>
            <h1 className='s2class'>
              <span>SIGN</span>
              <span className='su'>UP</span>
            </h1>
          </div>
        </div>
        <div className='c2'>
          <form className='signin' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='signup1'>SIGN IN</h1>
            <br />
            <br />
            <br />
            <br />
            <input
              type='text'
              placeholder='Username*'
              className='username'
              {...register('username', {
                required: {
                  value: true,
                  message: 'Username is required',
                },
                minLength: {
                  value: 6,
                  message: 'Username must have at least 6 character',
                },
                maxLength: {
                  value: 12,
                  message: 'Username must have less than 12 character',
                },
              })}
            />
            {errors?.username && (
              <p className='error'>{errors.username.message}</p>
            )}
            <input
              type='password'
              placeholder='Password*'
              className='username'
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is required',
                },
                minLength: {
                  value: 6,
                  message: 'Password must have at least 6 character',
                },
                maxLength: {
                  value: 12,
                  message: 'Password must have less than 12 character',
                },
              })}
            />
            {errors?.password && (
              <p className='error'>{errors.password.message}</p>
            )}

            {/* <button className='button' type='submit'>
              Sign In
            </button> */}
            <div className="button-signin">
              <Button buttonStyle="btn--primary--solid" buttonSize="btn--medium" type="submit">Sign In</Button>
            </div>

            <br />
            <br />
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
