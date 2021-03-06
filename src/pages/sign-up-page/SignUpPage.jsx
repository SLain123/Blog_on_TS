import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { getRegistrationService } from '../../service/UsersService';
import userActions from '../../reducers/userReducer/userActions.ts';
import AuthRegForm from '../../components/auth-reg-form';
import FormField from '../../components/form-field';

import classes from './SignUpPage.module.scss';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const statusReg = useSelector((state) => state.user.statusReg);
  const onSuccessReg = useSelector((state) => state.user.onSuccessReg);
  const [doubleControl, setDControl] = useState(true);

  const { register, errors, handleSubmit, getValues } = useForm();
  const onSubmit = (data) => {
    if (doubleControl) {
      setDControl(false);
      getRegistrationService(data)
        .then((res) => {
          if (res.errors) {
            dispatch(userActions.changeRegStatus(res.errors));
            setDControl(true);
          } else {
            dispatch(userActions.changeRegStatus('success'));
            setTimeout(() => {
              dispatch(userActions.changeRegStatus(false));
              dispatch(userActions.successRegistration(true));
              setDControl(true);
            }, 2500);
          }
        })
        .catch((error) => {
          dispatch(userActions.changeRegStatus(error.message));
          setDControl(true);
        });
    }
  };

  if (onSuccessReg) {
    setTimeout(() => dispatch(userActions.successRegistration(false)), 500);
    return <Redirect to="/sign-in" />;
  }

  return (
    <AuthRegForm
      title="Create new account"
      onSubmit={handleSubmit(onSubmit)}
      btnLabel="Create"
      status={statusReg}
      footer={{ text: 'Already have an account?', link: '/sign-in', linkText: 'Sign In.' }}
    >
      <FormField
        label="Username"
        name="username"
        type="input"
        placeholder="Username"
        thisRef={register({ required: true, minLength: 3, maxLength: 20 })}
        errors={errors}
        errorOptions={[
          { target: 'required', message: 'This is a required field' },
          { target: 'maxLength', message: 'Your password needs to be no more 20 characters.' },
          { target: 'minLength', message: 'Your username needs to be at least 3 characters.' },
        ]}
      />
      <FormField
        label="Email address"
        name="email"
        type="input"
        placeholder="Email address"
        thisRef={register({
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/,
          required: true,
        })}
        errors={errors}
        errorOptions={[
          { target: 'required', message: 'This is a required field' },
          { target: 'pattern', message: 'You need specify a valid email address' },
        ]}
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        thisRef={register({ required: true, minLength: 8, maxLength: 40 })}
        errors={errors}
        errorOptions={[
          { target: 'required', message: 'This is a required field' },
          { target: 'maxLength', message: 'Your password needs to be no more 40 characters.' },
          { target: 'minLength', message: 'Your username needs to be at least 8 characters.' },
        ]}
      />
      <FormField
        label="Repeat Password"
        name="repeat"
        type="password"
        placeholder="Password"
        thisRef={register({
          validate: (value) => value === getValues('password'),
          required: true,
        })}
        errors={errors}
        errorOptions={[
          { target: 'required', message: 'This is a required field' },
          { target: 'validate', message: 'Passwords must match' },
        ]}
      />
      <hr className={classes.line} />
      <div className={classes.checkboxContainer}>
        <input
          id="agree"
          type="checkbox"
          className={classes.checkbox}
          ref={register({ required: true })}
          name="agree"
        />
        <label
          className={errors.agree?.type === 'required' ? `${classes.label} ${classes.errorLabel}` : classes.label}
          htmlFor="agree"
        >
          I agree to the processing of my personal information
        </label>
      </div>
    </AuthRegForm>
  );
};

export default SignUpPage;
