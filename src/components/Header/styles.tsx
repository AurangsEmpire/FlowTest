import {StyleSheet} from 'react-native';

// helper
import {colors} from '../../utils/index';

//  responsive
import {getScaleSize, getFontStyle} from '../../utils/index';

//  define your styles
export default StyleSheet.create({
  container: {
    height: getScaleSize(55),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    height: getScaleSize(25),
    width: getScaleSize(25),
    marginTop: getScaleSize(10),
    marginStart: getScaleSize(15),
    position: 'absolute',
    left: 0,
    alignSelf: 'center',
    top: 10,
  },
  image: {
    height: getScaleSize(25),
    width: getScaleSize(25),
    tintColor: colors.orange,
  },
  text: {
    color: colors.black,
    alignSelf: 'center',
    fontSize: getScaleSize(16),
    marginTop: getScaleSize(10),
    fontFamily: getFontStyle().normal.fontFamily
  },
});
