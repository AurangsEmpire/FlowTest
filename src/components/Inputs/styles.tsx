import {StyleSheet} from 'react-native';

// helper
import {colors} from '../../utils/index';

//  responsive
import {getScaleSize, getFontStyle} from '../../utils/index';

//  define your styles
export default StyleSheet.create({
  textInputContainer: {
    marginTop: getScaleSize(20),
    marginBottom: getScaleSize(5),
  },
  inputTextContainer: {
    fontSize: getScaleSize(14),
    height: getScaleSize(40),
    color: colors.lightGray,
    paddingHorizontal: getScaleSize(15),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.lightGray3,
    borderRadius: getScaleSize(5),
    fontFamily: getFontStyle().normal.fontFamily,
  },
  errorText: {
    color: colors.errorColor,
    fontSize: getScaleSize(12),
    marginLeft: getScaleSize(25),
    fontFamily: getFontStyle().normal.fontFamily,
  },
});
