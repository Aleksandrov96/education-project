/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import login from '../../../utils/login';
import setToastSuccess from '../../../utils/setToastSuccess';
import setToastError from '../../../utils/setToastError';
import ToasterContainer from '../../common/ToasterContainer/ToasterContainer';
import setToken from './utils/setToken';
import './SignInForm.scss';

type FormValues = {
  email: string,
  password: string,
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(6).max(10).required(),
});

function SignInForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    login(data.email, data.password)
      .then((value) => {
        if (typeof value === 'string') {
          setToken(value);
          setToastSuccess('Login successfuly!');
          navigate('/main');
        }
      })
      .catch((error: string) => setToastError(error));
  };

  return (
    <div className="signInForm">
      <form className="auth" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div className="formInput__text">
            <p className="labelText">Email: </p>
            <p className="validationError">
              {errors.email && 'Email is required'}
            </p>
          </div>
          <input
            type="email"
            placeholder="Enter your email..."
            {...register('email', { required: true })}
            className="formInput"
          />
        </label>
        <label>
          <div className="formInput__text">
            <p className="labelText">Password: </p>
            <p className="validationError">
              {errors.password && 'Password should be at least 6 characters long'}
            </p>
          </div>
          <input
            type="password"
            placeholder="Enter your password..."
            {...register('password', { required: true })}
            className="formInput"
          />
        </label>
        <button
          className="submitBtn"
          type="submit"
        >
          SIGN IN
        </button>
      </form>
      <ToasterContainer />
    </div>
  );
}

export default SignInForm;
