import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

//  redux
import {connect} from 'react-redux';
import {ActionCreators} from '../../actions';
import {bindActionCreators} from 'redux';

// style
import styles from './styles';

// components
import Button from '../../components/Button';

// Interfaces
import {LoginProps} from '../../Interfaces/containers';

// helper
import {appString, ScreenName} from '../../utils/contants';

import Swiper from 'react-native-swiper';

const slides = [
  {
    image:
      'https://c4.wallpaperflare.com/wallpaper/790/555/758/garden-square-square-garden-nature-forests-hd-art-wallpaper-preview.jpg',
  },
  {
    image:
      'https://4.imimg.com/data4/XH/FE/MY-310713/nr_0032_62x49-500x500.jpg',
  },
  {
    image:
      'https://store-images.s-microsoft.com/image/apps.21449.13510798886705778.52b15b6d-1831-4dd2-a4ee-f7def0b276f2.4a4438e8-16b1-49bf-b963-3bfe3ae01d24',
  },
];

const FTUE = ({props, navigation}: LoginProps) => {
  const onClickSignin = () => {
    // Handle click to naviagte to the Login Screen :
    navigation.navigate(ScreenName.LOGIN);
  };

  const _renderItem = (item: any) => {
    // Render Item of swiper with one image and text:
    return (
      <View style={styles.slide}>
        <Image style={styles.sliderImage} source={{uri: item.image}} />
        <Text style={styles.mainTitle}>{appString.msg}</Text>
      </View>
    );
  };

  return (
    <View style={styles.containerView}>
      <View style={styles.mainView}>
        {/* Render header with slider: */}
        <View style={styles.header}>
          <Swiper
            autoplay
            containerStyle={styles.swiper}
            showsButtons={false}
            activeDotStyle={styles.activeDotStyle}
            dotStyle={styles.dotStyle}>
            {slides.map((item: any) => _renderItem(item))}
          </Swiper>
        </View>
        {/* Render Footer View with buttons: */}
        <View style={styles.footer}>
          <Button
            style={styles.fbBtn}
            text={appString.login_facebook}
            onClick={() => onClickSignin()}
          />
          <Button text={appString.sign_in} onClick={() => onClickSignin()} />
          <View style={styles.actionContainer}>
            <Text onPress={() => onClickSignin()} style={styles.register}>
              {appString.register}
            </Text>
            <Text onPress={() => onClickSignin()} style={styles.joinNow}>
              {appString.join_now}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// received  props
const mapStateToProps = (state: any) => ({
  loginSuccess: state.authReducer.loginSuccess,
});

// send action
const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

// export container
export default connect(mapStateToProps, mapDispatchToProps)(FTUE);
