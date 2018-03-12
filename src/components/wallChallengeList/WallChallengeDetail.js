// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';

import Body from './Body';
import Header from './Header';
import { Card } from '../common';

type playerType = {
  name: string,
  profilePicture: string,
  nbLikes: number,
  challengeImageDescription: string,
};

type challengeType = {
  players: Array<playerType>,
  challengeName: string,
  totalViews: number,
};

type propsType = {
  data: challengeType,
};

const WallChallengeDetail = (props: propsType) => {
  const headerSource = {
    challengeDetail: {
      views: props.data.totalViews,
      name: props.data.challengeName,
    },
    players: props.data.players.map(x => ({
      name: x.name,
      profilePicture: x.profilePicture,
    })),
  };

  const bodySources = props.data.players.map(x => ({
    nbLikes: x.nbLikes,
    challengeImageDescription: x.challengeImageDescription,
  }));

  return (
    <View>
      <Card style={styles.card}>
        <Header players={headerSource.players} challengeDetail={headerSource.challengeDetail} />
        <Body style={styles.body} data={bodySources} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
  body: {
    marginTop: 10,
  },
});

export default WallChallengeDetail;
