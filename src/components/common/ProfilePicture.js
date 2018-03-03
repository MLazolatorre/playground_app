import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ComponentSizeProp from '../../classes/ComponentSizeProp';


/**
 * A Profile Picture
 * @prop {path} source the path of the profile picture
 * @prop {string | object : {height:number, width:number} } size pre-define size for the profile
 *  picture : S, M, L, XL, or an object as a style object
 */
class ProfilePicture extends Component {
  constructor(props) {
    super(props);

    this.borderColors = ['#9c47ff', '#41d1c3'];
    this.image = { size: '' };
    this.border = { size: '' };
  }

  componentWillMount() {
    /** TODO transforme the source in URL or URI an load it from the web **/

    this.setPictureAndBorderSize();
  }

  /**
   * Set picture's and border's width and height
   * @param {string} size a string that discribe the picture's size : S, M, L, XL
   */
  setPictureAndBorderSize() {
    // if there is no size description, return
    if (!this.props || !this.props.size) return;

    const imageSizeObj = new ComponentSizeProp(this.props.size);

    this.image.size = imageSizeObj.size;
    this.border.size = imageSizeObj.borderSize;
  }

  /**
   * display the user name with an '@'
   * @return {JSX|null} the user name with the @ or nothing
   */
  displayUserName() {
    if (this.props.userName) {
      return (
        <Text style={styles.userName}>@{this.props.userName}</Text>
      );
    }
  }

  render() {
    return (
      <View
        style={{
          margin: 3,
          alignItems: 'center',
        }}
      >
        <LinearGradient
          start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}
          colors={this.borderColors}
          style={[styles.border, this.border.size]}
        >
          <Image
            source={this.props.source}
            style={[styles.image, this.props.style, this.image.size]}
          />
        </LinearGradient>
        {this.displayUserName()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 105,
    width: 105,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 90,
  },
  userName: {
  }
});

export { ProfilePicture };
