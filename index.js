/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';
import {store} from './src/store';
import {Provider} from 'react-redux';
import React from 'react';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);

axios.defaults.baseURL = 'http://192.168.10.64:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
