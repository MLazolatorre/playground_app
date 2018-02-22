import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

class Card extends Component {
  render() {
    const { props } = this;

    return (
      <View style={[styles.containerStyle, props.style]}>
        {props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});

export { Card };
