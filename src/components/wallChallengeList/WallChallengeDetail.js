import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Body from './Body';
import Header from './Header';
import {
  Card,
} from '../common';

import PictureProfile1 from '../../../img/devTest/PictureProfile1.jpg';
import PictureProfile2 from '../../../img/devTest/PictureProfile2.jpg';
import ChallDescription1 from '../../../img/devTest/ChallDescription1.jpg';
import ChallDescription2 from '../../../img/devTest/ChallDescription2.jpg';


class WallCallengeDetail extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  render() {
    const headerSource = players.map(x => ({
      name: x.name,
      profilePicture: x.profilePicture,
    }));

    const bodySources = players.map(x => ({
      nbLikes: x.nbLikes,
      challengeDescription: x.challengeDescription,
    }));

    return (
      <View>
        <Card style={styles.card}>
          <Header
            sources={headerSource}
          />
          <Body
            style={styles.body}
            sources={bodySources}
          />
        </Card>
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

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
  body: {
    marginTop: 10,
  }
});

export default WallCallengeDetail;
