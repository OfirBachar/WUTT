import React from 'react';
import { Typography } from '@mui/material';
import SignIn from '../components/SignIn';
import TopBar from '../components/TopBar';

const SignInPage = () => {
  return (
    <div>
        <TopBar />
      <SignIn />
    </div>
  );
};

export default SignInPage;
