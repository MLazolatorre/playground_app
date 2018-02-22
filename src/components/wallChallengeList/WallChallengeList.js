import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import WallCallengeDetail from './WallChallengeDetail';

class WallCallengeList extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  render() {
    return (
      <View>
        <WallCallengeDetail />
      </View>
    );
  }
}

export default WallCallengeList;
