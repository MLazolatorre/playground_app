import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { DecorationVideoPicture } from '../common';

class Body extends Component {
  render() {
    const { sources } = this.props;

    return (
      <View style={[styles.container, this.props.style]}>
        <DecorationVideoPicture
          imgSource={sources[0].challengeDescription}
          nbLikes={sources[0].nbLikes}
          size='L'
        />
        <DecorationVideoPicture
          imgSource={sources[1].challengeDescription}
          nbLikes={sources[1].nbLikes}
          size='L'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default Body;
