import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';

import {HeaderProps} from '../../Interfaces/components';

const Header = ({navigation, title, style}: HeaderProps): JSX.Element => {
  const onClick = () => {
    navigation && navigation.goBack();
  };

  return (
    <View style={{...styles.container, ...style}}>
      <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={0.8}
        onPress={() => onClick()}>
        <Image
          style={styles.image}
          source={require('../../assets/icons/left_arrow.png')}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
