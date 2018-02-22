import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
} from 'react-native';

import SvgUri from 'react-native-svg-uri';
import LikeSvg from '../../../img/heart.svg';

/**
 * The picture that repesent the challenge
 */
class DecorationVideoPicture extends Component {
  constructor(props) {
    super(props);

    this.image = { size: '' };
  }

  render() {
    return (
      <View>
        <Image
          source={this.props.imgSource}
          style={[styles.image, this.image.size]}
        />
        <View
          style={styles.likesContainer}
        >
          <Text style={styles.likes}>{this.props.nbLikes}  </Text>
          <SvgUri
            width="16"
            height="16"
            fill='#9c47ff'
            source={LikeSvg}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 10,
  },
  likesContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  likesText: {
    color: '#9c47ff',
    fontSize: 16,
    fontWeight: '400',
  }
});

export { DecorationVideoPicture };
