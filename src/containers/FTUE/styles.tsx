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
  slide: {
    flex: 1,
    alignItems: 'center',
  },
  swiper: {
    height: '50%',
    marginTop: '10%',
  },
  header: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  footer: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  sliderImage: {
    height: getScaleSize(200),
    width: getScaleSize(200),
    borderRadius: getScaleSize(100),
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
  },
  actionContainer: {
    width: '90%',
    marginTop: getScaleSize(30),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  activeDotStyle: {
    width: 21,
    height: 6,
    backgroundColor: colors.orange,
    marginTop: 10,
  },
  dotStyle: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: '#d3d3d3',
    marginTop: 10,
  },
  mainTitle: {
    fontSize: getScaleSize(18),
    marginTop: getScaleSize(30),
    color: colors.lightGray1,
    fontFamily: getFontStyle().normal.fontFamily,
  },
  fbBtn: {
    backgroundColor: colors.blue,
  },
  register: {
    fontSize: getScaleSize(14),
    color: colors.lightGray2,
    fontFamily: getFontStyle().normal.fontFamily,
  },
  joinNow: {
    fontSize: getScaleSize(14),
    color: colors.orange_light,
    fontFamily: getFontStyle().normal.fontFamily,
  },
});
