import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Utils/Button/Button';
const Signup = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      phoneNumber: '',
      birthDay: '',
      address: '',
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = methods;

  const onSubmit = (values) => {
    handleSignup(values);
  };

  const handleSignup = async (signupData) => {
    try {
      await axios.post(
        'http://w42g8.int3306.freeddns.org/api/v1/auth/signup',
        signupData
      );
      navigate('/login');
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
          <div id='left' onClick={() => navigate('/login')}>
            <h1 className='s1class'>
              <span>SIGN</span>
              <span className='su'>IN</span>
            </h1>
          </div>
          <div id='right' className='right_hover'>
            <h1 className='s2class'>
              <span>SIGN</span>
              <span className='su'>UP</span>
            </h1>
          </div>
        </div>
        <div className='c2'>
          <form className='signin' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='signup1'>SIGN UP</h1>
            <br />
            <input
              type='text'
              placeholder='Email*'
              className='username'
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Invalid email',
                },
              })}
            />
            {errors?.email && <p className='error'>{errors.email.message}</p>}
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
            <input
              type='password'
              placeholder='Confirm password*'
              className='username'
              {...register('confirmPassword', {
                required: {
                  value: true,
                  message: 'Confirm password is required',
                },
                validate: (val) => {
                  if (watch('password') !== val) {
                    return 'Your passwords do not match';
                  }
                },
              })}
            />
            {errors?.confirmPassword && (
              <p className='error'>{errors.confirmPassword.message}</p>
            )}
            <input
              type='text'
              placeholder='Fullname*'
              className='username'
              {...register('fullName', {
                required: {
                  value: true,
                  message: 'Fullname is required',
                },
                minLength: {
                  value: 6,
                  message: 'Fullname have at least 6 character',
                },
                maxLength: {
                  value: 12,
                  message: 'Fullname have less than 12 character',
                },
              })}
            />
            {errors?.fullName && (
              <p className='error'>{errors.fullName.message}</p>
            )}
            <input
              type='number'
              placeholder='Phone number*'
              className='username'
              {...register('phoneNumber', {
                required: {
                  value: true,
                  message: 'Phone number is required',
                },
              })}
            />
            {errors?.phoneNumber && (
              <p className='error'>{errors.phoneNumber.message}</p>
            )}
            <input
              type='date'
              placeholder='Birthday*'
              className='username'
              {...register('birthDay', {
                required: {
                  value: true,
                  message: 'Birthday is required',
                },
              })}
            />
            {errors?.birthDay && (
              <p className='error'>{errors.birthDay.message}</p>
            )}
            <input
              type='text'
              placeholder='Address*'
              className='username'
              {...register('address', {
                required: {
                  value: true,
                  message: 'Address is required',
                },
              })}
            />
            {errors?.address && (
              <p className='error'>{errors.address.message}</p>
            )}
            {/* <button className='button' type='submit'>
              Sign Up
            </button> */}
            <div className="button-signup">
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

export default Signup;
