import {StyleSheet, Platform} from 'react-native';

// helper
import {getScaleSize, getFontStyle, colors} from '../../../utils/index';

//  define your styles
export default StyleSheet.create({
  mainTitle: {
    fontSize: getScaleSize(45),
    fontFamily: getFontStyle().bold.fontFamily,
    color: colors.white,
    marginTop: getScaleSize(30),
    alignSelf: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginTop: getScaleSize(10),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: getScaleSize(50),
    width: getScaleSize(50),
    borderRadius: getScaleSize(25),
    backgroundColor: colors.lightGray3,
  },
  itemImage: {
    height: getScaleSize(20),
    width: getScaleSize(20),
  },
  header: {
    width: '90%',
    alignSelf: 'center',
    marginTop: getScaleSize(-100),
    backgroundColor: colors.white,
    borderRadius: getScaleSize(8),
    elevation: getScaleSize(10),
    shadowRadius: getScaleSize(2),
    shadowOffset: {
      width: 0,
      height: getScaleSize(5),
    },
    shadowColor: colors.gray3,
    shadowOpacity: 0.3,
  },
  image: {
    height: getScaleSize(Platform.OS == 'android' ? 200 : 250),
    width: '100%',
  },
  slider: {
    marginTop: getScaleSize(30),
  },
  btnBook: {
    width: getScaleSize(80),
    height: getScaleSize(25),
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontSize: getScaleSize(10),
    fontFamily: getFontStyle().bold.fontFamily,
  },
  itemText: {
    fontSize: getScaleSize(12),
    fontFamily: getFontStyle().normal.fontFamily,
  },
  sliderDecText: {
    fontSize: getScaleSize(12),
    color: colors.white,
    fontFamily: getFontStyle().normal.fontFamily,
  },
  sliderText: {
    fontSize: getScaleSize(20),
    color: colors.white,
    fontFamily: getFontStyle().bold.fontFamily,
  },
  itemImageBg: {
    width: getScaleSize(160),
    height: getScaleSize(219),
    borderRadius: getScaleSize(10),
    overflow: 'hidden',
    justifyContent: 'flex-end',
    padding: getScaleSize(10),
  },
  title: {
    fontSize: getScaleSize(18),
    width: '90%',
    alignSelf: 'center',
    color: colors.black,
    fontFamily: getFontStyle().semibold.fontFamily,
    marginBottom: getScaleSize(20),
  },
  scroll: {flexGrow: 1, paddingBottom: 30},
  flatList: {
    flexGrow: 1,
    width: '100%',
  },
  flatListContainer: {
    padding: getScaleSize(10),
    width: '100%',
  },
});
