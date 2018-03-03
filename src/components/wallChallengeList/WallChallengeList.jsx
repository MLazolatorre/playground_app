// @flow
import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';

import WallChallengeDetail from './WallChallengeDetail';

const PictureProfile1 = '../../../img/devTest/PictureProfile1.jpg';
const PictureProfile2 = '../../../img/devTest/PictureProfile2.jpg';
const ChallDescription1 = '../../../img/devTest/ChallDescription1.jpg';
const ChallDescription2 = '../../../img/devTest/ChallDescription2.jpg';

type playerType = {
  name: string,
  profilePicture: string,
  nbLikes: number,
  challengeImageDescription: string,
};

type challengeType = {
  challenge: {
    players: Array<playerType>,
    challengeName: string,
    totalViews: number,
  },
};

const players: Array<playerType> = [
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
  keyExtractor(item: challengeType, index: number): string {
    return `${index}`;
  }

  renderItem(info: { item: challengeType }) {
    return <WallChallengeDetail data={info.item} />;
  }

  render() {
    let data: Array<challengeType> = [];

    for (let i = 0; i < 30; i++) {
      data = [
        ...data,
        {
          challenge: {
            players,
            totalViews: 123456,
            challengeName: 'Deviens President',
          },
        },
      ];
    }

    return (
      <View>
        <FlatList data={data} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
      </View>
    );
  }
}

export default connect()(WallCallengeList);
