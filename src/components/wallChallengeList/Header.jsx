// @flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { ButtonGradient, ProfilePicture } from '../common';

type propsType = {
  data: {
    totalViews: number,
    challengeName: string,
    players: Array<{
      profilePicture: string,
      name: string,
    }>,
  },
};

const Header = (props: propsType) => {
  const { data } = props;

  return (
    <View style={styles.container}>
      <ProfilePicture source={data[0].profilePicture} userName={data[0].name} size="S" />
      <View style={styles.middel}>
        <ButtonGradient>{data.totalViews}</ButtonGradient>
        <Text style={styles.challengeName}>{data.challengeName}</Text>
      </View>
      <ProfilePicture source={data[1].profilePicture} userName={data[1].name} size="S" />
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
