// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { DecorationVideoPicture } from '../common';

type sourcesType = {
  challengeImageDescription: string,
  nbLikes: number,
};

type propsType = {
  sources: Array<sourcesType>,
  style: StyleObj,
};

const Body = (props: propsType) => {
  const { sources, style } = props;

  return (
    <View style={[styles.container, style]}>
      <DecorationVideoPicture
        imgSource={sources[0].challengeImageDescription}
        nbLikes={sources[0].nbLikes}
        size="L"
      />
      <DecorationVideoPicture
        imgSource={sources[1].challengeImageDescription}
        nbLikes={sources[1].nbLikes}
        size="L"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Body;
