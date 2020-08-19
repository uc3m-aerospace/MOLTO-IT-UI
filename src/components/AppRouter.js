import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import { withLoginClient } from './apiHOCs';

const AppRouter = ({ loginApiClient }) => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await loginApiClient.Login();
        if (res) {
          if (res.jwt) {
            console.log('Logged.');
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  );
};

export default withLoginClient(AppRouter);
