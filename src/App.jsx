/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

<<<<<<< 0c6e7bd5b634910f096733ab1d91ef880dee97d7
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
=======
import React from 'react';
import { View } from 'react-native';
import WallChallengeList from './components/wallChallengeList/WallChallengeList';

function App() {
  return (
    <View>
      <WallChallengeList />
    </View>
  );
>>>>>>> fit App.jsx to flow rules
}

export default App;
