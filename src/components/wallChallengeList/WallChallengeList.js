import React, { Component } from 'react';
import {
  FlatList,
  View,
} from 'react-native';

import WallCallengeDetail from './WallChallengeDetail';


import PictureProfile1 from '../../../img/devTest/PictureProfile1.jpg';
import PictureProfile2 from '../../../img/devTest/PictureProfile2.jpg';
import ChallDescription1 from '../../../img/devTest/ChallDescription1.jpg';
import ChallDescription2 from '../../../img/devTest/ChallDescription2.jpg';


class WallCallengeList extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  keyExtractor(item, index) {
    return `${index}`;
  }

  renderItem({ item }) {
    console.log('item');
    console.log(item);

    return (
      <WallCallengeDetail
        data={item}
      />
    );
  }

  render() {
    let data = [];

    for (let i = 0; i < 30; i++) {
      data = [...data, players];
    }

    return (
      <View>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const players = [
  {
    name: 'Méloch',
    profilePicture: PictureProfile1,
    challengeDescription: ChallDescription1,
    nbLikes: 180564,
  }, {
    name: 'Macron',
    profilePicture: PictureProfile2,
    challengeDescription: ChallDescription2,
    nbLikes: 204564,
  }
];

export default WallCallengeList;
