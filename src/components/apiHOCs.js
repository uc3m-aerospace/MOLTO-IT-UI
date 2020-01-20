import React from 'react';
import homeApiClient from './../clients/homeApiClient';
import loginApiClient from './../clients/loginApiClient'
import moltoItApiClient from './../clients/moltoItApiClient'

export const withHomeApiClient = Component => props => (
  <Component homeApiClient={homeApiClient(props.history)} {...props} />
);

export const withLoginClient = Component => props => (
  <Component loginApiClient={loginApiClient(props.history)} {...props} />
);

export const withMoltoItClient = Component => props => (
  <Component moltoItApiClient={moltoItApiClient(props.history)} newProps={props} />
);



