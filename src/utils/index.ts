import {Dimensions} from 'react-native';

// Dimensions
const ScreenHeight = Math.round(Dimensions.get('window').height);
const ScreenWidth = Math.round(Dimensions.get('window').width);

const colors = {
  primary: '#4A064B',
  white: '#FFFFFF',
  inputBackground: 'rgba(255, 255, 255, 0.19)',
  lightGray: '#949494',
  lightGray1: '#5f5f5f',
  lightGray2: '#a9a9a9',
  lightGray3: '#f5f5f5',
  errorColor: '#e82020',
  orange: '#e6624c',
  orange_light: '#c48675',
  blue: '#3b5a9a',
  black: '#000',
  primaryHex: '#2C8BE9',
  primaryHeader: '#FAFAFA',
  secondary: '#656565',
  tabTextUnselected: '#575756',
  tertiary: '#8E81A1',
  fontPrimary: '#FFFFFF',
  fontSecondary: '#C26B6A',
  fontTertiary: '#000000',
  gray1: '#999999',
  dimGray: '#FAFAFA',
  dimGray1: '#EEEEEE',

  fontColor1: '#7C7C7C',
  fontColor2: '#838383',
  fontColor3: '#7E7E7E',
  lightPink: '#E0B5B4',
  greenColor: '#3B9166',
  green: '#95C11F',
  green_safe: '#3AAA35',
  darkGreen: '#0B4652',
  green2: '#C5D534',
  green3: '#8B9C22',

  gray2: '#4B4B4B',
  gray3: '#A5A5A5',
  gray4: '#707070',
  gray5: '#F3F3F3',
  gray6: '#B9B9B9',
  gray7: '#979797',
  gray8: '#EFEFEF',
  gray9: '#E8E6EC',
  gray10: '#9b9b9b',

  //Useless
  fontColor4: '#6DA06F',
  fontColor5: '#0DA460',
  fontColor6: '#3A3A3A',
  fontColor7: '#32B278',
  fontColor8: '#057DBC',
};

// responsive
const scalingFactor = Math.min(ScreenWidth, ScreenHeight) / 375;

const getScaleSize = (multi: number) =>
  multi ? scalingFactor * multi : scalingFactor;

// fontfamily
const getFontStyle = (langauge?: string) => ({
  bold: {
    fontFamily: 'Montserrat-Bold',
  },
  semibold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  medium: {
    fontFamily: 'Montserrat-Medium',
  },
  normal: {
    fontFamily: 'Montserrat-Regular',
  },
});

// all exports  --
export {ScreenHeight, ScreenWidth, colors, getFontStyle, getScaleSize};
