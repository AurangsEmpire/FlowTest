import {StyleSheet} from 'react-native';

// helper
import {
  getScaleSize,
  getFontStyle,
  ScreenHeight,
  ScreenWidth,
  colors,
} from '../../utils/index';

//  define your styles
export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    height: getScaleSize(130),
    width: getScaleSize(130),
    borderRadius: getScaleSize(100),
    alignSelf: 'center',
  },
  title: {
    fontSize: getScaleSize(18),
    marginVertical: getScaleSize(30),
    color: colors.lightGray1,
    alignSelf: 'center',
    fontFamily: getFontStyle().normal.fontFamily
  },
});
