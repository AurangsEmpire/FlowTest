import {colors} from '../utils';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const textColorUnselected = colors.gray10;
const textColorSelected = colors.orange;

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    tabTextUnselected: textColorUnselected,
    tabTextSelected: textColorSelected,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    //Because design wont affected by dark mode
    tabTextUnselected: textColorUnselected,
    tabTextSelected: textColorSelected,
    // tabTextUnselected: textColorSelected,
    // tabTextSelected: textColorUnselected,
  },
};
