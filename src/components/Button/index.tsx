import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import {ButtonProps} from '../../Interfaces/components';

const Button = ({
  onClick,
  text,
  style,
  textStyle,
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...style}}
      activeOpacity={0.8}
      onPress={() => onClick()}>
      <Text style={{...styles.text, ...textStyle}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
