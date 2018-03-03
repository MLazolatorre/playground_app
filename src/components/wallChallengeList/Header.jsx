// @flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { ButtonGradient, ProfilePicture } from '../common';

type propsType = {
  players: Array<{
    profilePicture: string,
    name: string,
  }>,
  challengeDetail: {
    views: number,
    name: string,
  },
};

const Header = (props: propsType) => {
  const { players, challengeDetail } = props;

  return (
    <View style={styles.container}>
      <ProfilePicture source={players[0].profilePicture} userName={players[0].name} size="S" />
      <View style={styles.middel}>
        <ButtonGradient>{challengeDetail.views}</ButtonGradient>
        <Text style={styles.challengeName}>{challengeDetail.name}</Text>
      </View>
      <ProfilePicture source={players[1].profilePicture} userName={players[1].name} size="S" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  middel: {},
  challengeName: {
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default Header;
