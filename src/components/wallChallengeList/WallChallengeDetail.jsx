// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';

import Body from './Body';
import Header from './Header';
import { Card } from '../common';

type propsType = {
  data: Array<{
    name: string,
    profilePicture: string,
    nbLikes: number,
    challengeImageDescription: string,
  }>,
};

const WallCallengeDetail = (props: propsType) => {
  const headerSource = props.data.map(x => ({
    name: x.name,
    profilePicture: x.profilePicture,
  }));

  const bodySources = props.data.map(x => ({
    nbLikes: x.nbLikes,
    challengeImageDescription: x.challengeImageDescription,
  }));

  return (
    <View>
      <Card style={styles.card}>
        <Header sources={headerSource} />
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

export default WallCallengeDetail;
