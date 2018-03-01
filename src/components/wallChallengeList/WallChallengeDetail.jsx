import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Body from './Body';
import Header from './Header';
import { Card } from '../common';

class WallCallengeDetail extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  render() {
    const headerSource = this.props.data.map(x => ({
      name: x.name,
      profilePicture: x.profilePicture,
    }));

    const bodySources = this.props.data.map(x => ({
      nbLikes: x.nbLikes,
      challengeDescription: x.challengeDescription,
    }));

    return (
      <View>
        <Card style={styles.card}>
          <Header sources={headerSource} />
          <Body style={styles.body} sources={bodySources} />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
  body: {
    marginTop: 10,
  },
});

export default WallCallengeDetail;
