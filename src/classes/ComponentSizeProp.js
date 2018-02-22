export default class ComponentSizeProp {
  /**
   * [constructor description]
   * @param {number | string} sizeObjOrString         [description]
   */
  constructor(sizeObjOrString) {
    // if sizeObjOrString is a string we set the size with the predefined value
    if (typeof sizeObjOrString === 'string') {
      this.setPictureSizeFromSize(sizeObjOrString);

      return;
    }

    const { height, width } = sizeObjOrString;

    if (!height || !width) throw new Error('Height or width argument is missing');

    this.component = {
      height,
      width,
    };

    this.border = {
      height: height + 5,
      width: width + 5,
    };
  }

  /**
   * Get an object with the height and the width value
   * @param {number} height
   * @param {number | null} width if null it's a square
   */
  JSONSize(height, width = height) {
    return {
      height,
      width,
    };
  }

  /**
   * Get the component JSON size, usable as a style object
   * @return {Object: {height: number, width: number }} the style usable object
   */
  get size() {
    return this.JSONSize(this.component.height, this.component.width);
  }

  /**
   * Get the border component JSON size, usable as a style object
   * @return {Object: {height: number, width: number }} the style usable object
   */
  get borderSize() {
    return this.JSONSize(this.border.height, this.border.width);
  }

  /**
   * set the component size from a string as : S, M, L, XL
   * @param {[type]} size [description]
   */
  setPictureSizeFromSize(size) {
    switch (size) {
      case 'S':
        this.component = this.JSONSize(50);
        this.border = this.JSONSize(55);
        break;
      case 'M':
        this.component = this.JSONSize(100);
        this.border = this.JSONSize(100);
        break;
      case 'L':
        this.component = this.JSONSize(130);
        this.border = this.JSONSize(135);
        break;
      case 'XL':
        this.component = this.JSONSize(160);
        this.border = this.JSONSize(165);
        break;
      default:
        throw new Error('Wrong value of this.props.size');
    }
  }
}
