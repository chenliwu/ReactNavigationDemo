import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './reducers/index';
import { AppNavigator, middleware } from './navigators/AppNavigator';

const store = createStore(AppReducer, applyMiddleware(middleware));

export default class ReduxExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
