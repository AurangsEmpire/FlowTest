import {StyleSheet} from 'react-native';

// helper
import {colors} from '../../utils/index';

//  responsive
import {getScaleSize, getFontStyle} from '../../utils/index';

//  define your styles
export default StyleSheet.create({
  container: {
    height: getScaleSize(55),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.orange,
    justifyContent: 'center',
    borderRadius: getScaleSize(5),
    marginTop: getScaleSize(15),
  },
  text: {
    color: colors.white,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: getScaleSize(16),
    fontFamily: getFontStyle().semibold.fontFamily
  },
});
