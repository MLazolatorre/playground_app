// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { DecorationVideoPicture } from '../common';

type dataType = {
  challengeImageDescription: string,
  nbLikes: number,
};

type propsType = {
  data: Array<dataType>,
  style: StyleObj,
};

const Body = (props: propsType) => {
  const { data, style } = props;

  return (
    <View style={[styles.container, style]}>
      <DecorationVideoPicture
        imgSource={data[0].challengeImageDescription}
        nbLikes={data[0].nbLikes}
        size="L"
      />
      <DecorationVideoPicture
        imgSource={data[1].challengeImageDescription}
        nbLikes={data[1].nbLikes}
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
