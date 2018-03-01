/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ReduxThunk } from 'redux-thunk';

import Reducers from './reducers';
import WallChallengeList from './components/wallChallengeList/WallChallengeList';

export default class App extends Component<{}> {
  render() {
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <WallChallengeList />
      </Provider>
    );
  }
}
