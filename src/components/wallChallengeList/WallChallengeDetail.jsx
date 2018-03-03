// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';

import Body from './Body';
import Header from './Header';
import { Card } from '../common';

type APlayerType = {
  name: string,
  profilePicture: string,
  nbLikes: number,
  challengeImageDescription: string,
};

type challengeType = {
  challenge: {
    players: Array<APlayerType>,
    challengeName: string,
    totalViews: number,
  },
};

type propsType = {
  data: challengeType,
};

const WallChallengeDetail = (props: propsType) => {
  const headerSource = {
    totalViews: props.data.challenge.totalViews,
    challengeName: props.data.challenge.challengeName,
    players: props.data.challenge.players.map(x => ({
      name: x.name,
      profilePicture: x.profilePicture,
    })),
  };

  const bodySources = props.data.challenge.players.map(x => ({
    nbLikes: x.nbLikes,
    challengeImageDescription: x.challengeImageDescription,
  }));

  return (
    <View>
      <Card style={styles.card}>
        <Header data={headerSource} />
        <Body style={styles.body} sources={bodySources} />
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
