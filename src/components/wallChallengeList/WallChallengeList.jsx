// @flow
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import WallCallengeDetail from './WallChallengeDetail';

const PictureProfile1 = '../../../img/devTest/PictureProfile1.jpg';
const PictureProfile2 = '../../../img/devTest/PictureProfile2.jpg';
const ChallDescription1 = '../../../img/devTest/ChallDescription1.jpg';
const ChallDescription2 = '../../../img/devTest/ChallDescription2.jpg';

type playerType = Array<{
  name: string,
  profilePicture: string,
  nbLikes: number,
  challengeImageDescription: string,
}>;

const players: playerType = [
  {
    name: 'Méloch',
    profilePicture: PictureProfile1,
    challengeImageDescription: ChallDescription1,
    nbLikes: 180564,
  },
  {
    name: 'Macron',
    profilePicture: PictureProfile2,
    challengeImageDescription: ChallDescription2,
    nbLikes: 204564,
  },
];

class WallCallengeList extends Component<{}> {
  keyExtractor(item: playerType, index: number) {
    return `${index}`;
  }

  renderItem(param: { item: playerType }) {
    return <WallCallengeDetail data={param.item} />;
  }

  render() {
    let data = [];

    for (let i = 0; i < 30; i++) {
      data = [...data, players];
    }

    return (
      <View>
        <FlatList data={data} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
      </View>
    );
  }
}

export default WallCallengeList;
