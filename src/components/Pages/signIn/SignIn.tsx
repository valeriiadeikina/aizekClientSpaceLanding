import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../App/commonComponents/Button/Button';
import './signInPageStyles.css';
import '../../App/commonComponents/Form/formStyles.css';

type FormInput = {
  login: string;
  password: string;
};

export default function SignIn() {
  const navigate = useNavigate();
  const sumbmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as FormInput;
    try {
      await axios.post('/api/auth/signin', formData);
      e.currentTarget.reset();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signinPageContainer">
      <form className="formStyled signinForm" onSubmit={(e) => sumbmitHandler(e)}>
        <div className="formBackground formBackgroundSignin" id="z">
          <h2 className='formTitle'>Вход в систему</h2>
          <p className="formText">
            Если у вас еще нет логина и пароля, пожалуйста, пройдите{' '}
            <Link className="signinSignupLink" to="/auth">
              регистрацию
            </Link>
          </p>
        </div>

        <input className="formInput" name="login" type="text" placeholder="Логин (Email)" />
        <input className="formInput" name="password" type="text" placeholder="Пароль *****" />

        <div className="signinBtnContainer">
          <Button type="submit">Войти</Button>
          <span className="signinSignupSpan">
            Нужен логин?{' '}
            <Link className="signinSignupLink" to="/auth">
              Зарегистрируйтесь
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
