import React, {useEffect} from 'react';
import {View, Text, Image, FlatList, ImageBackground} from 'react-native';

// config
import globalStyle from '../../../config/globalStyle';
import styles from './styles';

// Interfaces
import {HomeProps} from '../../../Interfaces/containers';

//  redux
import {connect} from 'react-redux';
import {ActionCreators} from '../../../actions';
import {bindActionCreators} from 'redux';

// components
import Button from '../../../components/Button';

// helper
import {appString} from '../../../utils/contants';
import {ScrollView} from 'react-native-gesture-handler';

// Assets
import DummyImage from '../../../assets/icons/Property.jpeg';
import {getScaleSize, ScreenWidth} from '../../../utils';
import Constants from '../../../constants';
import Carousel from 'react-native-snap-carousel';

const Home = ({navigation, props, logoutSuccess, actions}: HomeProps) => {
  const _renderListItem = (item: any, index: number) => {
    // Render flat list item:
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.itemImage} source={item.image} />
        </View>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  };

  const _renderItem = (item: any, index: number) => {
    // Render Carousel item
    return (
      <ImageBackground
        source={{uri: item.item.image}}
        style={styles.itemImageBg}>
        <Text style={styles.sliderDecText}>{appString.description}</Text>
        <Text style={styles.sliderText}>{item.item.title}</Text>

        <Button
          onClick={() => alert(appString.book_now)}
          style={styles.btnBook}
          textStyle={styles.textStyle}
          text={appString.book_now}
        />
      </ImageBackground>
    );
  };

  const _renderSlider = (title: string) => {
    // render Carousel slider with different title:
    return (
      <View style={styles.slider}>
        <Text style={styles.title}>{title}</Text>
        <Carousel
          data={Constants.SLIDER}
          renderItem={_renderItem}
          sliderWidth={ScreenWidth}
          itemWidth={getScaleSize(160)}
          firstItem={1}
        />
      </View>
    );
  };

  return (
    <View style={globalStyle.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
        <Image source={DummyImage} style={styles.image} />
        <View style={styles.header}>
          <FlatList
            data={Constants.DATA}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: any) => item && item}
            style={styles.flatList}
            numColumns={4}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({item, index}: any) => _renderListItem(item, index)}
          />
        </View>
        {_renderSlider(appString.promos_today)}
        {_renderSlider(appString.tours)}
      </ScrollView>
    </View>
  );
};

// received  props
const mapStateToProps = (state: any) => ({
  logoutSuccess: state.authReducer.logoutSuccess,
});

// send action
const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

// export container
export default connect(mapStateToProps, mapDispatchToProps)(Home);
