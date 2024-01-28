// import React from 'react';
import './Login.scss';
import discordIcon from '../../assets/discordIcon.png';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err): void => {
      alert(err.message);
    });
  };
  return (
    <div className="login">
      <div className="loginlogo">
        <img src={discordIcon} alt="" />
      </div>
      <Button className="loginButton" onClick={signIn}>
        ログイン
      </Button>
    </div>
  );
};

export default Login;
