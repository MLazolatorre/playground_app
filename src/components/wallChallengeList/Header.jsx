import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {
  ButtonGradient,
  ProfilePicture,
} from '../common';

class Header extends Component {
  render() {
    const { sources } = this.props;

    return (
      <View style={styles.container}>
        <ProfilePicture
          source={sources[0].profilePicture}
          userName={sources[0].name}
          size='S'
        />
        <View style={styles.middel}>
          <ButtonGradient>
            Clic ici!
          </ButtonGradient>
          <Text style={styles.challengeName}>Touche mon zizi !</Text>
        </View>
        <ProfilePicture
          source={sources[1].profilePicture}
          userName={sources[1].name}
          size='S'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  middel: {
  },
  challengeName: {
    marginTop: 10,
    alignSelf: 'center',
  }
});

export default Header;
