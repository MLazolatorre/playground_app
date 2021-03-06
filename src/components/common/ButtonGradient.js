// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type propsType = {
  style: StyleObj,
  children: string,
};

class ButtonGradient extends Component<propsType> {
  buttonColors: Array<string> = ['#9c47ff', '#41d1c3'];

  render() {
    return (
      <View>
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          colors={this.buttonColors}
          style={[styles.button, this.props.style]}
        >
          <View style={{ justifyContent: 'center', height: '100%' }}>
            <Text style={styles.text}>{this.props.children}</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 90,
    width: 120,
    height: 25,
  },
  text: {
    color: '#FFF',
    alignSelf: 'center',
  },
});

export default ButtonGradient;
