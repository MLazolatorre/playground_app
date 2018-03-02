// @flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { ButtonGradient, ProfilePicture } from '../common';

type propsType = {
  sources: Array<{
    profilePicture: string,
    name: string,
  }>,
};

const Header = (props: propsType) => {
  const { sources } = props;

  return (
    <View style={styles.container}>
      <ProfilePicture source={sources[0].profilePicture} userName={sources[0].name} size="S" />
      <View style={styles.middel}>
        <ButtonGradient>Clic ici!</ButtonGradient>
        <Text style={styles.challengeName}>Touche mon zizi !</Text>
      </View>
      <ProfilePicture source={sources[1].profilePicture} userName={sources[1].name} size="S" />
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
